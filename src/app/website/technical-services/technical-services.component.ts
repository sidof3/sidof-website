import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-technical-services',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './technical-services.component.html',
  styleUrl: './technical-services.component.css'
})
export class TechnicalServicesComponent {

  techSkills = [
    {
      name: 'Java',
      icon: 'fab fa-java fa-3x text-pink',
      description: 'Robust and secure backend development for scalable enterprise applications.'
    },
    {
      name: 'Spring Boot',
      icon: 'fas fa-leaf fa-3x text-pink',
      description: 'Building RESTful APIs and microservices using Spring Security and JPA.'
    },
    {
      name: 'Angular',
      icon: 'fab fa-angular fa-3x text-pink',
      description: 'Dynamic, component-based UI development with modern Angular 17.'
    },
    {
      name: 'Bootstrap',
      icon: 'fab fa-bootstrap fa-3x text-pink',
      description: 'Responsive, mobile-first designs with elegant Bootstrap 5 styling.'
    },
    {
      name: 'Docker',
      icon: 'fab fa-docker fa-3x text-pink',
      description: 'Containerization and deployment consistency for modern web apps.'
    },
    {
      name: 'Linux & CI/CD',
      icon: 'fas fa-terminal fa-3x text-pink',
      description: 'Automation, continuous integration and server management using Linux systems.'
    },
    {
      name: 'PostgreSQL',
      icon: 'fas fa-database fa-3x text-pink',
      description: 'High-performance relational database design and optimization.'
    },
    {
      name: 'MySQL',
      icon: 'fas fa-server fa-3x text-pink',
      description: 'Database modeling and data persistence for web applications.'
    },
    {
      name: 'Kubernetes (Basic)',
      icon: 'fas fa-network-wired fa-3x text-pink',
      description: 'Understanding of deployment orchestration and microservice scaling.'
    }
  ];

}
