import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router,NavigationStart } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LanguageService } from './language.service';

/** Valeurs propres à une fiche (terrain, appartement, article), qui remplacent celles de la page. */
export interface SeoOverride {
  title?: string;
  description?: string;
  image?: string; // URL absolue
  name?: string; // nom de la fiche, ex. "Terrain à vendre à Douala"
  structuredData?: any; // JSON-LD, ex. landListingJsonLd(land)
}

const LOCALES = { fr: 'fr_FR', en: 'en_US' } as const;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  // Injecté avant l'abonnement ci-dessous : il met à jour la langue et la page en premier.
  private readonly language = inject(LanguageService);

  private override: SeoOverride = {};

  constructor() {
       // Les valeurs d'une fiche sont effacées au départ de la navigation,
    // avant que la nouvelle fiche ne renseigne les siennes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => (this.override = {}));
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.apply());
  }

  /** À appeler par une fiche une fois ses données chargées : seo.setOverride({ title, description, image }) */
  setOverride(values: SeoOverride): void {
    this.override = values;
    this.apply();
  }

  private apply(): void {
    const page = this.language.page();
    if (!page) return;

    const lang = this.language.lang();
    const text = this.language.t().pages[page];
    const alternates = this.language.alternates();
    const title = this.override.title ?? text.title;
    const description = this.override.description ?? text.description;
    const path = alternates[lang];
    const url = path ? environment.siteUrl + path : null;
    const indexable = environment.indexable && page !== 'notFound';

    this.title.setTitle(title);
    this.setName('description', description);
    this.setName('robots', indexable ? 'index, follow' : 'noindex, nofollow');

    this.setProperty('og:type', 'website');
    this.setProperty('og:site_name', this.language.t().site.name);
    this.setProperty('og:title', title);
    this.setProperty('og:description', description);
    this.setProperty('og:url', url);
    this.setProperty('og:locale', LOCALES[lang]);
    this.setProperty('og:locale:alternate', LOCALES[this.language.otherLang()]);
    this.setProperty('og:image', this.override.image ?? null);

    const links: { rel: string; href: string; hreflang?: string }[] = [];
    if (url) links.push({ rel: 'canonical', href: url });
    for (const l of ['fr', 'en'] as const) {
      const alt = alternates[l];
      if (alt) links.push({ rel: 'alternate', hreflang: l, href: environment.siteUrl + alt });
    }
    const fallback = alternates.fr ?? alternates.en;
    if (fallback) links.push({ rel: 'alternate', hreflang: 'x-default', href: environment.siteUrl + fallback });
    this.setLinks(links);
  }

  private setName(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setProperty(property: string, content: string | null): void {
    if (content) this.meta.updateTag({ property, content });
    else this.meta.removeTag(`property='${property}'`);
  }

  private setLinks(links: { rel: string; href: string; hreflang?: string }[]): void {
    const head = this.document.head;
    head.querySelectorAll('link[data-seo]').forEach((el) => el.remove());
    for (const l of links) {
      const el = this.document.createElement('link');
      el.setAttribute('rel', l.rel);
      el.setAttribute('href', l.href);
      if (l.hreflang) el.setAttribute('hreflang', l.hreflang);
      el.setAttribute('data-seo', '');
      head.appendChild(el);
    }
  }
}