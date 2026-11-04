import type { Localized, Media } from './common';

/** Base commune des biens affichés en carte et en fiche. */
export interface Property extends Media {
  /** Identique en français et en anglais : le quartier, plus la surface en cas de doublon (nkoabang-500m2) */
  slug: string;
  /** Nom propre, non traduit : « Nkoabang » */
  neighborhood: string;
  city: string;
  /** Ex. « Terrain à vendre à Nkoabang » */
  title: Localized;
  description: Localized;
  /** En FCFA. null = prix sur demande */
  price: number | null;
  /** Absent = prix de vente ; 'month' ou 'night' pour une location */
  pricePeriod?: 'month' | 'night';
  available: boolean;
  /** Lien Google Maps (application Maps > Partager > Copier le lien). Absent = pas de bouton carte. */
  mapUrl?: string;
}

export interface Land extends Property {
  surfaceM2: number;
}

export interface House extends Property {
  /** La page « à vendre » et la page « à louer » filtrent sur ce champ */
  offer: 'sale' | 'rent';
  type: 'house' | 'duplex';
  /** Nombre de logements, par exemple 2 pour le duplex d'Odza */
  units?: number;
  bedrooms?: number;
  surfaceM2?: number;
}

export interface Apartment extends Property {
  type: 'apartment' | 'villa';
  bedrooms?: number;
  /** Équipements : « Wi-Fi », « Climatisation »... */
  features: Localized<string[]>;
}