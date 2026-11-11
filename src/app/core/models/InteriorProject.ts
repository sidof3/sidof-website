import { Media, Localized } from "./common";

export type InteriorScope =
  | 'staff'
  | 'decoration'
  | 'painting'
  | 'lighting'
  | 'plastering'
  | 'plumbing'
  | 'electricity';

export interface InteriorProject extends Media {
  id: string;
  /** home : maison, duplex, appartement. business : hôtel, restaurant, bureau */
  category: 'home' | 'business';
  status: 'done' | 'ongoing';
  title: Localized;
  description: Localized;
  /** Lieu affiché, ex. « Odza (borne 12), Yaoundé » */
  place?: string;
  /** Ce qui a été réalisé : les deux formules contiennent staff, décoration et éclairage */
  scope: InteriorScope[];
}