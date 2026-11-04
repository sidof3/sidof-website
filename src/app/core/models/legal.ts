export type LegalLang = 'fr' | 'en';

/** Texte disponible dans les deux langues. */
export type LegalText<T = string> = Record<LegalLang, T>;

export interface LegalTable {
  /** Titre lu par les lecteurs d'écran. */
  caption: LegalText;
  head: LegalText<string[]>;
  rows: LegalText<string[]>[];
}

export interface LegalSection {
  /** Sert d'ancre dans l'URL (#id). */
  id: string;
  title: LegalText;
  paragraphs?: LegalText<string[]>;
  list?: LegalText<string[]>;
  table?: LegalTable;
  /** Paragraphes affichés après la liste ou le tableau. */
  after?: LegalText<string[]>;
}

export interface LegalDoc {
  title: LegalText;
  /** Date de dernière mise à jour, au format AAAA-MM-JJ. */
  updated: string;
  intro: LegalText<string[]>;
  sections: LegalSection[];
}