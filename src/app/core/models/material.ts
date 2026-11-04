import type { Localized, Media } from './common';

export interface Material extends Media {
  id: string;
  category: 'sand' | 'tiles' | 'other';
  name: Localized;
  description: Localized;
  /** En FCFA. null = « Demander un prix » (décision encore à prendre) */
  price: number | null;
  /** Ex. « par camion » : à renseigner quand les unités de vente seront connues */
  unit?: Localized;
  /** Référence du carreau, le cas échéant */
  reference?: string;
}