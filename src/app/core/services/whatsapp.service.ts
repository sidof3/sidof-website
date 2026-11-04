import { Injectable, inject } from '@angular/core';
import { COMPANY } from '../config/company.config';
import { format } from '../i18n/translations';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly language = inject(LanguageService);

  /** Lien WhatsApp avec message prérempli : link() ou link('Terrain à Nkoabang') */
  link(subject?: string): string {
    const t = this.language.t().whatsapp;
    const message = subject ? format(t.aboutMessage, { subject }) : t.defaultMessage;
    return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
  }
}