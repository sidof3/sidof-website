import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { ServiceComponent } from './website/services/service.component';
import { PageNotFoundsComponent } from './page-not-founds/page-not-founds.component';
import { PortfolioComponent } from './website/portfolio/portfolio.component';
import { ContactComponent } from './website/contact/contact.component';
import { LandComponent } from './website/land/land.component';

export const routes: Routes = [

      {path:"",redirectTo:'/home',pathMatch:"full"},
      { path: 'home', component: HomeComponent,title:'home' },
      { path: 'about', component: AboutComponent ,title:'About'},
      { path: 'portfolio', component: PortfolioComponent, title:'Portfolio' },
      { path: 'contact', component: ContactComponent,title:'Contact'},
      { path: 'services', component: ServiceComponent ,title:'Sercies'},
      { path: 'lands', component: LandComponent ,title:'Lands'},
      { path:'**',component: PageNotFoundsComponent,title:'Page not found'}

];
