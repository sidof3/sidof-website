# Plan de travail : Sidof v2 (Angular SSR + Tailwind, FR/EN)

Repartir sur une base propre est un bon choix : l'ancien projet a accumulé des réglages incohérents. Dans ton `angular.json`, par exemple, les `fileReplacements` de production sont inversés et les budgets sont à l'envers (erreur à 1 Mo, avertissement à 10 Mo). Voici le plan proposé.

## 1. Choix techniques recommandés

Je pars sur ces choix, sauf si tu veux en changer.

| Sujet | Recommandation | Pourquoi |
|---|---|---|
| Rendu | SSR avec pré-rendu des pages (rendu hybride Angular) | Presque tout ton contenu est stable, donc les pages sont pré-rendues en HTML statique, idéal pour Google. |
| Hébergement | Firebase Hosting, même projet `sidof3-d342a` | Le pré-rendu se déploie en statique, sans serveur. Le SSR dynamique passerait par Firebase App Hosting, qui demande généralement le plan Blaze (payant à l'usage). |
| i18n | `@angular/localize`, une version par langue (`/fr/…`, `/en/…`) | Chaque langue a ses propres URLs, avec balises `hreflang`, ce qui est bien meilleur pour le SEO qu'un simple bouton de traduction. |
| Langue par défaut | Français (`/` redirige vers `/fr/`) | Ta clientèle principale est francophone. |
| CSS | Tailwind avec des variables de thème | Une couleur de marque (rose Sidof) et un accent par division : bleu pour la construction, terracotta pour le design, vert pour les terrains. |
| Contenu | Fichiers de données TypeScript par langue | Plus simple et plus rapide qu'une base de données. Une base (Firestore) pourra venir plus tard pour les annonces. |
| Formulaires | Firebase (Firestore + e-mail) et boutons WhatsApp | Tout reste dans ton projet Firebase existant. |
| Git | Nouvelle branche (`v2`), déploiement via un canal d'aperçu Firebase | Tu testes sans toucher au site actuel. |

## 2. Plan du site

| Page | URL française | URL anglaise |
|---|---|---|
| Accueil | `/fr/` | `/en/` |
| Construction | `/fr/construction` | `/en/construction` |
| Terrains à vendre (liste) | `/fr/terrains` | `/en/land-for-sale` |
| Fiche terrain (une par site : Nkoabang, Soa, Ebang, Lobé, Fomakap…) | `/fr/terrains/nkoabang` | `/en/land-for-sale/nkoabang` |
| Maisons et duplex à vendre (dont le duplex d'Odza) | `/fr/maisons-a-vendre` | `/en/houses-for-sale` |
| Appartements meublés (liste + fiches) | `/fr/appartements-meubles` | `/en/furnished-apartments` |
| Design d'intérieur (par quartier) | `/fr/design-interieur` | `/en/interior-design` |
| Développement logiciel + projets | `/fr/developpement-logiciel` | `/en/software-development` |
| Portfolio personnel (anglais uniquement, comme demandé) | `/en/portfolio` | idem |
| À propos | `/fr/a-propos` | `/en/about` |
| Blog | `/fr/blog` | `/en/blog` |
| FAQ | `/fr/faq` | `/en/faq` |
| Contact et devis | `/fr/contact` | `/en/contact` |
| Mentions légales, confidentialité, cookies | `/fr/mentions-legales`, etc. | `/en/legal`, etc. |

Les **fiches individuelles** (une par terrain, par appartement, par réalisation) sont ce qui te fera apparaître sur des recherches précises comme « terrain à vendre Nkoabang ». C'est la plus grosse différence avec l'ancien site, où tout était sur une seule page.

Le **blog** sert à capter la diaspora. Exemples d'articles : « Comment construire au Cameroun depuis l'étranger », « Acheter un terrain titré à Yaoundé : les étapes », « Combien coûte une maison R+1 à Yaoundé ».

## 3. Phases de travail

**Phase 0 : Cadrage (avant de coder)**
- Valider les choix ci-dessus et lister les contenus manquants (voir section 4).
- Rédiger l'arborescence finale et les mots-clés par page.
- Créer la branche Git `v2` et le nouveau projet.

**Phase 1 : Fondations**
- Projet Angular SSR, Tailwind et thème de marque (couleurs, typographies, composants de base).
- Configuration i18n FR/EN, routage par langue, sélecteur de langue.
- Layout commun : navigation, pied de page, bouton WhatsApp flottant.
- Service SEO central (title, meta, Open Graph, hreflang, canonical, JSON-LD).
- Configuration Firebase Hosting avec canal d'aperçu.

**Phase 2 : Pages principales**
Ordre proposé : accueil, construction, terrains (liste + fiches), maisons à vendre (duplex d'Odza), appartements meublés, design d'intérieur, développement logiciel, à propos, contact.

**Phase 3 : Contenu secondaire et SEO technique**
- Portfolio, FAQ, blog (3 à 5 premiers articles), pages légales.
- `sitemap.xml` multilingue, `robots.txt`, données structurées par type de page (`LocalBusiness`, `RealEstateListing`, `GeneralContractor`, `FAQPage`, `BreadcrumbList`).
- Optimisation des images (WebP/AVIF, chargement différé) et des vidéos YouTube (chargement à la demande).
- Objectifs de performance : Lighthouse supérieur à 90 en performance, SEO et accessibilité.

**Phase 4 : Qualité et validation**
- Tests sur mobile, car la majorité de ta clientèle est sur téléphone.
- Vérification des liens, des formulaires, des traductions et de l'accessibilité.
- Revue sur le canal d'aperçu Firebase, puis mise en production.

**Phase 5 : Connexion aux plateformes Google (après la première phase)**
1. Domaine personnalisé sur Firebase Hosting.
2. **Google Search Console** : vérification du domaine, soumission du sitemap, suivi de l'indexation.
3. **Google Tag Manager** : un seul conteneur installé sur le site.
4. **Google Analytics 4** (via GTM) : événements clés comme les clics WhatsApp, les envois de formulaire, les vues de fiches terrain et les appels.
5. **Bandeau de consentement cookies** avec Consent Mode v2, important pour tes visiteurs d'Europe.
6. **Google Business Profile** : lier le site à la fiche (les catégories et la description sont déjà prêtes).
7. Optionnel : Bing Webmaster Tools, pixel Meta si tu fais de la publicité Facebook ou Instagram, Google Ads plus tard.

**Phase 6 : Après le lancement**
- Publication régulière d'articles de blog.
- Collecte de vrais témoignages et d'avis Google.
- Suivi mensuel dans Search Console (requêtes, positions) et ajustement des pages.

## 4. Ce que j'ai déjà et ce qui manque

**Déjà en ma possession :**
- Les 5 services et leurs textes (en français et en anglais).
- Les 6 terrains avec prix, superficies et localisations.
- Les 9 appartements et villas meublés.
- Le duplex d'Odza (290 000 000 FCFA, 2 unités).
- Les 4 chantiers de construction et les 4 sites de design d'intérieur (Odza, Bastos, Olembe, Simbock).
- Les projets logiciels FAST GAZ, GroupinG, KAP Expert Tontine Bank et MicroFin Manager.
- Le contact : WhatsApp +237 696 44 46 53 et sidof@sidof.xyz.

**À me fournir :**
- Le **logo** (idéalement en SVG) et les couleurs exactes.
- Le **nom de domaine** définitif.
- Les **photos** manquantes (terrains, duplex, meublés, design) et les vraies vidéos YouTube.
- Les **vrais témoignages** clients (je n'en inventerai pas).
- Les informations légales (raison sociale, RCCM, adresse) pour les mentions légales.
- Tes liens de réseaux sociaux (Facebook, Instagram, TikTok, YouTube, LinkedIn).
- Le texte « À propos » : histoire de Sidof et de l'équipe.

## 5. Point à trancher

Sur la page construction, tu as remplacé **Sidof** par **BURMATS**. Pour la v2, je dois savoir comment présenter la construction : sous la marque **Sidof** avec BURMATS BTP comme exécutant (ton idée initiale), ou sous la marque **BURMATS** elle-même. Ce choix change les titres, le SEO et les données structurées de toute la section.

---

Je peux transformer ce plan en document éditable à partager ou à imprimer. La suite logique est la Phase 0. Il me faudrait alors ta réponse sur BURMATS/Sidof et le nom de domaine, puis je prépare les commandes de création du projet (Angular SSR, Tailwind, i18n) et la structure des dossiers.