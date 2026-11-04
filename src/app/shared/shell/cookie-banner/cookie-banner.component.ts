import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../../../core/services/consent.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cookie-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieBannerComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly consent = inject(ConsentService);

  protected readonly details = signal(false);
  protected readonly statistics = signal(false);
  protected readonly marketing = signal(false);

  constructor() {
    // À chaque ouverture, on repart des choix enregistrés.
    // Depuis « Gérer mes cookies », le détail est déjà ouvert.
    effect(
      () => {
        if (!this.consent.visible()) return;
        const saved = this.consent.choices();
        this.statistics.set(saved?.statistics ?? false);
        this.marketing.set(saved?.marketing ?? false);
        this.details.set(saved !== null);
      },
      { allowSignalWrites: true },
    );
  }

  protected accept(): void {
    this.consent.acceptAll();
  }

  protected refuse(): void {
    this.consent.refuseAll();
  }

  protected save(): void {
    this.consent.save({ statistics: this.statistics(), marketing: this.marketing() });
  }
}