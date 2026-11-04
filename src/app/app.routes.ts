import type { Route, Routes } from '@angular/router';
import { LANGS, type Lang } from './core/i18n/lang';
import type { PageKey } from './core/i18n/translations';
import { ROUTE_PATHS } from './core/routing/route-paths';

/** Chaque page est chargée à la demande, seulement quand on la visite. */
const PAGES: Record<PageKey, () => Promise<unknown>> = {
  home: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  construction: () => import('./pages/construction/construction.component').then((m) => m.ConstructionComponent),
  land: () => import('./pages/land/land.component').then((m) => m.LandComponent),
  landDetail: () => import('./pages/land-detail/land-detail.component').then((m) => m.LandDetailComponent),
  houses: () => import('./pages/houses/houses.component').then((m) => m.HousesComponent),
  houseRentals: () => import('./pages/house-rentals/house-rentals.component').then((m) => m.HouseRentalsComponent),
  apartments: () => import('./pages/apartments/apartments.component').then((m) => m.ApartmentsComponent),
  apartmentDetail: () => import('./pages/apartment-detail/apartment-detail.component').then((m) => m.ApartmentDetailComponent),
  interior: () => import('./pages/interior-staff/interior-staff.component').then((m) => m.InteriorStaffComponent),
  materials: () => import('./pages/materials/materials.component').then((m) => m.MaterialsComponent),
  iranianTiles: () => import('./pages/iranian-tiles/iranian-tiles.component').then((m) => m.IranianTilesComponent),
  travel: () => import('./pages/travel/travel.component').then((m) => m.TravelComponent),
  software: () => import('./pages/web-and-apps/web-and-apps.component').then((m) => m.WebAndAppsComponent),
  portfolio: () => import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  about: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  blog: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent),
  blogPost: () => import('./pages/blog-post/blog-post.component').then((m) => m.BlogPostComponent),
  faq: () => import('./pages/faq/faq.component').then((m) => m.FaqComponent),
  contact: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  legal: () => import('./pages/legal/legal.component').then((m) => m.LegalComponent),
  privacy: () => import('./pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
  cookies: () => import('./pages/cookies/cookies.component').then((m) => m.CookiesComponent),
  notFound: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
};

/** Les routes d'une langue, avec les URLs traduites de route-paths.ts. */
function pagesFor(lang: Lang): Routes {
  return (Object.keys(PAGES) as PageKey[])
    .filter((page) => page !== 'notFound' && ROUTE_PATHS[page][lang] !== undefined)
    .map(
      (page): Route => ({
        path: ROUTE_PATHS[page][lang]!,
        pathMatch: 'full',
        loadComponent: PAGES[page] as Route['loadComponent'],
        data: { page }, // lu par SeoService et LanguageService
      }),
    );
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fr' },
  ...LANGS.map(
    (lang): Route => ({
      path: lang,
      loadComponent: () => import('./shared/shell/shell/shell.component').then((m) => m.ShellComponent),
      children: [
        ...pagesFor(lang),
        {
          path: '**',
          loadComponent: PAGES.notFound as Route['loadComponent'],
          data: { page: 'notFound' satisfies PageKey },
        },
      ],
    }),
  ),
  { path: '**', redirectTo: 'fr/page-introuvable' },
];