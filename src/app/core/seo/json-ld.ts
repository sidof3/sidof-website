import { COMPANY, SOCIALS } from '../config/company.config';
import { Translations } from '../i18n/fr';
import type { Lang } from '../i18n/lang';
import { PageKey } from '../i18n/translations';
import { urlFor } from '../routing/route-paths';

export type JsonLdNode = Record<string, unknown>;

export const ORG_ID = `${COMPANY.url}/#organization`;

/** Pages de service et leur zone desservie : tout le pays, ou Yaoundé. */
const SERVICE_AREA: Partial<Record<PageKey, 'country' | 'city'>> = {
  construction: 'country',
  interior: 'country',
  travel: 'country',
  software: 'country',
  land: 'city',
  houses: 'city',
  houseRentals: 'city',
  apartments: 'city',
  materials: 'city',
  iranianTiles: 'city',
};

/** Liste parente d'une fiche, pour le fil d'Ariane. */
const PARENT: Partial<Record<PageKey, PageKey>> = {
  landDetail: 'land',
  apartmentDetail: 'apartments',
  blogPost: 'blog',
};

export interface JsonLdInput {
  page: PageKey;
  lang: Lang;
  t: Translations;
  /** URL absolue de la page, null si elle n'existe pas dans cette langue */
  url: string | null;
  /** Nom de la page dans le fil d'Ariane */
  name: string;
  description: string;
  /** Blocs ajoutés par une fiche : RealEstateListing, FAQPage, BlogPosting... */
  extra: JsonLdNode[];
}

export function buildJsonLd({ page, lang, t, url, name, description, extra }: JsonLdInput): JsonLdNode {
  const country = { '@type': 'Country', name: lang === 'fr' ? 'Cameroun' : 'Cameroon' };
  const graph: JsonLdNode[] = [organization(t, country)];

  const area = SERVICE_AREA[page];
  if (area) {
    graph.push({
      '@type': 'Service',
      name: t.pages[page].h1,
      description,
      url,
      inLanguage: lang,
      areaServed: area === 'country' ? country : { '@type': 'City', name: COMPANY.address.city },
      provider: { '@id': ORG_ID }, // Sidof seul : les exécutants ne figurent pas dans les données
    });
  }

  const crumbs = breadcrumb(page, lang, t, name, url);
  if (crumbs) graph.push(crumbs);

  graph.push(...extra);
  return { '@context': 'https://schema.org', '@graph': graph };
}

function organization(t: Translations, country: JsonLdNode): JsonLdNode {
  return {
    '@type': 'LocalBusiness',
    '@id': ORG_ID,
    name: COMPANY.name,
    url: COMPANY.url,
    description: t.site.tagline,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressCountry: COMPANY.address.countryCode,
    },
    areaServed: country,
    knowsLanguage: ['fr', 'en'],
    hasOfferCatalog: offerCatalog(t),
    sameAs: SOCIALS.filter((s) => s.organization).map((s) => s.url),
  };
}

/** Tout ce que Sidof propose, annoncé sur chaque page. */
function offerCatalog(t: Translations): JsonLdNode {
  const offers: [string, 'Service' | 'Product'][] = [
    [t.services.construction.title, 'Service'],
    [t.services.land.title, 'Service'],
    [t.services.houses.title, 'Service'],
    [t.services.apartments.title, 'Service'],
    [t.services.interior.title, 'Service'],
    [t.services.materials.title, 'Product'],
    [t.services.travel.title, 'Service'],
    [t.pages.software.h1, 'Service'],
  ];
  return {
    '@type': 'OfferCatalog',
    name: t.nav.services,
    itemListElement: offers.map(([name, type]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': type, name },
    })),
  };
}

function breadcrumb(page: PageKey, lang: Lang, t: Translations, name: string, url: string | null): JsonLdNode | null {
  if (page === 'home' || page === 'notFound' || !url) return null;

  const items = [{ name: t.nav.home, url: COMPANY.url + urlFor('home', lang) }];
  const parent = PARENT[page];
  if (parent) items.push({ name: t.pages[parent].h1, url: COMPANY.url + urlFor(parent, lang) });
  items.push({ name, url });

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}