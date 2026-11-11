import { Localized } from "./common";

export type ConstructionGalleryCategory = 'house' | 'plan' | 'site';

export interface ConstructionGalleryEntry {
  id: string;
  /** Chemin sous public/images/construction/, vide tant qu'il n'y a pas de photo */
  image: string;
  alt: Localized;
  caption?: Localized;
  category: ConstructionGalleryCategory;
}