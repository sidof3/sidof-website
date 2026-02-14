import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { TechnicalServicesComponent } from "../technical-services/technical-services.component";
import { FooterComponent } from "../footer/footer.component";
import { ExperienceComponent } from "../experience/experience.component";
import { Testimonial } from '../../model/testimonial';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink, TechnicalServicesComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  testimonials: Testimonial[] = [
    {
      name: 'Alice Johnson',
      role: 'CEO, TechCorp',
      message: 'Sidof is an amazing developer! His work on our web platform was flawless and delivered on time.',
      avatarUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'

    },
    
  ];

   partners = [
    { name: 'StartupX', logoUrl: 'assets/partners/startupx.png' },
    { name: 'Universal Merche', logoUrl: 'assets/partners/universal.png' },
    { name: 'KAP Expert', logoUrl: 'logo-bis.jpeg' }
  ];
    constructor(private sanitizer: DomSanitizer) {}






}

