import type { RoomKey } from './HouseType';
import type { StaffPackageId } from './StaffPackage';

/** Une pièce de l'estimation */
export interface EstimateRow {
  id: number;
  room: RoomKey;
  /** Surface de la pièce en m² */
  area: number;
  /** null : la formule choisie pour l'ensemble du projet */
  formula: StaffPackageId | null;
}