import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DEFAULT_LANG, LANGS, isLang, type Lang } from '../i18n/lang';
import { TRANSLATIONS, type PageKey } from '../i18n/translations';
import { ROUTE_PATHS, urlFor } from '../routing/route-paths';

/** URL de la page courante dans chaque langue, ou null si elle n'existe pas dans cette langue. */
type Alternates = Record<Lang, string | null>;

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(DEFAULT_LANG);
  readonly page = signal<PageKey | undefined>(undefined);
  readonly alternates = signal<Alternates>({ fr: null, en: null });

  /** Textes de la langue courante : lang.t().nav.home */
  readonly t = computed(() => TRANSLATIONS[this.lang()]);
  readonly otherLang = computed<Lang>(() => (this.lang() === 'fr' ? 'en' : 'fr'));
  /** Cible du bouton FR/EN : la même page, ou l'accueil si elle n'existe pas (portfolio). */
  readonly switchUrl = computed(() => this.alternates()[this.otherLang()] ?? `/${this.otherLang()}`);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.update());
  }

  /** Lien interne dans la langue courante : lang.url('contact'), lang.url('landDetail', 'nkoabang') */
  url(page: PageKey, slug?: string): string {
    return urlFor(page, this.lang(), slug);
  }

  private update(): void {
    const first = this.router.parseUrl(this.router.url).root.children['primary']?.segments[0]?.path;
    const lang = isLang(first) ? first : DEFAULT_LANG;

    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) route = route.firstChild;
    const page = route.data['page'] as PageKey | undefined;
    const slug = route.paramMap.get('slug') ?? undefined;

    const alternates = {} as Alternates;
    for (const l of LANGS) {
      const exists = page && page !== 'notFound' && ROUTE_PATHS[page][l] !== undefined;
      alternates[l] = exists ? urlFor(page, l, slug) : null;
    }

    this.lang.set(lang);
    this.page.set(page);
    this.alternates.set(alternates);
    this.document.documentElement.lang = lang;
  }
}