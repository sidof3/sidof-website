import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { ServiceComponent } from './website/services/service.component';
import { PageNotFoundsComponent } from './page-not-founds/page-not-founds.component';
import { PortfolioComponent } from './website/portfolio/portfolio.component';
import { ContactComponent } from './website/contact/contact.component';
import { LandComponent } from './website/land/land.component';
import { FurnishedComponent } from './website/furnished/furnished.component';
import { ConstructionComponent } from './website/construction/construction.component';
import { InteriorDesignComponent } from './website/interior-design/interior-design.component';
import { SoftwareDevelopmentComponent } from './website/software-development/software-development.component';
import { MicrofinDetailComponent } from './website/portfolio/microfin-detail/microfin-detail.component';
import { HouseSaleComponent } from './website/house-sale/house-sale.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'services', component: ServiceComponent, title: 'Services' },// all services overview
  { path: 'lands', component: LandComponent, title: 'Lands' },
  { path: 'furnished', component: FurnishedComponent, title: 'Furnished' },
  {path: 'construction',component: ConstructionComponent, title: 'Construction'},
  {path:'interior-design',component:InteriorDesignComponent,title:'Interior Design'},
  {path: 'software-service', component: SoftwareDevelopmentComponent, title: 'Software Development' },




{ path: 'house-sale', component: HouseSaleComponent, title: 'Duplex For Sale — Odza Cité de la Paix | Sidof' },

  // portfolio details  
  {
    component: MicrofinDetailComponent,
    path: 'portfolio/microfin-manager',
    title: 'MicroFin Manager - Portfolio Detail'
  }
  ,
  { path: '**', component: PageNotFoundsComponent, title: 'Page not found' }
];
