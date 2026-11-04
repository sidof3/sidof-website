import type { Lang } from '../i18n/lang';

/** Un texte écrit dans les deux langues. */
export type Localized<T = string> = Record<Lang, T>;

/** Catégories du bandeau : ce sont aussi les clés de cookieBanner.* dans fr.ts et en.ts. */
export type CookieCategory = 'necessary' | 'statistics' | 'marketing';

/** Une ligne du tableau « Ce que nous utilisons ». */
export interface CookieRow {
  /** Nom technique, identique dans les deux langues (ex. sidof-consent). */
  name: string;
  provider: Localized;
  purpose: Localized;
  duration: Localized;
  category: CookieCategory;
}

/** Le tableau des cookies, avec le texte qui l'entoure. */
export interface CookiesTable {
  title: Localized;
  /** Paragraphes affichés avant le tableau. */
  intro: Localized<string[]>;
  /** En-têtes de colonnes, dans l'ordre : nom, fournisseur, finalité, durée, catégorie. */
  head: Localized<string[]>;
  rows: CookieRow[];
  /** Paragraphes affichés après le tableau. */
  note: Localized<string[]>;
}

/** Une section de texte de la page (titre, paragraphes, liste facultative). */
export interface CookiesSection {
  /** Sert d'ancre dans l'URL (#id). */
  id: string;
  title: Localized;
  paragraphs: Localized<string[]>;
  list?: Localized<string[]>;
}

/** Tout le contenu de la page Politique de cookies. */
export interface CookiesPolicy {
  /** Date de dernière mise à jour, au format AAAA-MM-JJ. */
  updated: string;
  intro: Localized<string[]>;
  table: CookiesTable;
  sections: CookiesSection[];
}