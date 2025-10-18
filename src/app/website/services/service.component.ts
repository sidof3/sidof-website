import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";


interface Service {
  icon: string;
  title: string;
  description: string;
  category: 'technical' | 'business';
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})


export class ServiceComponent {
  services: Service[] = [
    // 🧑‍💻 Technical Services
    {
      icon: 'bi bi-code-slash',
      title: 'Full Stack Web Development',
      description:
        'Custom websites and web applications using Angular, Spring Boot, Docker, and PostgreSQL. Modern, secure, and optimized solutions.',
      category: 'technical'
    },
    {
      icon: 'bi bi-cup-hot',
      title: 'Java & Spring Boot',
      description:
        'Backend APIs, security, and scalable enterprise applications with RESTful architecture.',
      category: 'technical'
    },
    {
      icon: 'bi bi-window',
      title: 'Angular Frontend',
      description:
        'Modern, responsive single-page applications using Angular and Bootstrap 5.',
      category: 'technical'
    },
    {
      icon: 'bi bi-hdd-network',
      title: 'Database Management',
      description:
        'Design, optimization, and integration of PostgreSQL and MySQL databases.',
      category: 'technical'
    },
    {
      icon: 'bi bi-box-seam',
      title: 'Docker & CI/CD',
      description:
        'Containerization, automation, and continuous deployment workflows.',
      category: 'technical'
    },
    {
      icon: 'bi bi-terminal',
      title: 'Linux Administration',
      description:
        'Server setup, SSH management, deployment scripts, and automation tools.',
      category: 'technical'
    },

    // 💼 Business Services
    {
      icon: 'bi bi-bricks',
      title: 'Interior Design (BETO)',
      description:
        'Transform your space with elegant decorative plaster (staff). From ceilings to walls, we create unique, luxurious interiors.',
      category: 'business'
    },
    {
      icon: 'bi bi-house-door',
      title: 'Furnished Apartments',
      description:
        'Find or rent beautiful furnished apartments in Yaoundé and nearby cities. Comfortable, affordable, and ready to live in.',
      category: 'business'
    },
    {
      icon: 'bi bi-geo-alt',
      title: 'Land for Sale',
      description:
        'Buy verified land in safe, developing areas around Yaoundé. Legal documents and assistance included.',
      category: 'business'
    },
    {
      icon: 'bi bi-bullseye',
      title: 'Facebook & Google Ads',
      description:
        'Boost your business visibility with effective social media and search ads. Targeted strategy, real results.',
      category: 'business'
    },
    {
      icon: 'bi bi-airplane',
      title: 'Travel & Visa Assistance',
      description:
        'Professional support for visa applications and travel planning to Canada, USA, or Europe.',
      category: 'business'
    }
  ];

  categories = [
    { key: 'technical', label: 'Technical Services' },
    { key: 'business', label: 'Business Services' }
  ] as const;

}
