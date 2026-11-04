import { PrivacyPolicy } from "../models/privacy-policy";

/**
 * Contenu de la page Politique de confidentialité.
 * À relire avec un conseil local avant publication définitive.
 * À mettre à jour quand un outil est activé, quand les informations légales (RCCM) arrivent,
 * ou quand la durée de conservation est validée.
 */
export const PRIVACY_POLICY: PrivacyPolicy = {
  updated: '2026-10-30',

  intro: {
    fr: [
      'Cette page explique quelles données personnelles Sidof recueille lorsque vous utilisez ce site, pourquoi, combien de temps nous les gardons et quels sont vos droits.',
      'Nous nous appuyons sur la loi camerounaise n° 2024/017 du 23 décembre 2024 relative à la protection des données à caractère personnel et, pour les visiteurs de l’Union européenne, sur le règlement général sur la protection des données (RGPD).',
    ],
    en: [
      'This page explains which personal data Sidof collects when you use this website, why, how long we keep it and what your rights are.',
      'We rely on Cameroonian law no. 2024/017 of 23 December 2024 on the protection of personal data and, for visitors from the European Union, on the General Data Protection Regulation (GDPR).',
    ],
  },

  sections: [
    {
      id: 'responsable',
      title: { fr: 'Qui est responsable de vos données', en: 'Who is responsible for your data' },
      paragraphs: {
        fr: [
          'Le responsable du traitement est Sidof, dont les bureaux sont à Yaoundé, Nouvelle route Tam-Tam (Cameroun). L’entreprise est en cours d’immatriculation.',
          'Contact : sidof190@gmail.com ; téléphone et WhatsApp : +237 696 44 46 53.',
        ],
        en: [
          'The data controller is Sidof, with offices in Yaoundé, Nouvelle route Tam-Tam (Cameroon). The company is being registered.',
          'Contact: sidof190@gmail.com; phone and WhatsApp: +237 696 44 46 53.',
        ],
      },
    },
    {
      id: 'donnees',
      title: { fr: 'Les données que nous recueillons', en: 'The data we collect' },
      paragraphs: {
        fr: ['Nous recueillons uniquement ce qui est utile pour traiter votre demande :'],
        en: ['We only collect what is needed to handle your request:'],
      },
      list: {
        fr: [
          'Formulaires de contact, de devis et d’assistance voyage : nom, e-mail, téléphone, message, service concerné, langue du site, page depuis laquelle vous écrivez et date d’envoi.',
          'WhatsApp : si vous nous écrivez par WhatsApp, nous recevons votre numéro et le contenu de vos messages, selon les règles de WhatsApp.',
          'Données techniques : adresse IP et informations de navigation, traitées par notre hébergeur pour afficher et sécuriser le site.',
          'Mesure d’audience : seulement si vous l’acceptez dans le bandeau cookies (voir la politique de cookies).',
        ],
        en: [
          'Contact, quote and travel-assistance forms: name, email, phone, message, service concerned, site language, the page you wrote from and the date sent.',
          'WhatsApp: if you write to us on WhatsApp, we receive your number and the content of your messages, under WhatsApp’s rules.',
          'Technical data: IP address and browsing information, handled by our host to display and secure the site.',
          'Audience measurement: only if you accept it in the cookie banner (see the cookie policy).',
        ],
      },
      after: {
        fr: ['Nous ne vous demandons aucune donnée sensible (santé, religion, opinions, etc.). Merci de ne pas en écrire dans vos messages.'],
        en: ['We do not ask for any sensitive data (health, religion, opinions, etc.). Please do not include any in your messages.'],
      },
    },
    {
      id: 'finalites',
      title: { fr: 'Pourquoi nous les utilisons', en: 'Why we use it' },
      list: {
        fr: [
          'Répondre à vos demandes de contact, de devis ou d’assistance, et préparer une éventuelle prestation : ce sont vos démarches avant un contrat.',
          'Assurer la sécurité et le bon fonctionnement du site : notre intérêt légitime.',
          'Mesurer l’audience du site : votre consentement, que vous pouvez retirer à tout moment.',
          'Respecter nos obligations légales, par exemple comptables, si une prestation est conclue.',
        ],
        en: [
          'Answer your contact, quote or assistance requests and prepare a possible service: these are your steps before a contract.',
          'Keep the site secure and working: our legitimate interest.',
          'Measure the site’s audience: your consent, which you can withdraw at any time.',
          'Meet our legal obligations, such as accounting, if a service is agreed.',
        ],
      },
    },
    {
      id: 'destinataires',
      title: { fr: 'Qui reçoit vos données', en: 'Who receives your data' },
      paragraphs: {
        fr: [
          'Vos données sont accessibles aux personnes de Sidof qui traitent votre demande. Lorsque votre demande concerne la construction, les matériaux ou le design d’intérieur et la décoration en staff, nous pouvons la transmettre à l’exécutant concerné (BURMATS BTP ou Beto), uniquement pour y répondre.',
          'Le site est hébergé par Google (Firebase Hosting), et les demandes envoyées par formulaire sont enregistrées dans Google Cloud Firestore. Ces services peuvent traiter des données sur des serveurs situés hors du Cameroun et hors de l’Union européenne. Nous ne vendons pas vos données.',
        ],
        en: [
          'Your data is available to the people at Sidof who handle your request. When your request concerns construction, materials, or interior design and staff decoration, we may pass it to the contractor concerned (BURMATS BTP or Beto), only to answer it.',
          'The site is hosted by Google (Firebase Hosting), and requests sent through forms are stored in Google Cloud Firestore. These services may process data on servers located outside Cameroon and outside the European Union. We do not sell your data.',
        ],
      },
    },
    {
      id: 'duree',
      title: { fr: 'Combien de temps nous les gardons', en: 'How long we keep it' },
      paragraphs: {
        fr: [
          'Nous gardons votre demande le temps de la traiter et d’en assurer le suivi. Si aucune prestation n’est conclue, nous la supprimons au plus tard 3 ans après notre dernier échange. Si une prestation est conclue, les données du dossier sont conservées pendant la relation, puis selon les durées légales.',
          'Vos choix de cookies sont conservés 12 mois sur votre appareil.',
        ],
        en: [
          'We keep your request for as long as needed to handle it and follow up. If no service is agreed, we delete it no later than 3 years after our last exchange. If a service is agreed, the file’s data is kept during the relationship, then for the legal retention periods.',
          'Your cookie choices are kept for 12 months on your device.',
        ],
      },
    },
    {
      id: 'droits',
      title: { fr: 'Vos droits', en: 'Your rights' },
      paragraphs: {
        fr: [
          'Vous pouvez à tout moment demander l’accès à vos données, leur correction, leur suppression, la limitation de leur usage, ou vous opposer à leur traitement. Vous pouvez aussi retirer votre consentement aux cookies avec « Gérer mes cookies ».',
          'Pour exercer ces droits, écrivez à sidof190@gmail.com en précisant votre demande. Nous pouvons demander un justificatif d’identité si c’est nécessaire pour éviter qu’une autre personne accède à vos données.',
          'Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir l’autorité de protection des données compétente : au Cameroun, l’Autorité de protection des données à caractère personnel ; si vous résidez dans l’Union européenne, l’autorité de votre pays (par exemple la CNIL en France).',
        ],
        en: [
          'You can at any time ask for access to your data, its correction or deletion, the restriction of its use, or object to its processing. You can also withdraw your cookie consent with “Manage my cookies”.',
          'To use these rights, write to sidof190@gmail.com stating your request. We may ask for proof of identity if needed to prevent someone else from accessing your data.',
          'If you believe your rights are not respected, you can contact the competent data protection authority: in Cameroon, the Autorité de protection des données à caractère personnel; if you live in the European Union, the authority of your country (for example the CNIL in France).',
        ],
      },
    },
    {
      id: 'securite',
      title: { fr: 'Sécurité', en: 'Security' },
      paragraphs: {
        fr: [
          'Le site est servi en HTTPS. Les formulaires envoient les demandes vers une base protégée : le public peut y écrire mais pas la lire.',
          'Aucune sécurité n’est absolue. En cas d’incident touchant vos données, nous vous informerons et préviendrons les autorités selon la loi applicable.',
        ],
        en: [
          'The site is served over HTTPS. Forms send requests to a protected database: the public can write to it but not read it.',
          'No security is absolute. If an incident affects your data, we will inform you and notify the authorities as the applicable law requires.',
        ],
      },
    },
    {
      id: 'services-tiers',
      title: { fr: 'Services d’autres entreprises', en: 'Other companies’ services' },
      paragraphs: {
        fr: [
          'YouTube, WhatsApp et les réseaux sociaux (Facebook, Instagram, TikTok, LinkedIn) sont des services tiers avec leurs propres politiques de confidentialité. Les vidéos YouTube ne se chargent qu’après votre clic.',
        ],
        en: [
          'YouTube, WhatsApp and social networks (Facebook, Instagram, TikTok, LinkedIn) are third-party services with their own privacy policies. YouTube videos only load after you click.',
        ],
      },
    },
    {
      id: 'modifications',
      title: { fr: 'Modifications de cette page', en: 'Changes to this page' },
      paragraphs: {
        fr: ['Nous pouvons mettre à jour cette page, par exemple quand nous activons un nouvel outil. La date de dernière mise à jour figure en haut de la page.'],
        en: ['We may update this page, for example when we switch on a new tool. The date of the last update is shown at the top of the page.'],
      },
    },
  ],
};