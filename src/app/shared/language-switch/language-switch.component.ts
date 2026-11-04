import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './language-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitchComponent {
  protected readonly lang = inject(LanguageService);
}