import type { Lang } from '../i18n/lang';
import type { PageKey } from '../i18n/translations';

/** URL de chaque page, sans le préfixe de langue ni le « / » initial. */
export const ROUTE_PATHS: Record<PageKey, Partial<Record<Lang, string>>> = {
  home: { fr: '', en: '' },
  construction: { fr: 'construire-au-cameroun', en: 'build-a-house-in-cameroon' },
  land: { fr: 'terrains-a-vendre-yaounde', en: 'land-for-sale-yaounde' },
  landDetail: { fr: 'terrains-a-vendre-yaounde/:slug', en: 'land-for-sale-yaounde/:slug' },
  houses: { fr: 'maisons-a-vendre-yaounde', en: 'houses-for-sale-yaounde' },
  houseRentals: { fr: 'maisons-a-louer-yaounde', en: 'houses-for-rent-yaounde' },
  apartments: { fr: 'appartements-meubles-a-louer-yaounde', en: 'furnished-apartments-for-rent-yaounde' },
  apartmentDetail: {
    fr: 'appartements-meubles-a-louer-yaounde/:slug',
    en: 'furnished-apartments-for-rent-yaounde/:slug',
  },
  interior: {
    fr: 'design-interieur-decoration-staff-cameroun',
    en: 'interior-design-staff-decoration-cameroon',
  },
  materials: { fr: 'materiaux-de-construction-yaounde', en: 'building-materials-yaounde' },
  iranianTiles: { fr: 'carreaux-iraniens-yaounde', en: 'iranian-tiles-yaounde' },
  travel: { fr: 'assistance-voyage-cameroun', en: 'travel-assistance-cameroon' },
  software: { fr: 'creation-site-web-cameroun', en: 'website-development-cameroon' },
  portfolio: { en: 'portfolio' }, // pas de version française
  about: { fr: 'a-propos', en: 'about' },
  blog: { fr: 'blog', en: 'blog' },
  blogPost: { fr: 'blog/:slug', en: 'blog/:slug' },
  faq: { fr: 'faq', en: 'faq' },
  contact: { fr: 'contact', en: 'contact' },
  legal: { fr: 'mentions-legales', en: 'legal' },
  privacy: { fr: 'confidentialite', en: 'privacy' },
  cookies: { fr: 'cookies', en: 'cookies' },
  notFound: { fr: '**', en: '**' },
};

/**
 * URL complète d'une page : urlFor('landDetail', 'fr', 'nkoabang')
 * donne '/fr/terrains-a-vendre-yaounde/nkoabang'.
 * Si la page n'existe pas dans cette langue (portfolio en français),
 * renvoie l'accueil de la langue.
 */
export function urlFor(page: PageKey, lang: Lang, slug?: string): string {
  const path = ROUTE_PATHS[page][lang];
  if (path === undefined) return `/${lang}`;
  const resolved = slug ? path.replace(':slug', slug) : path;
  return resolved ? `/${lang}/${resolved}` : `/${lang}`;
}