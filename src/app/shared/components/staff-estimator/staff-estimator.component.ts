import { ChangeDetectionStrategy, Component, Input, computed, inject, signal } from '@angular/core';
import { STAFF_PACKAGES } from '../../../core/data/staff-pricing.data';
import { format } from '../../../core/i18n/translations';
import type { StaffPackageId } from '../../../core/models/StaffPackage';
import { LanguageService } from '../../../core/services/language.service';
import { WhatsappService } from '../../../core/services/whatsapp.service';
import { formatPrice, formatPricePerM2 } from '../../../core/utils/fortmat';
import { HOUSE_TYPES } from '../../../core/data/house-types.data';
import { EstimateRow } from '../../../core/models/EstimateRow';
import { RoomKey, HouseTypeId } from '../../../core/models/HouseType';
import { Materials, ratePerM2, computeEstimate } from '../../utils/staff-estimate';

const TOTAL_STEPS = 4;
const STEP_KEYS = ['house', 'formula', 'rooms', 'result'] as const;
const ROOM_KEYS: RoomKey[] = [
  'living', 'dining', 'bedroom', 'kitchen', 'veranda', 'shower', 'office', 'corridor', 'lounge', 'other',
];

@Component({
  selector: 'app-staff-estimator',
  standalone: true,
  templateUrl: './staff-estimator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffEstimatorComponent {
  protected readonly lang = inject(LanguageService);
  private readonly whatsapp = inject(WhatsappService);

  /** Formule proposée au départ (bouton « Estimer mon projet » d'une carte de formule) */
  @Input() set formula(id: StaffPackageId) {
    this.formulaId.set(id);
  }

  protected readonly step = signal(1);
  protected readonly house = signal<HouseTypeId | null>(null);
  protected readonly formulaId = signal<StaffPackageId>('design');
  protected readonly materials = signal<Materials>('sidof');
  protected readonly rows = signal<EstimateRow[]>([]);
  private nextId = 1;

  protected readonly houseIds = HOUSE_TYPES.map((item) => item.id);
  protected readonly formulaIds = STAFF_PACKAGES.map((item) => item.id);
  protected readonly roomKeys = ROOM_KEYS;
  protected readonly stepKeys = STEP_KEYS;

  protected readonly t = computed(() => this.lang.t().interiorPage.estimator);
  protected readonly packages = computed(() => this.lang.t().interiorPage.staffPricing.packages);

  protected readonly stepLabel = computed(() =>
    format(this.t().stepOf, { current: this.step(), total: TOTAL_STEPS }),
  );

  /** Les trois formules avec leur prix au m², selon qui achète le matériel */
  protected readonly formulaOptions = computed(() => {
    const lang = this.lang.lang();
    const materials = this.materials();
    const packages = this.packages();
    return STAFF_PACKAGES.map((pack) => ({
      id: pack.id,
      title: packages[pack.id].title,
      price: formatPricePerM2({ min: ratePerM2(pack, materials) }, lang),
    }));
  });

  private readonly estimate = computed(() =>
    computeEstimate(this.rows(), this.formulaId(), this.materials(), STAFF_PACKAGES),
  );

  protected readonly lines = computed(() => {
    const lang = this.lang.lang();
    const t = this.t();
    const packages = this.packages();
    return this.estimate().lines.map((line) => ({
      id: line.rowId,
      label: `${t.rooms[line.room]} · ${line.area} m² · ${packages[line.formula].title}`,
      amount: formatPrice(line.amount, lang),
    }));
  });

  protected readonly totalLabel = computed(() => formatPrice(this.estimate().total, this.lang.lang()));

  protected readonly canContinue = computed(() => {
    switch (this.step()) {
      case 1:
        return this.house() !== null;
      case 3:
        return this.estimate().lines.length > 0;
      default:
        return true;
    }
  });

  protected readonly whatsappUrl = computed(() => {
    const t = this.t();
    const house = this.house();
    const materials = this.materials() === 'client' ? t.messageClient : t.messageSidof;
    const detail = this.lines().map((line) => line.label).join(', ');
    const subject = `${t.subject}${house ? ` (${t.houseTypes[house]})` : ''} : ${detail} – ${materials} – ${this.totalLabel()}`;
    return this.whatsapp.link(this.lines().length ? subject : t.subject);
  });

  protected setHouse(id: HouseTypeId): void {
    this.house.set(id);
    const preset = HOUSE_TYPES.find((item) => item.id === id);
    this.rows.set((preset?.rooms ?? []).map((room) => ({ id: this.nextId++, room, area: 0, formula: null })));
  }

  protected updateRow(id: number, patch: Partial<EstimateRow>): void {
    this.rows.update((rows) => rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  }

  protected setArea(id: number, value: string): void {
    this.updateRow(id, { area: Math.max(0, Math.min(10_000, Number(value) || 0)) });
  }

  protected addRow(): void {
    if (this.rows().length >= 20) return;
    this.rows.update((rows) => [...rows, { id: this.nextId++, room: 'other', area: 0, formula: null }]);
  }

  protected removeRow(id: number): void {
    this.rows.update((rows) => rows.filter((row) => row.id !== id));
  }

  protected next(): void {
    if (this.canContinue()) this.step.update((step) => Math.min(TOTAL_STEPS, step + 1));
  }

  protected back(): void {
    this.step.update((step) => Math.max(1, step - 1));
  }

  protected restart(): void {
    this.step.set(1);
    this.house.set(null);
    this.rows.set([]);
  }
}