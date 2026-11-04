import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { SeoService } from '../../../core/services/seo.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { WhatsappButtonComponent } from '../whatsapp-button/whatsapp-button.component';
import { CookieBannerComponent } from '../cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,WhatsappButtonComponent,CookieBannerComponent],
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  protected readonly lang = inject(LanguageService);
  // Injecté pour que SeoService soit actif sur toutes les pages
  private readonly seo = inject(SeoService);
  
}