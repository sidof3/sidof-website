import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class WhatsappButtonComponent {
   protected readonly lang = inject(LanguageService);
  protected readonly whatsapp = inject(WhatsappService);
}
