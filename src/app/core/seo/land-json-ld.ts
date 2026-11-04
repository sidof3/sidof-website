import { COMPANY } from '../config/company.config';
import type { Lang } from '../i18n/lang';
import { Land } from '../models/land';
import { ORG_ID, type JsonLdNode } from './json-ld';

export function landListingJsonLd(land: Land, lang: Lang, url: string): JsonLdNode {
  const price = land.pricePerM2;

  return {
    '@type': 'RealEstateListing',
    name: land.title[lang],
    description: land.description[lang],
    url,
    inLanguage: lang,
    ...(land.image ? { image: COMPANY.url + land.image } : {}),
    about: {
      '@type': 'Place',
      name: `${land.neighborhood}, ${land.city}`,
      description: land.location[lang],
      ...(land.mapUrl ? { hasMap: land.mapUrl } : {}),
      address: {
        '@type': 'PostalAddress',
        addressLocality: land.city,
        addressCountry: COMPANY.address.countryCode,
      },
    },
    offers: {
      '@type': 'Offer',
      availability: land.available ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
      seller: { '@id': ORG_ID },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'XAF',
        ...(price.max ? { minPrice: price.min, maxPrice: price.max } : { price: price.min }),
        referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MTK' },
      },
    },
  };
}