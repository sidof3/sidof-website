import { ConstructionGalleryEntry } from "../models/ConstructionGalleryCategory";

/**
 * Galerie : maisons construites, plans 3D, chantiers. Une entrée = une image.
 * Pour ajouter une image : copier un bloc, mettre le chemin dans « image »
 * (/images/construction/maison-r2-yaounde-1.webp) et décrire l'image dans « alt ».
 * Les entrées ci-dessous sont des exemples d'emplacements à remplacer.
 */
export const CONSTRUCTION_GALLERY: ConstructionGalleryEntry[] = [
  {
    id: 'maison-1',
    category: 'house',
    image: '',
    alt: { fr: 'Maison R+2 construite à Yaoundé', en: 'R+2 house built in Yaoundé' },
  },
  {
    id: 'maison-2',
    category: 'house',
    image: '',
    alt: { fr: 'Guest house construite à Yaoundé', en: 'Guest house built in Yaoundé' },
  },
  {
    id: 'plan-1',
    category: 'plan',
    image: '',
    alt: { fr: 'Plan 3D d’une maison pour un client de la diaspora', en: '3D plan of a house for a diaspora client' },
  },
  {
    id: 'plan-2',
    category: 'plan',
    image: '',
    alt: { fr: 'Plan 3D d’une maison R+2 au Cameroun', en: '3D plan of an R+2 house in Cameroon' },
  },
  {
    id: 'chantier-1',
    category: 'site',
    image: '',
    alt: { fr: 'Chantier de construction d’une maison à Yaoundé', en: 'House construction site in Yaoundé' },
  },
  {
    id: 'chantier-2',
    category: 'site',
    image: '',
    alt: { fr: 'Avancée d’un chantier de construction au Cameroun', en: 'Construction site progress in Cameroon' },
  },
];

/** Vidéos YouTube de vos chantiers et maisons terminées (vidéo ou Short). Remplacez le lien et le titre. */
export const CONSTRUCTION_VIDEOS = [
  {
    id: 'video-1',
    url: 'LIEN_YOUTUBE_A_REMPLACER',
    title: { fr: 'Chantier de construction au Cameroun', en: 'Construction site in Cameroon' },
  },
  {
    id: 'video-2',
    url: 'LIEN_YOUTUBE_A_REMPLACER',
    title: { fr: 'Maison terminée à Yaoundé', en: 'Finished house in Yaoundé' },
  },
];