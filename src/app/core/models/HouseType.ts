export type RoomKey =
  | 'living'
  | 'dining'
  | 'bedroom'
  | 'kitchen'
  | 'veranda'
  | 'shower'
  | 'office'
  | 'corridor'
  | 'lounge'
  | 'other';

export type HouseTypeId = 'apartment' | 'house' | 'villa' | 'duplex' | 'multiStorey' | 'business';

/** Pièces proposées par défaut pour un type de bien */
export interface HouseType {
  id: HouseTypeId;
  rooms: RoomKey[];
}