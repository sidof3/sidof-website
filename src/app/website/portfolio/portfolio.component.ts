import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
   animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class PortfolioComponent {

 activeCategory = 'All';

  categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  projects = [


    {
      title: 'School App',
      description:
        'Full-stack web app built with Spring Boot, Angular 16, JWT security',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Bootstrap 5'],
      category: 'Full Stack',
      image: '/projects/school_1.png',
      githubUrl: 'https://github.com/sidofdountio/sekou-api',
      demoUrl: 'https://youtu.be/2jYycKMFjy8'
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack web app built with Spring Boot, Angular 17, JWT security, and Orange Money integration.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Bootstrap 5'],
      category: 'Full Stack',
      image: '/projects/ecommerce-1.png',
      githubUrl: 'https://github.com/yourusername/ecommerce-app',
      demoUrl: 'https://web.facebook.com/share/r/1GrZ7bJRpr/'
    },
    {
      title: 'Security API',
      description:
        'Spring Security 6 with JWT, refresh tokens, and role-based access control.',
      technologies: ['Spring Boot', 'Java', 'JWT', 'Docker'],
      category: 'Backend',
      image: '/projects/security.png',
      githubUrl: 'https://github.com/sidof3/fatApi',
       demoUrl: 'https://'
    },
    {
      title: 'Angular Dashboard',
      description:
        'Responsive admin dashboard using Angular 17 and Angular Material.',
      technologies: ['Angular 17', 'Material', 'REST API'],
      category: 'Frontend',
      image: '/projects/dashboard.png',
      githubUrl: 'https://github.com/martialdongmo/fastgaz-frontend'
    }
  ];

  get filteredProjects() {
    return this.activeCategory === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === this.activeCategory);
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }

}
