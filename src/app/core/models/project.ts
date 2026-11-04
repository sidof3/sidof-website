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