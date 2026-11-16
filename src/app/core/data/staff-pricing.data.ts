import type { StaffPackage } from '../models/StaffPackage';

/**
 * Formules de staff, prix au m² de la pièce en FCFA.
 * clientMaterials : le client achète le matériel. sidofMaterials : Sidof l'achète.
 * image : photo d'un exemple de la formule (/images/design/plafond-staff-simple.webp), vide pour l'instant.
 */
export const STAFF_PACKAGES: StaffPackage[] = [
  {
    id: 'simple',
    adds: ['installation', 'ceilingBasics'],
    clientMaterials: 8_000,
    sidofMaterials: 14_000,
    image: '',
    imageAlt: {
      fr: 'Plafond staff simple avec corniche et spots à Yaoundé',
      en: 'Simple staff ceiling with cornice and spotlights in Yaoundé',
    },
  },
  {
    id: 'design',
    adds: ['ceilingDesigns', 'walls', 'lighting'],
    clientMaterials: 17_000,
    sidofMaterials: 21_000,
    image: '',
    imageAlt: {
      fr: 'Plafond staff design et murs travaillés avec LED à Yaoundé',
      en: 'Staff design ceiling and worked walls with LED in Yaoundé',
    },
  },
  {
    id: 'turnkey',
    adds: ['painting'],
    clientMaterials: 17_000,
    sidofMaterials: 25_000,
    image: '',
    imageAlt: {
      fr: 'Plafond staff design clé en main avec peinture à Yaoundé',
      en: 'Turnkey staff design ceiling with painting in Yaoundé',
    },
  },
];