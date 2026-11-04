import { House } from "../models/property";

export const HOUSES: House[] = [
  {
    slug: 'odza',
    neighborhood: 'Odza',
    city: 'Yaoundé',
    title: { fr: 'Duplex à vendre à Odza', en: 'Duplex for sale in Odza' },
    description: {
      fr: 'Duplex à vendre à Odza, Yaoundé, composé de 2 unités.',
      en: 'Duplex for sale in Odza, Yaoundé, made up of 2 units.',
    },
    price: 290_000_000,
    available: true,
    offer: 'sale',
    type: 'duplex',
    units: 2,
    // Photos et vidéo : champs prévus, à renseigner plus tard
    image: '',
    imageAlt: { fr: 'Duplex à vendre à Odza, Yaoundé', en: 'Duplex for sale in Odza, Yaoundé' },
    gallery: [],
    video: '',
  },
];