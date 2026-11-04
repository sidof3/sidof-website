import { LegalDoc } from "../models/legal";

/**
 * À relire avec un conseil local avant publication définitive.
 * À compléter dès l'obtention du RCCM, de la raison sociale et de la forme juridique.
 */
export const LEGAL_NOTICE: LegalDoc = {
  title: {
    fr: 'Mentions légales',
    en: 'Legal notice',
  },
  updated: '2026-10-30',
  intro: {
    fr: ['Ces mentions légales présentent l’éditeur du site de Sidof, son hébergeur et les règles d’utilisation du site.'],
    en: ['This legal notice presents the publisher of the Sidof website, its host and the rules for using the site.'],
  },
  sections: [
    {
      id: 'editeur',
      title: { fr: 'Éditeur du site', en: 'Site publisher' },
      paragraphs: {
        fr: [
          'Ce site est édité par Sidof, dont les bureaux sont à Yaoundé, Nouvelle route Tam-Tam (Cameroun).',
          'Statut : entreprise en cours d’immatriculation. Le numéro RCCM sera indiqué ici dès son obtention.',
          'Contact : sidof190@gmail.com ; téléphone et WhatsApp : +237 696 44 46 53. Bureaux ouverts du lundi au vendredi de 08:00 à 17:00 et le samedi de 08:00 à 16:00.',
        ],
        en: [
          'This site is published by Sidof, with offices in Yaoundé, Nouvelle route Tam-Tam (Cameroon).',
          'Status: company being registered. The RCCM number will be shown here as soon as it is obtained.',
          'Contact: sidof190@gmail.com; phone and WhatsApp: +237 696 44 46 53. Offices open Monday to Friday from 08:00 to 17:00 and Saturday from 08:00 to 16:00.',
        ],
      },
    },
    {
      id: 'hebergement',
      title: { fr: 'Hébergeur', en: 'Host' },
      paragraphs: {
        fr: ['Le site est hébergé par Google LLC (Firebase Hosting), 1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis.'],
        en: ['The site is hosted by Google LLC (Firebase Hosting), 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States.'],
      },
    },
    {
      id: 'prestataires',
      title: { fr: 'Prestataires d’exécution', en: 'Execution partners' },
      paragraphs: {
        fr: [
          'Sidof conçoit les projets, coordonne et suit les travaux. L’exécution de la construction est confiée à BURMATS BTP, et celle du design d’intérieur et de la décoration en staff à Beto.',
        ],
        en: [
          'Sidof designs projects, coordinates and follows the work. Construction is carried out by BURMATS BTP, and interior design and staff decoration by Beto.',
        ],
      },
    },
    {
      id: 'propriete-intellectuelle',
      title: { fr: 'Propriété intellectuelle', en: 'Intellectual property' },
      paragraphs: {
        fr: [
          'Les textes, images, logos, vidéos et le code de ce site appartiennent à Sidof ou à leurs titulaires, et sont protégés. Toute reproduction sans autorisation écrite préalable est interdite.',
        ],
        en: [
          'The texts, images, logos, videos and code of this site belong to Sidof or to their owners and are protected. Any reproduction without prior written permission is forbidden.',
        ],
      },
    },
    {
      id: 'responsabilite',
      title: { fr: 'Informations et responsabilité', en: 'Information and liability' },
      paragraphs: {
        fr: [
          'Nous veillons à l’exactitude des informations publiées (terrains, maisons, appartements, matériaux), mais elles peuvent changer. Les prix, superficies et disponibilités sont confirmés par Sidof lors de votre demande.',
          'Sidof ne peut être tenu responsable d’une interruption du site ou d’une erreur involontaire.',
        ],
        en: [
          'We take care to keep the published information accurate (land, houses, apartments, materials), but it may change. Prices, areas and availability are confirmed by Sidof when you make a request.',
          'Sidof cannot be held liable for an interruption of the site or an unintentional error.',
        ],
      },
    },
    {
      id: 'liens-externes',
      title: { fr: 'Liens externes', en: 'External links' },
      paragraphs: {
        fr: ['Ce site contient des liens vers des sites tiers (réseaux sociaux, YouTube, WhatsApp). Sidof n’est pas responsable de leur contenu.'],
        en: ['This site contains links to third-party sites (social networks, YouTube, WhatsApp). Sidof is not responsible for their content.'],
      },
    },
    {
      id: 'donnees',
      title: { fr: 'Données personnelles et cookies', en: 'Personal data and cookies' },
      paragraphs: {
        fr: ['Le traitement de vos données personnelles est décrit dans la politique de confidentialité, et l’usage des cookies dans la politique de cookies.'],
        en: ['How we handle your personal data is described in the privacy policy, and the use of cookies in the cookie policy.'],
      },
    },
    {
      id: 'droit-applicable',
      title: { fr: 'Droit applicable', en: 'Applicable law' },
      paragraphs: {
        fr: ['Ce site est soumis au droit camerounais. En cas de litige, nous privilégions une solution amiable avant toute action devant les tribunaux compétents.'],
        en: ['This site is governed by Cameroonian law. In the event of a dispute, we favour an amicable solution before any action before the competent courts.'],
      },
    },
  ],
};