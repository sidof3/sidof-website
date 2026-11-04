import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { ImageSlotComponent } from '../image-slot/image-slot.component';
import { Property } from '../../../core/models/property';
import { formatPrice } from '../../../core/utils/fortmat';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [RouterLink, ImageSlotComponent],
  templateUrl: './property-card.component.html',
  host: { class: 'block h-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyCardComponent {
  protected readonly lang = inject(LanguageService);

  @Input({ required: true }) item!: Property;
  @Input({ required: true }) link!: string;
  /** « À vendre », « À louer » */
  @Input() badge = '';
  /** Ex. « 500 m² » */
  @Input() facts: string[] = [];
  @Input() accent: 'build' | 'design' | 'land' | '' = '';
    /** Texte de prix prêt à afficher (ex. prix au m²) ; remplace le prix total */
  @Input() priceText = '';

  protected get priceLabel(): string {
    const t = this.lang.t().common;
    if (this.item.price === null) return t.priceOnRequest;
    const price = formatPrice(this.item.price, this.lang.lang());
    if (this.item.pricePeriod === 'month') return `${price} ${t.perMonth}`;
    if (this.item.pricePeriod === 'night') return `${price} ${t.perNight}`;
    return price;
  }
}