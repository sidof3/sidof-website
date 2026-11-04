import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { PRIVACY_POLICY } from '../../core/data/privacy.policy.data';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent {
  protected readonly lang = inject(LanguageService);

  protected readonly policy = PRIVACY_POLICY;

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