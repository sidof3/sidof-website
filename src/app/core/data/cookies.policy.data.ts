import { CookiesPolicy } from "../models/cookies-policy.model";

/**
 * Contenu de la page Politique de cookies.
 * À mettre à jour avec la page quand un outil est activé (Tag Manager, Analytics, pixel...) :
 * le tableau doit toujours refléter ce que le navigateur enregistre réellement.
 */
export const COOKIES_POLICY: CookiesPolicy = {
  updated: '2026-10-30',

  intro: {
    fr: [
      'Cette page explique quels cookies et traceurs le site de Sidof utilise, à quoi ils servent, et comment vous pouvez les accepter, les refuser ou changer d’avis à tout moment.',
      'Un cookie est un petit fichier enregistré dans votre navigateur. Nous utilisons aussi le stockage local du navigateur, qui joue le même rôle. Nous les appelons ensemble « traceurs ».',
    ],
    en: [
      'This page explains which cookies and trackers the Sidof website uses, what they are for, and how you can accept, refuse or change your mind at any time.',
      'A cookie is a small file saved in your browser. We also use the browser’s local storage, which plays the same role. Together we call them “trackers”.',
    ],
  },

  table: {
    title: { fr: 'Ce que nous utilisons', en: 'What we use' },
    intro: {
      fr: ['Seul le premier traceur est actif sans votre accord : il est indispensable pour retenir votre choix.'],
      en: ['Only the first tracker is active without your consent: it is needed to remember your choice.'],
    },
    head: {
      fr: ['Nom', 'Fournisseur', 'Finalité', 'Durée', 'Catégorie'],
      en: ['Name', 'Provider', 'Purpose', 'Duration', 'Category'],
    },
    rows: [
      {
        name: 'sidof-consent',
        provider: { fr: 'Sidof (stockage local)', en: 'Sidof (local storage)' },
        purpose: { fr: 'Retient vos choix de cookies', en: 'Remembers your cookie choices' },
        duration: { fr: '12 mois', en: '12 months' },
        category: 'necessary',
      },
      {
        name: '_ga',
        provider: { fr: 'Google Analytics', en: 'Google Analytics' },
        purpose: {
          fr: 'Distingue les visiteurs pour compter les visites',
          en: 'Tells visitors apart to count visits',
        },
        duration: { fr: '13 mois', en: '13 months' },
        category: 'statistics',
      },
      {
        name: '_ga_<identifiant>',
        provider: { fr: 'Google Analytics', en: 'Google Analytics' },
        purpose: {
          fr: 'Conserve l’état de la session de mesure',
          en: 'Keeps the state of the measurement session',
        },
        duration: { fr: '13 mois', en: '13 months' },
        category: 'statistics',
      },
    ],
    note: {
      fr: [
        'Les traceurs de statistiques ne sont déposés qu’après votre accord, et seulement quand la mesure d’audience est activée sur le site. Elle peut ne pas être encore active : cette page est mise à jour dès qu’elle l’est. Aucun cookie publicitaire n’est utilisé pour le moment.',
      ],
      en: [
        'Statistics trackers are only set after you agree, and only when audience measurement is switched on for the site. It may not be active yet: this page is updated as soon as it is. No advertising cookie is used at the moment.',
      ],
    },
  },

  sections: [
    {
      id: 'categories',
      title: { fr: 'Les trois catégories', en: 'The three categories' },
      paragraphs: {
        fr: ['Le bandeau vous laisse choisir par catégorie :'],
        en: ['The banner lets you choose by category:'],
      },
      list: {
        fr: [
          'Nécessaires : toujours actifs, ils retiennent vos choix. Ils ne demandent pas de consentement.',
          'Statistiques : mesurent l’audience du site (pages vues, provenance des visites) pour l’améliorer. Désactivés par défaut.',
          'Marketing : réservés à de futurs pixels publicitaires. Aucun n’est utilisé aujourd’hui. Désactivés par défaut.',
        ],
        en: [
          'Necessary: always on, they remember your choices. They do not require consent.',
          'Statistics: measure the site’s audience (page views, where visits come from) so we can improve it. Off by default.',
          'Marketing: reserved for future advertising pixels. None is used today. Off by default.',
        ],
      },
    },
    {
      id: 'choix',
      title: { fr: 'Vos choix', en: 'Your choices' },
      paragraphs: {
        fr: [
          'Au premier accès, un bandeau vous propose d’accepter ou de refuser les traceurs non nécessaires. Refuser est aussi simple qu’accepter, et le site fonctionne de la même façon dans les deux cas.',
          'Votre choix est conservé 12 mois sur votre appareil, puis nous vous le demandons de nouveau. Vous pouvez le modifier à tout moment avec le bouton « Gérer mes cookies » de cette page ou du pied de page.',
          'Vous pouvez aussi bloquer ou supprimer les cookies dans les réglages de votre navigateur. Dans ce cas, le bandeau pourra réapparaître à chaque visite.',
        ],
        en: [
          'On your first visit, a banner lets you accept or refuse non-necessary trackers. Refusing is as easy as accepting, and the site works the same way either way.',
          'Your choice is kept for 12 months on your device, then we ask you again. You can change it at any time with the “Manage my cookies” button on this page or in the footer.',
          'You can also block or delete cookies in your browser settings. If you do, the banner may appear again on each visit.',
        ],
      },
    },
    {
      id: 'services-tiers',
      title: { fr: 'Contenus d’autres services', en: 'Content from other services' },
      paragraphs: {
        fr: [
          'Les vidéos YouTube ne se chargent que lorsque vous cliquez dessus, depuis le domaine youtube-nocookie.com, pour limiter les traceurs.',
          'Les boutons WhatsApp ouvrent l’application ou le site de WhatsApp, qui applique sa propre politique. Nos liens vers Facebook, Instagram, TikTok, YouTube et LinkedIn mènent vers des services qui ont leurs propres règles.',
        ],
        en: [
          'YouTube videos only load when you click them, from the youtube-nocookie.com domain, to limit trackers.',
          'The WhatsApp buttons open the WhatsApp app or website, which applies its own policy. Our links to Facebook, Instagram, TikTok, YouTube and LinkedIn lead to services with their own rules.',
        ],
      },
    },
    {
      id: 'contact',
      title: { fr: 'Pour en savoir plus', en: 'More information' },
      paragraphs: {
        fr: [
          'Pour toute question sur les cookies, écrivez-nous à sidof190@gmail.com. Le traitement de vos données personnelles est décrit dans notre politique de confidentialité.',
        ],
        en: [
          'For any question about cookies, write to us at sidof190@gmail.com. How we handle your personal data is described in our privacy policy.',
        ],
      },
    },
  ],
};