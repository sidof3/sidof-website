import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Translations } from '../../core/i18n/fr';
import type { PageKey } from '../../core/i18n/translations';
import { LanguageService } from '../../core/services/language.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';

interface ServiceItem {
  key: keyof Translations['services'];
  page: PageKey;
  icon: string;
  accent?: 'build' | 'design' | 'land';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, SectionHeadingComponent, ServiceCardComponent, CtaBandComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly whatsapp = inject(WhatsappService);

  /** Les 7 cartes de service de l'accueil */
  protected readonly services: ServiceItem[] = [
    { key: 'software', page: 'software', icon: 'fa-code' },
    { key: 'interior', page: 'interior', icon: 'fa-couch', accent: 'design' },
    { key: 'land', page: 'land', icon: 'fa-map-location-dot', accent: 'land' },
    { key: 'construction', page: 'construction', icon: 'fa-helmet-safety', accent: 'build' },
    { key: 'houses', page: 'houses', icon: 'fa-house' },
    { key: 'apartments', page: 'apartments', icon: 'fa-building' },
    { key: 'materials', page: 'materials', icon: 'fa-cubes' },
    { key: 'travel', page: 'travel', icon: 'fa-plane' },
  ];
}