import type { Localized } from './common';

export type StaffPackageId = 'simple' | 'design' | 'turnkey';

/** Éléments qui composent une formule */
export type StaffElement =
  | 'installation'
  | 'ceilingBasics'
  | 'ceilingDesigns'
  | 'walls'
  | 'lighting'
  | 'painting';

/**
 * Formule de staff. Les formules sont cumulatives : « adds » est ce que la formule
 * ajoute à la précédente. Prix au m² de la pièce, en FCFA.
 */
export interface StaffPackage {
  id: StaffPackageId;
  adds: StaffElement[];
  /** Prix quand le client achète le matériel */
  clientMaterials: number;
  /** Prix quand Sidof achète le matériel */
  sidofMaterials: number;
  /** Photo d'un exemple, vide tant qu'il n'y en a pas */
  image: string;
  imageAlt: Localized;
    /** Autres photos de cette formule (vue de la pièce, détail du plafond, murs…), affichées au clic */
  gallery: string[];
  /** Lien YouTube (vidéo ou Short) lu dans la page ; vide = pas de vidéo */
  video: string;
}