import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-web-and-apps',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, SectionHeadingComponent, CtaBandComponent],
  templateUrl: './web-and-apps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebAndAppsComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly whatsapp = inject(WhatsappService);

  protected readonly offers: { key: 'web' | 'apps' | 'server'; icon: string }[] = [
    { key: 'web', icon: 'fa-globe' },
    { key: 'apps', icon: 'fa-laptop-code' },
    { key: 'server', icon: 'fa-server' },
  ];

  /** À compléter avec vos autres technologies */
  protected readonly technologies = ['Java', 'Spring Boot'];
}