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
      title: 'E-Commerce Platform',
      description:
        'Full-stack web app built with Spring Boot, Angular 17, JWT security, and Orange Money integration.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Bootstrap 5'],
      category: 'Full Stack',
      image: '/projects/ecommerce-1.png',
      githubUrl: 'https://github.com/yourusername/ecommerce-app',
      demoUrl: 'https://your-demo-link.com'
    },
    {
      title: 'Security API',
      description:
        'Spring Security 6 with JWT, refresh tokens, and role-based access control.',
      technologies: ['Spring Boot', 'Java', 'JWT', 'Docker'],
      category: 'Backend',
      image: 'assets/img/projects/security.png',
      githubUrl: 'https://github.com/yourusername/security-demo'
    },
    {
      title: 'Angular Dashboard',
      description:
        'Responsive admin dashboard using Angular 17 and Angular Material.',
      technologies: ['Angular 17', 'Material', 'REST API'],
      category: 'Frontend',
      image: 'assets/img/projects/dashboard.png',
      githubUrl: 'https://github.com/yourusername/dashboard'
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
