import { InteriorProject } from "../models/InteriorProject";
import { InteriorGalleryEntry } from "../models/project";




/** À remplacer par le lien d'une vidéo YouTube ou d'un Short (plusieurs liens possibles par projet) */
const VIDEO = 'LIEN_YOUTUBE_A_REMPLACER';

/**
 * Prix du staff au mètre carré, en FCFA.
 * from: true affiche « À partir de » devant le prix.
 */
export const STAFF_PRICING = [
  { id: 'labour', pricePerM2: 8_000, from: true },
  { id: 'allIncluded', pricePerM2: 25_000, from: false },
] as const;

export const INTERIOR_PROJECTS: InteriorProject[] = [
    {
        id: 'maison-r1-odza-nkolnda',
        category: 'home',
        status: 'ongoing',
        title: { fr: 'Maison R+1 à Odza Nkolnda', en: 'R+1 house in Odza Nkolnda' },
        description: {
            fr: 'Maison d’habitation R+1 : travaux de staff en cours, puis finition complète clé en main (sable, crépissage, plomberie, électricité, staff et décoration, peinture).',
            en: 'Residential R+1 house: staff works under way, then full turnkey finishing (sand, plastering, plumbing, electricity, staff and decoration, painting).',
        },
        place: 'Odza Nkolnda, Yaoundé',
        scope: ['plastering', 'plumbing', 'electricity', 'staff', 'decoration', 'painting'],
        image: '',
        imageAlt: {
            fr: 'Finition clé en main d’une maison R+1 à Odza Nkolnda, Yaoundé',
            en: 'Turnkey finishing of an R+1 house in Odza Nkolnda, Yaoundé',
        },
        gallery: [],
        videos: [VIDEO],
    },
    {
        id: 'duplex-olembe',
        category: 'home',
        status: 'done',
        title: { fr: 'Duplex à Olembe', en: 'Duplex in Olembe' },
        description: {
            fr: 'Staff et décoration d’intérieur d’un duplex, avec la peinture en clé en main.',
            en: 'Staff and interior decoration of a duplex, with turnkey painting.',
        },
        place: 'Olembe, Yaoundé',
        scope: ['staff', 'decoration', 'painting'],
        image: '',
        imageAlt: {
            fr: 'Staff et décoration d’intérieur d’un duplex à Olembe, Yaoundé',
            en: 'Staff and interior decoration of a duplex in Olembe, Yaoundé',
        },
        gallery: [],
        videos: [VIDEO],
    },
    {
        id: 'duplex-odza-borne-12',
        category: 'home',
        status: 'done',
        title: { fr: 'Duplex à Odza, borne 12', en: 'Duplex in Odza, borne 12' },
        description: {
            fr: 'Travaux de staff et de décoration d’intérieur dans un duplex d’habitation à Odza, borne 12.',
            en: 'Staff and interior decoration works in a residential duplex in Odza, borne 12.',
        },
        place: 'Odza (borne 12), Yaoundé',
        scope: ['staff', 'decoration'],
        image: '',
        imageAlt: {
            fr: 'Staff et décoration d’intérieur d’un duplex à Odza, Yaoundé',
            en: 'Staff and interior decoration of a duplex in Odza, Yaoundé',
        },
        gallery: [],
        videos: [VIDEO],
    },
    {
        id: 'duplex-simbock',
        category: 'home',
        status: 'done',
        title: { fr: 'Duplex à Simbock', en: 'Duplex in Simbock' },
        description: {
            fr: 'Travaux de staff et de décoration d’intérieur dans un duplex à Simbock.',
            en: 'Staff and interior decoration works in a duplex in Simbock.',
        },
        place: 'Simbock, Yaoundé',
        scope: ['staff', 'decoration'],
        image: '',
        imageAlt: {
            fr: 'Staff et décoration d’intérieur d’un duplex à Simbock, Yaoundé',
            en: 'Staff and interior decoration of a duplex in Simbock, Yaoundé',
        },
        gallery: [],
        videos: [VIDEO],
    },
    {
        id: 'salon-bangangte',
        category: 'home',
        status: 'ongoing',
        title: { fr: 'Salon à Bangangté', en: 'Living room in Bangangté' },
        description: {
            fr: 'Staff et décoration d’un salon à Bangangté.',
            en: 'Staff and decoration of a living room in Bangangté.',
        },
        place: 'Bangangté', // quartier ou village à préciser
        scope: ['staff', 'decoration'],
        image: '',
        imageAlt: {
            fr: 'Staff et décoration d’un salon à Bangangté',
            en: 'Staff and decoration of a living room in Bangangté',
        },
        gallery: [],
        videos: [VIDEO],
    },
    {
        id: 'hotel-aurelia-palace-bastos',
        category: 'business',
        status: 'ongoing',
        title: {
            fr: 'Hôtel Aurélia Palace : lounge et restaurant',
            en: 'Aurélia Palace Hotel: lounge and restaurant',
        },
        description: {
            fr: 'Staff et décoration de l’espace lounge et du restaurant de l’hôtel, du travail à la finition.',
            en: 'Staff and decoration of the hotel lounge area and restaurant, from the works to the finishing.',
        },
        place: 'Bastos, Yaoundé',
        scope: ['staff', 'decoration'],
        image: '',
        imageAlt: {
            fr: 'Staff et décoration du lounge et du restaurant de l’hôtel Aurélia Palace, Bastos, Yaoundé',
            en: 'Staff and decoration of the lounge and restaurant at Aurélia Palace Hotel, Bastos, Yaoundé',
        },
        gallery: [],
        videos: [VIDEO],
    },
];
/**
 * Galerie des modèles. Une entrée = une image.
 * Pour ajouter une image : copier un bloc, mettre le chemin dans « image »
 * (/images/design/salon-staff-yaounde-1.webp) et décrire le modèle dans « alt ».
 * Les entrées ci-dessous sont des emplacements d'exemple à remplacer.
 */
export const INTERIOR_GALLERY: InteriorGalleryEntry[] = [
    {
        id: 'salon-1',
        category: 'living',
        image: '',
        alt: { fr: 'Salon moderne avec staff et éclairage à Yaoundé', en: 'Modern living room with staff and lighting in Yaoundé' },
    },
    {
        id: 'salon-2',
        category: 'living',
        image: '',
        alt: { fr: 'Meuble TV suspendu en staff dans un salon à Yaoundé', en: 'Floating staff TV unit in a living room in Yaoundé' },
    },
    {
        id: 'chambre-1',
        category: 'bedroom',
        image: '',
        alt: { fr: 'Chambre avec corniches en staff à Yaoundé', en: 'Bedroom with staff cornices in Yaoundé' },
    },
    {
        id: 'cuisine-1',
        category: 'kitchen',
        image: '',
        alt: { fr: 'Cuisine décorée en staff à Yaoundé', en: 'Kitchen decorated in staff in Yaoundé' },
    },
    {
        id: 'veranda-1',
        category: 'veranda',
        image: '',
        alt: { fr: 'Véranda avec décor en staff à Yaoundé', en: 'Veranda with staff decor in Yaoundé' },
    },
    {
        id: 'hotel-1',
        category: 'business',
        image: '',
        alt: { fr: 'Lounge d’hôtel décoré en staff à Yaoundé', en: 'Hotel lounge decorated in staff in Yaoundé' },
    },
];

/** Vidéos YouTube de vos réalisations (vidéo ou Short). Remplacez le lien et le titre. */
export const INTERIOR_VIDEOS = [
    {
        id: 'video-1',
        url: 'LIEN_YOUTUBE_A_REMPLACER',
        title: { fr: 'Réalisation de staff et décoration d’intérieur', en: 'Staff and interior decoration project' },
    },
    {
        id: 'video-2',
        url: 'LIEN_YOUTUBE_A_REMPLACER',
        title: { fr: 'Finition d’une maison à Yaoundé', en: 'House finishing in Yaoundé' },
    },
];