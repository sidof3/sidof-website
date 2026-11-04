# Plan de travail – Sidof v2

Oct 21, 2026 · @john

## Contexte et objectifs

Sidof v2 est la refonte complète du site de Sidof, repartie d'une base propre pour être trouvée sur Google et utilisée surtout sur téléphone. L'ancien projet avait accumulé des réglages incohérents : on ne le reprend pas.

- **Clientèle** : Camerounais et diaspora, en majorité sur mobile. Objectif principal de la construction : servir la diaspora qui veut construire ou acheter un terrain au Cameroun.
- **Langues** : français (par défaut) et anglais, avec des pages indexables dans chaque langue.
- **Offre** : 7 services (construction, terrains, maisons et duplex, appartements meublés, design d'intérieur, matériaux, assistance voyage), plus le développement logiciel et un portfolio en anglais. Construction, design d'intérieur et décoration en staff couvrent tout le Cameroun ; les bureaux sont à Yaoundé, Nouvelle route Tam-Tam.
- **Objectifs mesurables** : Lighthouse supérieur à 90 en performance, SEO et accessibilité ; des fiches précises (par exemple « terrain à vendre Nkoabang ») référencées sur Google.
- **Méthode** : on avance étape par étape. Aucun code n'est écrit avant la validation de la feuille de route : plan du site, architecture, choix techniques.

## Marques et rôles

Sidof est la seule marque affichée en titre ; BURMATS BTP et Beto sont présentés comme exécutants.

| Marque | Rôle | Où elle apparaît |
| --- | --- | --- |
| Sidof | Marque principale : conception, coordination, relation client, suivi, SEO | Partout : logo, titres, référencement |
| BURMATS BTP | Exécutant de la construction (activité principale). Fournit aussi le sable et propose en parallèle des services d'aménagement, présentés dans la page construction | Page construction (section dédiée), accueil, à propos |
| Beto | Exécutant du design d'intérieur et de la décoration en staff (plâtre décoratif) | Page design d'intérieur (« Réalisé avec Beto »), accueil, à propos |

Dans les données structurées (JSON-LD), Sidof est décrit comme l'entreprise, BURMATS BTP et Beto comme prestataires d'exécution.

## Plan du site avec URLs

Le site compte 23 types de pages, chacune avec son URL dans les deux langues, sauf le portfolio (anglais uniquement). `/` redirige vers `/fr/`. Le `{slug}` d'une fiche est identique en français et en anglais (par exemple `nkoabang`), ce qui simplifie le changement de langue et les balises hreflang.

Le mot-clé et le lieu sont dans l'URL. Les biens situés à Yaoundé (terrains, maisons, appartements, matériaux) portent « yaounde » ; les services qui couvrent tout le pays (construction, design d'intérieur et décoration en staff, assistance voyage) portent « cameroun ». Les matériaux vendus (sable, carreaux iraniens) le sont à Yaoundé ; les carreaux iraniens ont leur propre page, car c'est une recherche à part. Le mot « staff » reste « staff » en français comme en anglais ; les titres de la page sont « Design d'intérieur et décoration en staff » et « Interior design and staff decoration ».

| Page | URL française | URL anglaise |
| --- | --- | --- |
| Accueil (7 cartes de service) | `/fr` | `/en` |
| Construction pour la diaspora (avec BURMATS BTP) | `/fr/construire-au-cameroun` | `/en/build-a-house-in-cameroon` |
| Terrains à vendre (liste) | `/fr/terrains-a-vendre-yaounde` | `/en/land-for-sale-yaounde` |
| Fiche terrain | `/fr/terrains-a-vendre-yaounde/{slug}` | `/en/land-for-sale-yaounde/{slug}` |
| Maisons et duplex à vendre | `/fr/maisons-a-vendre-yaounde` | `/en/houses-for-sale-yaounde` |
| Maisons à louer | `/fr/maisons-a-louer-yaounde` | `/en/houses-for-rent-yaounde` |
| Appartements meublés à louer (liste) | `/fr/appartements-meubles-a-louer-yaounde` | `/en/furnished-apartments-for-rent-yaounde` |
| Fiche appartement | `/fr/appartements-meubles-a-louer-yaounde/{slug}` | `/en/furnished-apartments-for-rent-yaounde/{slug}` |
| Design d'intérieur et décoration en staff (avec Beto) | `/fr/decoration-staff-cameroun` | `/en/staff-decoration-cameroon` |
| Matériaux de construction (sable et autres) | `/fr/materiaux-de-construction-yaounde` | `/en/building-materials-yaounde` |
| Carreaux iraniens | `/fr/carreaux-iraniens-yaounde` | `/en/iranian-tiles-yaounde` |
| Assistance voyage | `/fr/assistance-voyage-cameroun` | `/en/travel-assistance-cameroon` |
| Développement logiciel | `/fr/developpement-logiciel` | `/en/software-development` |
| Portfolio personnel | n'existe pas | `/en/portfolio` |
| À propos | `/fr/a-propos` | `/en/about` |
| Blog (liste) | `/fr/blog` | `/en/blog` |
| Article de blog | `/fr/blog/{slug}` | `/en/blog/{slug}` |
| FAQ | `/fr/faq` | `/en/faq` |
| Contact et devis | `/fr/contact` | `/en/contact` |
| Mentions légales | `/fr/mentions-legales` | `/en/legal` |
| Confidentialité | `/fr/confidentialite` | `/en/privacy` |
| Cookies | `/fr/cookies` | `/en/cookies` |
| Page introuvable | `/fr/**` | `/en/**` |

Les fiches individuelles (terrain, appartement, article) sont ce qui fait apparaître Sidof sur des recherches précises. Les articles de blog visent la diaspora : construire au Cameroun depuis l'étranger, acheter un terrain titré à Yaoundé, coût d'une maison R+1.

## Architecture des dossiers

Le code est rangé en quatre blocs : ce qui sert à tout le site (`core`), ce qui se réutilise (`shared`), les pages (`pages`, une par dossier, chargée à la demande) et les contenus (`data`).

```text
src/
  app/
    core/
      shell/                 coquille commune : header, footer, whatsapp-button, cookie-banner
      language-switch/
      services/              language, seo, consent, lead, whatsapp
      routing/               route-paths.ts (URLs traduites par page)
      i18n/                  fr.ts, en.ts : textes d'interface, mêmes clés dans les deux langues
      models/                interfaces TypeScript (terrain, appartement, article...)
    shared/
      components/            composants réutilisables
    pages/                   une page = un dossier
      home/  construction/  land/ (land-detail/)  houses/  house-rentals/
      apartments/ (apartment-detail/)  interior/  materials/  iranian-tiles/  travel/
      software/  portfolio/  about/  blog/ (blog-post/)  faq/  contact/
      legal/  privacy/  cookies/  not-found/
    data/                    contenus TypeScript, français et anglais côte à côte
    app.routes.ts
    app.config.ts
    firebase.providers.ts
  environments/
  index.html
  styles.css
public/
  robots.txt, sitemap.xml    référencement
  images/                    classées par section : terrains, appartements, design, materiaux, logos
```

Conventions :

- Composants autonomes (standalone), un dossier par composant, noms en minuscules avec tirets.
- Aucun fichier CSS par composant : le style passe par Tailwind et `styles.css`.
- Une page ne contient que sa composition ; ce qui sert deux fois va dans `shared/`.

* Les noms de dossiers et de composants restent simples : Google ne les voit pas. Les mots-clés vont dans les URLs, les titres, les H1 et les images.

- **Modèles** : chaque type de contenu (terrain, maison, appartement, projet, matériau, article, question de FAQ) a son interface TypeScript dans `core/models/`.
- **Données** : pour démarrer, chaque fichier de `data/` contient ses propres données, typées avec le modèle correspondant.
- **Images et vidéos** : chaque donnée a un champ image et un champ vidéo, laissés vides ou avec une image par défaut ; Sidof renseigne ensuite les bons chemins d'images et identifiants YouTube.

## Liste des composants

Trois familles : la coquille commune (`core`), les composants partagés (`shared`) et les services.

**Coquille commune (`core/`)**

| Composant | Rôle |
| --- | --- |
| ShellComponent | Contient l'en-tête, la zone d'affichage de la page, le pied de page, le bouton WhatsApp et le bandeau cookies |
| HeaderComponent | Logo, menu principal, menu mobile, sélecteur de langue |
| FooterComponent | Coordonnées, réseaux sociaux, liens légaux, lien « Gérer mes cookies » |
| LanguageSwitchComponent | Bouton FR/EN vers la même page dans l'autre langue (accueil si elle n'existe pas, par exemple le portfolio) |
| WhatsappButtonComponent | Bouton flottant avec message prérempli |
| CookieBannerComponent | Trois catégories ; « Refuser » aussi visible que « Accepter » |

**Composants partagés (`shared/components/`)**

| Composant | Utilisé dans |
| --- | --- |
| PageHeroComponent | Haut de chaque page : titre, sous-titre, image |
| SectionHeadingComponent | Titres de section |
| ServiceCardComponent | Accueil (7 cartes) |
| PartnerStripComponent | BURMATS BTP et Beto : accueil, construction, design, à propos |
| PropertyCardComponent | Cartes terrain, maison, appartement |
| GalleryComponent | Photos des fiches et des réalisations |
| YoutubeFacadeComponent | Vidéo chargée au clic (youtube-nocookie.com) |
| ProjectCardComponent | Chantiers, sites de design, projets logiciels |
| MaterialCardComponent | Catalogue de matériaux avec « Demander un prix » |
| BlogCardComponent | Liste du blog |
| FaqListComponent | FAQ et blocs de questions des pages |
| ContactFormComponent | Contact, devis, assistance voyage |
| CtaBandComponent | Bandeau d'appel à l'action : WhatsApp, devis |
| BreadcrumbComponent | Fil d'Ariane avec données structurées |
| SocialLinksComponent | Réseaux sociaux : pied de page, à propos |

**Services (`core/services/`)**

| Service | Rôle |
| --- | --- |
| LanguageService | Lit la langue dans l'URL, fournit les textes de la langue et met à jour la balise html lang, donne l'URL équivalente dans l'autre langue |
| SeoService | Lit `data.page` de la route ; écrit titre, description, canonical, hreflang (fr, en, x-default), Open Graph et JSON-LD |
| ConsentService | Mémorise les choix de cookies et pilote le Consent Mode |
| LeadService | Envoie les formulaires vers Firestore |
| WhatsappService | Construit les liens WhatsApp avec message prérempli |

**Fichiers de données (`data/`)** : `company.data.ts`, `services.data.ts`, `lands.data.ts`, `houses.data.ts`, `apartments.data.ts`, `interior.data.ts`, `materials.data.ts`, `travel.data.ts`, `construction-projects.data.ts`, `software-projects.data.ts`, `blog.data.ts`, `faq.data.ts`. Chaque fichier contient ses données, typées avec un modèle de core/models ; les champs image et vidéo sont prévus mais restent à renseigner. Les témoignages n'auront un fichier que lorsque de vrais avis seront disponibles.

## Choix techniques

Le site est un Angular avec rendu côté serveur et pré-rendu, déployé en statique sur Firebase, avec le français et l'anglais dans l'URL.

| Sujet | Choix | Pourquoi |
| --- | --- | --- |
| Langues | Préfixe `/fr` et `/en`, URLs traduites ; textes d'interface dans fr.ts et en.ts | Chaque langue a ses pages indexables, bien meilleur pour le SEO qu'un simple bouton de traduction |
| Rendu | `@angular/ssr` avec pré-rendu des pages | Les robots lisent un HTML déjà rendu ; le pré-rendu se déploie sans serveur |
| SEO par page | `SeoService` lit `data.page` de chaque route | Titre, description, canonical et hreflang dépendent de la page : ils ne peuvent pas être fixes dans `index.html` |
| Performance | Chargement à la demande de chaque page (lazy loading), images WebP/AVIF, vidéos YouTube au clic | Premier chargement léger sur mobile |
| Style | Tailwind ; couleur principale `#f9565f` ; accents bleu (construction), terracotta (design), vert (terrains) | Cohérence de marque, une couleur par division |
| Icônes | Font Awesome | Choix de l'équipe |
| Hébergement | Firebase Hosting, projet `sidof3-d342a` | Pré-rendu statique, sans serveur |
| Base de données | Firestore pour les formulaires : messages, devis, demandes de voyage | Tout reste dans le projet Firebase existant ; lecture interdite depuis le navigateur |
| Contenu long | Fichiers de données TypeScript, français et anglais côte à côte | Plus simple qu'une base ; Firestore pourra venir pour les annonces |
| Cookies | Bandeau avec consentement, mesure chargée après acceptation | Exigé pour les visiteurs d'Europe (RGPD) |
| Environnements | Test sur `sidof3-d342a.web.app` en `noindex` ; domaine définitif sidof.net via une variable de configuration | On active l'indexation au lancement du domaine définitif |

Points techniques à traiter dès le départ :

- Les textes de fr.ts et en.ts sont dans le code, donc disponibles côté serveur : le HTML pré-rendu contient déjà le texte. TypeScript refuse de compiler si une clé manque dans l'une des deux langues.
- Le pré-rendu doit connaître chaque fiche (terrain, appartement, article) : la liste sera générée à partir des fichiers de données.
- Git : branche `v2`, déploiement via un canal d'aperçu Firebase, sans toucher au site actuel.

## Phases de travail

Le travail se fait en sept phases, chacune validée avant de passer à la suivante. Aucune date n'est fixée à ce stade.

| Phase | Contenu | Validation |
| --- | --- | --- |
| 0. Cadrage | Valider plan du site, architecture et choix techniques ; lister les contenus manquants ; mots-clés par page ; branche Git `v2` | Feuille de route approuvée par l'équipe. Fait : branche v2, projet Angular et Tailwind installés |
| 1. Fondations | modèles de données ; traductions fr.ts et en.ts, routage par langue ; thème Tailwind (couleurs, typographies) ; shell (en-tête, pied de page, WhatsApp, cookies) ; `SeoService` ; Firebase Hosting avec canal d'aperçu | Site vide navigable en FR et EN sur le canal d'aperçu |
| 2. Pages principales | Accueil, construction, terrains (liste et fiches), maisons à vendre (duplex d'Odza), maisons à louer, appartements meublés, design d'intérieur, matériaux, carreaux iraniens, assistance voyage, développement logiciel, à propos, contact | Chaque page relue sur mobile |
| 3. Contenu secondaire et SEO technique | Portfolio, FAQ, 3 à 5 premiers articles de blog, pages légales ; sitemap multilingue, robots.txt, données structurées ; optimisation des images et vidéos | Lighthouse supérieur à 90 en performance, SEO et accessibilité |
| 4. Qualité | Tests sur mobile ; vérification des liens, formulaires, traductions et accessibilité | Revue complète sur le canal d'aperçu, puis mise en production |
| 5. Plateformes Google | Domaine personnalisé, Search Console, Tag Manager, Analytics 4, Business Profile | Domaine vérifié, sitemap soumis, événements mesurés |
| 6. Après lancement | Articles de blog réguliers, vrais témoignages et avis Google, suivi mensuel dans Search Console | Ajustements des pages selon les requêtes et positions |

Le bandeau de cookies et le consentement sont prévus dès la phase 1, pas à la fin du projet.

## SEO et plateformes Google

Le référencement repose sur des pages précises par langue et par fiche, des balises écrites page par page et des outils Google branchés après la première phase.

**SEO technique**

- `SeoService` : titre, description, canonical, hreflang (fr, en, x-default), Open Graph et JSON-LD pour chaque page.
- `sitemap.xml` multilingue et `robots.txt`.
- Données structurées par type de page : LocalBusiness, RealEstateListing, GeneralContractor, FAQPage, BreadcrumbList.
- Images en WebP ou AVIF, chargement différé ; vidéos YouTube chargées au clic.
- Blog orienté diaspora, avec des articles publiés régulièrement.

**Plateformes Google (phase 5)**

| Outil | Usage |
| --- | --- |
| Domaine personnalisé | sidof.net, branché sur Firebase Hosting ; on change la variable d'adresse et on active l'indexation |
| Search Console | Vérification du domaine, soumission du sitemap, suivi de l'indexation |
| Tag Manager | Un seul conteneur installé sur le site |
| Analytics 4 (via Tag Manager) | Événements : clics WhatsApp, envois de formulaire, vues de fiches terrain, appels |
| Business Profile | Lier le site à la fiche ; catégories et description déjà prêtes |

Optionnel plus tard : Bing Webmaster Tools, pixel Meta pour la publicité Facebook et Instagram, Google Ads.

**Domaine et référencement local**

- Domaine définitif : `sidof.net`, à brancher sur Firebase Hosting en phase 5.
- Mot-clé et lieu dans l'URL : « yaounde » pour les biens situés à Yaoundé (terrains, maisons à vendre et à louer, appartements meublés à louer, matériaux, carreaux iraniens), « cameroun » pour les services qui couvrent tout le pays (construction, design d'intérieur, décoration en staff, assistance voyage).
- Titre et H1 portent le mot-clé et le lieu, par exemple « Terrains à vendre à Yaoundé | Sidof ».
- Fiches : slug = quartier (`nkoabang`), avec la surface en cas de doublon (`nkoabang-500m2`).
- Images : noms de fichiers et textes alternatifs avec quartier et ville.
- Données structurées : zone desservie (Yaoundé ou Cameroun) et mention « à vendre » ou « à louer ».
- Fiche Google Business : bureaux à Yaoundé, Nouvelle route Tam-Tam, zone de service Cameroun ; nom, adresse et téléphone identiques partout sur le site.
- Les noms de composants n'ont aucun effet sur Google : ils restent simples.

## Cookies et consentement

Tout outil de mesure ou de publicité reste éteint tant que le visiteur n'a pas accepté.

- Bandeau au premier accès avec trois catégories : nécessaires (toujours actifs), statistiques (Google Analytics) et marketing (pixels publicitaires, plus tard).
- Le bouton « Refuser » est aussi visible que « Accepter » (RGPD, visiteurs d'Europe).
- Consent Mode v2 : tout est refusé par défaut ; Analytics 4 via Tag Manager ne se charge qu'après acceptation.
- Lien « Gérer mes cookies » dans le pied de page pour changer d'avis à tout moment.
- Vidéos YouTube sur `youtube-nocookie.com`, chargées au clic : pas de cookie tiers et pages plus rapides.
- Une page « Politique de cookies » en français et en anglais liste les cookies réellement utilisés.

## Contenus et éléments à fournir

Plusieurs éléments de contenu restent à fournir avant la phase 2 ; aucun témoignage ni numéro légal ne sera inventé.

**Déjà reçu**

- Les 5 services d'origine et leurs textes, en français et en anglais.
- Les 6 terrains avec prix, superficies et localisations ; les 9 appartements et villas meublés ; le duplex d'Odza (290 000 000 FCFA, 2 unités).
- Les 4 chantiers de construction et les 4 sites de design d'intérieur (Odza, Bastos, Olembe, Simbock).
- Les projets logiciels FAST GAZ, GroupinG, KAP Expert Tontine Bank et MicroFin Manager.
- Couleur principale `#f9565f`.
- Contact : WhatsApp +237 696 44 46 53 ; e-mail `sidof190@gmail.com` ; bureaux à Yaoundé, Nouvelle route Tam-Tam ; domaine sidof.net.
- Réseaux : [Facebook](https://www.facebook.com/Sidof3/), [LinkedIn](https://www.linkedin.com/in/sidof-dountio), [Instagram](https://www.instagram.com/sidof_3), [YouTube](https://www.youtube.com/@sidof8065), [TikTok](https://www.tiktok.com/@sidof89), [GitHub](https://github.com/sidofdountio).

**À fournir**

- [ ] Logo en SVG
- [ ] Photos manquantes : terrains, duplex, maisons à louer, meublés, design d'intérieur, sable, carreaux iraniens
- [ ] Vraies vidéos YouTube et bonnes images (emplacements prévus dans les données, à renseigner)
- [ ] Vrais témoignages clients
- [ ] Informations légales : raison sociale, RCCM, adresse
- [ ] Texte « À propos » : histoire de Sidof et de l'équipe
- [ ] Assistance voyage : services exacts proposés (lettre d'invitation, accueil à l'aéroport, logement, billets, circuits, démarches)
- [ ] Maisons à louer à Yaoundé : liste, loyers, quartiers
- [ ] Matériaux (sable, carreaux iraniens) : prix affichés ou sur demande, références des carreaux, livraison et zones couvertes

## Points à trancher

Une décision est attendue avant ou pendant la phase 1.

- [ ] **Matériaux** : prix affichés ou sur demande ? Livraison à Yaoundé seulement ?

## Réserves légales à vérifier

Les règles applicables au Cameroun n'ont pas été vérifiées ici : un conseil local doit confirmer les autorisations avant publication.

- **RCCM** : les mentions légales indiquent « en cours d'immatriculation », sans numéro inventé. À mettre à jour dès l'obtention.
- **Terrains et immobilier** : la vente de terrains et l'immobilier peuvent exiger un statut particulier.
- **Assistance voyage** : les activités d'agence de voyage sont en général réglementées. À vérifier avant de publier la page, pour savoir ce qui peut être annoncé : conseil et accompagnement, ou réservation et vente de billets.
- **Construction et matériaux** : ces activités ont aussi des obligations d'enregistrement.
