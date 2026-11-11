import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
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

@Component({
  selector: 'app-interior-staff',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, SectionHeadingComponent, ProjectCardComponent, CtaBandComponent],
  templateUrl: './interior-staff.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteriorStaffComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly whatsapp = inject(WhatsappService);
  protected readonly t = computed(() => this.lang.t().interiorPage);

    protected readonly staffItems = [
    { key: 'livingRoom', icon: 'fa-couch' },
    { key: 'tvUnit', icon: 'fa-tv' },
    { key: 'cornices', icon: 'fa-layer-group' },
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

  
}