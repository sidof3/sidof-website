import { Localized } from "./common";
import { Property } from "./property";

export interface PricePerM2 {
  min: number;
  /** Fourchette de prix : max absent = prix unique */
  max?: number;
}

/** Un ou plusieurs titres de la même surface : { count: 2, surfaceM2: 35000 } */
export interface LandLot {
  count: number;
  surfaceM2: number;
}

export interface Land extends Property {
  /** Surface totale en m² */
  surfaceM2: number;
  lots: LandLot[];
  /** Prix au mètre carré en FCFA. Le champ price (total) reste à null. */
  pricePerM2: PricePerM2;
  /** Comment s'y rendre */
  location: Localized;
  features: Localized<string[]>;
}