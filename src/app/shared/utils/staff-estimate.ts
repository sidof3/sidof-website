import { EstimateRow } from "../../core/models/EstimateRow";
import { RoomKey } from "../../core/models/HouseType";
import { StaffPackageId, StaffPackage } from "../../core/models/StaffPackage";


/** Qui achète le matériel */
export type Materials = 'client' | 'sidof';

export interface EstimateLine {
  rowId: number;
  room: RoomKey;
  area: number;
  formula: StaffPackageId;
  /** En FCFA */
  amount: number;
}

export interface Estimate {
  lines: EstimateLine[];
  total: number;
}

/** Prix au m² d'une formule, selon qui achète le matériel */
export function ratePerM2(pack: StaffPackage, materials: Materials): number {
  return materials === 'client' ? pack.clientMaterials : pack.sidofMaterials;
}

/** Une ligne par pièce dont la surface est renseignée ; la formule d'une pièce est celle du projet par défaut */
export function computeEstimate(
  rows: EstimateRow[],
  defaultFormula: StaffPackageId,
  materials: Materials,
  packages: StaffPackage[],
): Estimate {
  const lines: EstimateLine[] = [];
  for (const row of rows) {
    if (row.area <= 0) continue;
    const formula = row.formula ?? defaultFormula;
    const pack = packages.find((item) => item.id === formula);
    if (!pack) continue;
    lines.push({
      rowId: row.id,
      room: row.room,
      area: row.area,
      formula,
      amount: Math.round(row.area * ratePerM2(pack, materials)),
    });
  }
  return { lines, total: lines.reduce((sum, line) => sum + line.amount, 0) };
}