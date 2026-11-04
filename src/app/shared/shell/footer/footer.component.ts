import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, SOCIALS } from '../../../core/config/company.config';
import type { Translations } from '../../../core/i18n/fr';
import { format } from '../../../core/i18n/translations';
import { LanguageService } from '../../../core/services/language.service';
import { WhatsappService } from '../../../core/services/whatsapp.service';
import { ConsentService } from '../../../core/services/consent.service';

type NavKey = Exclude<keyof Translations['nav'], 'services'>;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly company = COMPANY;
  protected readonly socials = SOCIALS;
protected readonly whatsapp = inject(WhatsappService);
  protected readonly services: NavKey[] = [
    'construction',
    'land',
    'houses',
    'houseRentals',
    'apartments',
    'interior',
    'materials',
    'iranianTiles',
    'travel',
    'software',
  ];

  /** Ce sont aussi les clés de footer.* dans fr.ts et en.ts */
  protected readonly legalPages = ['legal', 'privacy', 'cookies'] as const;
  protected readonly consent = inject(ConsentService);

  protected readonly rights = computed(() =>
    format(this.lang.t().footer.rights, { year: new Date().getFullYear() }),
  );
}