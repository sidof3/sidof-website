import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-band.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBandComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly whatsapp = inject(WhatsappService);
}