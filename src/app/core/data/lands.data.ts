import { Land } from "../models/land";


/** À remplacer par le lien d'une vidéo YouTube ou d'un Short (plusieurs liens possibles par terrain) */
const VIDEO = 'LIEN_YOUTUBE_A_REMPLACER';
const VIDEO_NKOABANG = 'https://youtu.be/KX5lw16oiG4';
const VIDEO_SOA_SOUS_PREFECTURE = 'https://youtube.com/shorts/YBJo5cXD8yc';
const VIDEO_SOA_EBANG = 'https://youtu.be/CHfHbdqX5lE';
const VIDEO_SOA_FORMAKAP = 'https://youtu.be/1f0exaquIYE';
const VIDEO_LOBE = 'https://youtube.com/shorts/YBJo5cXD8yc';




export const LANDS: Land[] = [
    {
        slug: 'nkoabang',
        neighborhood: 'Nkoabang',
        city: 'Yaoundé',
        title: { fr: 'Terrain titré à vendre à Nkoabang', en: 'Titled land for sale in Nkoabang' },
        description: {
            fr: 'Terrain titré à vendre à Nkoabang, Yaoundé : un lot de 7 000 m² en bordure d’un axe secondaire, dans une zone habitée et électrifiée. Un seul signataire.',
            en: 'Titled land for sale in Nkoabang, Yaoundé: a 7,000 m² plot along a secondary road, in an inhabited, electrified area. Single signatory.',
        },
        location: {
            fr: 'Après l’ancienne barrière du GMI, entrée Fokou, à 500 m de l’axe principal.',
            en: 'Past the former GMI barrier, Fokou entrance, 500 m from the main road.',
        },
        features: {
            fr: ['Terrain titré', 'Un seul signataire', 'En bordure d’un axe secondaire', 'Zone habitée et électrifiée'],
            en: ['Titled land', 'Single signatory', 'Along a secondary road', 'Inhabited, electrified area'],
        },
        surfaceM2: 7_000,
        lots: [{ count: 1, surfaceM2: 7_000 }],
        pricePerM2: { min: 14_000, max: 16_000 },
        price: 15_000,
        available: true,
        image: 'images/terrains/nkoabang-terrain-yaounde-1.webp',
        imageAlt: { fr: 'Terrain titré à vendre à Nkoabang, Yaoundé', en: 'Titled land for sale in Nkoabang, Yaoundé' },
        gallery: [],
        videos: [VIDEO_NKOABANG],
         mapUrl: 'https://maps.apple/p/87ajrnb6uAk4-D',
    },
    {
        slug: 'soa',
        neighborhood: 'Soa',
        city: 'Yaoundé',
        title: { fr: 'Terrain titré à vendre à Soa', en: 'Titled land for sale in Soa' },
        description: {
            fr: 'Terrain titré à vendre à Soa, Yaoundé, derrière la nouvelle sous-préfecture : en bordure d’un axe secondaire, dans une zone habitée et électrifiée. Un seul signataire.',
            en: 'Titled land for sale in Soa, Yaoundé, behind the new sub-prefecture: along a secondary road, in an inhabited, electrified area. Single signatory.',
        },
        location: {
            fr: 'Derrière la nouvelle sous-préfecture, quartier administratif, à 300 m de l’axe principal.',
            en: 'Behind the new sub-prefecture, administrative district, 300 m from the main road.',
        },
        features: {
            fr: ['Terrain titré', 'Un seul signataire', 'En bordure d’un axe secondaire', 'Zone habitée et électrifiée'],
            en: ['Titled land', 'Single signatory', 'Along a secondary road', 'Inhabited, electrified area'],
        },
        // À CONFIRMER : la fiche d'origine indique 2 600 m², mais les lots font 6 000 + 2 × 1 000 = 8 000 m²
        surfaceM2: 8_000,
        lots: [
            { count: 1, surfaceM2: 6_000 },
            { count: 2, surfaceM2: 1_000 },
        ],
        pricePerM2: { min: 17_000 },
        price: null,
        available: true,
        image: 'images/terrains/soa-terrain-yaounde-1.webp',
        imageAlt: { fr: 'Terrain titré à vendre à Soa, Yaoundé', en: 'Titled land for sale in Soa, Yaoundé' },
        gallery: ['images/terrains/soa-terrain-yaounde-2.webp'],
        videos: [VIDEO_SOA_SOUS_PREFECTURE],
    },
    {
        slug: 'soa-nkolfoulou-ii',
        neighborhood: 'Soa Nkolfoulou II',
        city: 'Yaoundé',
        title: { fr: 'Terrain titré à vendre à Soa Nkolfoulou II', en: 'Titled land for sale in Soa Nkolfoulou II' },
        description: {
            fr: 'Terrain titré à vendre à Soa Nkolfoulou II, Yaoundé : 4,9 hectares répartis en quatre titres, en bordure d’un axe secondaire, dans une zone habitée et électrifiée. Un seul signataire.',
            en: 'Titled land for sale in Soa Nkolfoulou II, Yaoundé: 4.9 hectares split into four titles, along a secondary road, in an inhabited, electrified area. Single signatory.',
        },
        location: {
            fr: 'Après Radio Bonne Nouvelle, à 700 m de l’axe principal.',
            en: 'Past Radio Bonne Nouvelle, 700 m from the main road.',
        },
        features: {
            fr: ['Terrain titré', 'Un seul signataire', 'En bordure d’un axe secondaire', 'Zone habitée et électrifiée'],
            en: ['Titled land', 'Single signatory', 'Along a secondary road', 'Inhabited, electrified area'],
        },
        surfaceM2: 49_000,
        lots: [
            { count: 1, surfaceM2: 35_000 },
            { count: 1, surfaceM2: 5_000 },
            { count: 1, surfaceM2: 7_000 },
            { count: 1, surfaceM2: 2_000 },
        ],
        pricePerM2: { min: 10_000 },
        price: null,
        available: true,
        image: '',
        imageAlt: {
            fr: 'Terrain titré à vendre à Soa Nkolfoulou II, Yaoundé',
            en: 'Titled land for sale in Soa Nkolfoulou II, Yaoundé',
        },
        gallery: [],
        videos: [VIDEO],
    },
    {
        slug: 'ebang',
        neighborhood: 'Ebang',
        city: 'Yaoundé',
        title: { fr: 'Terrain titré à vendre à Ebang', en: 'Titled land for sale in Ebang' },
        description: {
            fr: 'Terrain titré à vendre à Ebang, Yaoundé : 2 hectares (un titre foncier) en bordure d’un axe secondaire, dans une zone habitée et électrifiée. Un seul signataire.',
            en: 'Titled land for sale in Ebang, Yaoundé: 2 hectares (one land title) along a secondary road, in an inhabited, electrified area. Single signatory.',
        },
        location: {
            fr: 'Route derrière la gendarmerie de Soa, en pleins travaux, qui rejoint l’axe d’Obala, à 400 m de l’axe principal.',
            en: 'Road behind the Soa gendarmerie, currently under construction, joining the Obala road, 400 m from the main road.',
        },
        features: {
            fr: ['Terrain titré', 'Un seul signataire', 'En bordure d’un axe secondaire', 'Zone habitée et électrifiée'],
            en: ['Titled land', 'Single signatory', 'Along a secondary road', 'Inhabited, electrified area'],
        },
        surfaceM2: 20_000,
        lots: [{ count: 1, surfaceM2: 20_000 }],
        pricePerM2: { min: 15_000 },
        price: null,
        available: true,
        image: 'images/terrains/ebang-terrain-yaounde-1.webp',
        imageAlt: { fr: 'Terrain titré à vendre à Ebang, Yaoundé', en: 'Titled land for sale in Ebang, Yaoundé' },
        gallery: ['images/terrains/ebang-terrain-yaounde-1.webp'],
        videos: [VIDEO_SOA_EBANG],
    },
    {
        slug: 'lobe',
        neighborhood: 'Lobé',
        city: 'Yaoundé',
        title: { fr: 'Terrain titré à vendre à Lobé', en: 'Titled land for sale in Lobé' },
        description: {
            fr: 'Terrain titré à vendre à Lobé, Yaoundé : 11,3 hectares répartis en cinq titres sur une zone de moins d’un kilomètre, à 20 minutes de l’aéroport. Zone habitée et électrifiée, un seul signataire.',
            en: 'Titled land for sale in Lobé, Yaoundé: 11.3 hectares split into five titles within less than a kilometre, 20 minutes from the airport. Inhabited, electrified area, single signatory.',
        },
        location: {
            fr: 'Entrée plaque LNB, à 20 min de l’aéroport (avant l’entrée du BIR).',
            en: 'LNB plate entrance, 20 minutes from the airport (before the BIR entrance).',
        },
        features: {
            fr: [
                'Terrain titré',
                'Un seul signataire',
                'Parcelles réparties sur moins d’un kilomètre',
                'En bordure d’un axe secondaire',
                'Zone habitée et électrifiée',
            ],
            en: [
                'Titled land',
                'Single signatory',
                'Plots spread over less than a kilometre',
                'Along a secondary road',
                'Inhabited, electrified area',
            ],
        },
        surfaceM2: 113_000,
        lots: [
            { count: 2, surfaceM2: 35_000 },
            { count: 1, surfaceM2: 25_000 },
            { count: 1, surfaceM2: 15_000 },
            { count: 1, surfaceM2: 3_000 },
        ],
        pricePerM2: { min: 8_000, max: 10_000 },
        price: null,
        available: true,
        image: 'images/terrains/lobe-terrain-yaounde-1.webp',
        imageAlt: { fr: 'Terrain titré à vendre à Lobé, Yaoundé', en: 'Titled land for sale in Lobé, Yaoundé' },
        gallery: [''],
        videos: [VIDEO_LOBE],
    },
    {
        slug: 'fomakap',
        neighborhood: 'Fomakap',
        city: 'Yaoundé',
        title: { fr: 'Terrain titré à vendre à Fomakap', en: 'Titled land for sale in Fomakap' },
        description: {
            fr: 'Terrain titré à vendre à Fomakap, sur la route d’Obala : 1 hectare (un titre foncier), idéal pour des projets agricoles ou d’élevage. Un seul signataire.',
            en: 'Titled land for sale in Fomakap, on the Obala road: 1 hectare (one land title), ideal for farming or livestock projects. Single signatory.',
        },
        location: {
            fr: 'Sur la route d’Obala, à 1 km de l’axe principal, zone en plein développement.',
            en: 'On the Obala road, 1 km from the main road, a fast-developing area.',
        },
        features: {
            fr: ['Terrain titré', 'Un seul signataire', 'Idéal pour l’agriculture ou l’élevage', 'Zone en plein développement'],
            en: ['Titled land', 'Single signatory', 'Ideal for farming or livestock', 'Fast-developing area'],
        },
        surfaceM2: 10_000,
        lots: [{ count: 1, surfaceM2: 10_000 }],
        pricePerM2: { min: 6_000 },
        price: null,
        available: true,
        image: 'images/terrains/fomakap-terrain-yaounde-1.webp',
        imageAlt: { fr: 'Terrain titré à vendre à Fomakap, Yaoundé', en: 'Titled land for sale in Fomakap, Yaoundé' },
        gallery: ['images/terrains/fomakap-terrain-yaounde-1.webp'],
        videos: [VIDEO_SOA_FORMAKAP],
    },
];