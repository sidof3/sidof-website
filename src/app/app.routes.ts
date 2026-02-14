import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { ServiceComponent } from './website/services/service.component';
import { PageNotFoundsComponent } from './page-not-founds/page-not-founds.component';
import { PortfolioComponent } from './website/portfolio/portfolio.component';
import { ContactComponent } from './website/contact/contact.component';
import { LandComponent } from './website/land/land.component';
import { FurnishedComponent } from './website/furnished/furnished.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'services', component: ServiceComponent, title: 'Services' },
  { path: 'lands', component: LandComponent, title: 'Lands' },
  { path: 'furnished', component: FurnishedComponent, title: 'Furnished' },
  { path: '**', component: PageNotFoundsComponent, title: 'Page not found' }
];
