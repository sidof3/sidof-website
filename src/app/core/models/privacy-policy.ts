import type { Localized } from './cookies-policy.model';

/** Une section de la politique de confidentialité. */
export interface PrivacySection {
  /** Sert d'ancre dans l'URL (#id). */
  id: string;
  title: Localized;
  /** Paragraphes affichés avant la liste. */
  paragraphs?: Localized<string[]>;
  list?: Localized<string[]>;
  /** Paragraphes affichés après la liste. */
  after?: Localized<string[]>;
}

/** Tout le contenu de la page Politique de confidentialité. */
export interface PrivacyPolicy {
  /** Date de dernière mise à jour, au format AAAA-MM-JJ. */
  updated: string;
  intro: Localized<string[]>;
  sections: PrivacySection[];
}