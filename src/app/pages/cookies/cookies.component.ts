import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../../core/services/consent.service';
import { LanguageService } from '../../core/services/language.service';
import { COOKIES_POLICY } from '../../core/data/cookies.policy.data';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cookies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookiesComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly consent = inject(ConsentService);

  protected readonly policy = COOKIES_POLICY;

  /** Date de mise à jour écrite dans la langue courante : « 30 octobre 2026 ». */
  protected readonly updated = computed(() =>
    new Intl.DateTimeFormat(this.lang.lang() === 'fr' ? 'fr-FR' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(this.policy.updated)),
  );
}