/** Image de galerie, texte déjà dans la langue de la page */
export interface GalleryItem {
  id: string;
  /** Chemin sous public/images/, vide tant qu'il n'y a pas de photo */
  src: string;
  alt: string;
  /** Courte description affichée sous l'image */
  caption?: string;
  /** Clé de filtre : 'living', 'bedroom'... */
  category?: string;
}