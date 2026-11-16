/** Contenu affiché dans la fenêtre de photos ou de vidéo */
export interface MediaContent {
  title: string;
  mode: 'photos' | 'video';
  photos: string[];
  photoAlt: string;
  /** Lien YouTube */
  video: string;
}