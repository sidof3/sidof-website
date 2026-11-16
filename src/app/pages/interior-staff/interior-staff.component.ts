import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { INTERIOR_PROJECTS, STAFF_PRICING } from '../../core/data/interior.data';
import { InteriorProject } from '../../core/models/InteriorProject';
import { formatPricePerM2 } from '../../core/utils/fortmat';
import { STAFF_PACKAGES } from '../../core/data/staff-pricing.data';
import { format } from '../../core/i18n/translations';
import { StaffPackageCardComponent } from '../../shared/components/staff-package-card/staff-package-card.component';
import type { StaffPackageId } from '../../core/models/StaffPackage';
import { StaffEstimatorComponent } from '../../shared/components/staff-estimator/staff-estimator.component';

@Component({
  selector: 'app-interior-staff',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, SectionHeadingComponent, ProjectCardComponent, CtaBandComponent, StaffPackageCardComponent, StaffEstimatorComponent],
  templateUrl: './interior-staff.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteriorStaffComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly whatsapp = inject(WhatsappService);
  protected readonly t = computed(() => this.lang.t().interiorPage);

      protected readonly staffItems = [
    { key: 'ceiling', icon: 'fa-layer-group' },
    { key: 'coveLighting', icon: 'fa-lightbulb' },
    { key: 'falseCeiling', icon: 'fa-border-all' },
    { key: 'wallDecoration', icon: 'fa-paintbrush' },
    { key: 'wallSmoothing', icon: 'fa-ruler-combined' },
    { key: 'tvUnit', icon: 'fa-tv' },
    { key: 'cornices', icon: 'fa-gem' },
    { key: 'fullFitOut', icon: 'fa-house' },
  ] as const;

  protected readonly finishItems = [
    { key: 'plastering', icon: 'fa-hammer' },
    { key: 'plumbing', icon: 'fa-faucet' },
    { key: 'electricity', icon: 'fa-bolt' },
    { key: 'staff', icon: 'fa-couch' },
    { key: 'painting', icon: 'fa-paint-roller' },
    { key: 'lighting', icon: 'fa-lightbulb' },
  ] as const;

  protected readonly formulas = ['turnkey', 'withPainting', 'staffOnly'] as const;

  protected readonly projects = computed(() => {
    const lang = this.lang.lang();
    const t = this.t();
    const toCard = (project: InteriorProject) => ({
      id: project.id,
      category: project.category,
      title: project.title[lang],
      description: project.description[lang],
      place: project.place ?? '',
      status: project.status === 'done' ? t.statusDone : t.statusOngoing,
      tags: project.scope.map((scope) => t.scope[scope]),
      videos: project.videos,
      photos: [project.image, ...project.gallery].filter(Boolean),
      photoAlt: project.imageAlt[lang],
    });
    const cards = INTERIOR_PROJECTS.map(toCard);
    return {
      homes: cards.filter((card) => card.category === 'home'),
      business: cards.filter((card) => card.category === 'business'),
    };
  });

    protected readonly pricing = computed(() => {
    const lang = this.lang.lang();
    return STAFF_PRICING.map((offer) => ({
      id: offer.id,
      from: offer.from,
      price: formatPricePerM2({ min: offer.pricePerM2 }, lang),
    }));
  });


     protected readonly sp = computed(() => this.lang.t().interiorPage.staffPricing);

  protected readonly packages = computed(() => {
    const lang = this.lang.lang();
    const t = this.sp();
    return STAFF_PACKAGES.map((pack, index) => ({
      id: pack.id,
      title: t.packages[pack.id].title,
      text: t.packages[pack.id].text,
      intro:
        index === 0
          ? t.includesFirst
          : format(t.includesPrevious, { name: t.packages[STAFF_PACKAGES[index - 1].id].title }),
      adds: pack.adds.map((element) => t.elements[element]),
      image: pack.image,
      imageAlt: pack.imageAlt[lang],
      client: formatPricePerM2({ min: pack.clientMaterials }, lang),
      sidof: formatPricePerM2({ min: pack.sidofMaterials }, lang),
    }));
  });

    @ViewChild('estimator') private estimatorSection?: ElementRef<HTMLElement>;

  /** Formule transmise à l'estimateur quand on clique sur « Estimer mon projet » */
  protected readonly selectedFormula = signal<StaffPackageId>('design');

  protected estimate(id: StaffPackageId): void {
    this.selectedFormula.set(id);
    this.estimatorSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  
}