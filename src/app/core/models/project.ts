import type { Localized, Media } from './common';

export interface Project extends Media {
  id: string;
  /** Pour un logiciel, c'est le nom du projet : FAST GAZ, GroupinG... */
  title: Localized;
  description: Localized;
  /** Chantier ou site de design (Odza, Bastos, Olembe, Simbock) */
  neighborhood?: string;
  city?: string;
  /** Logiciel : adresse du site ou de l'application en ligne */
  url?: string;
  technologies?: string[];
}

export type GalleryCategory = 'living' | 'bedroom' | 'kitchen' | 'veranda' | 'office' | 'business';

export interface InteriorGalleryEntry {
  id: string;
  /** Chemin sous public/images/design/, vide tant qu'il n'y a pas de photo */
  image: string;
  /** Texte alternatif : décrire le modèle, avec le lieu si possible */
  alt: Localized;
  caption?: Localized;
  category: GalleryCategory;
}