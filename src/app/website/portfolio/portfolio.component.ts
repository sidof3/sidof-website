import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  profile = {
    name: 'DOUNTIO SEEDOPH',
    title: 'Full Stack Java Developer & Technical Project Lead',
    email: 'sidofdountio406@gmail.com',
    phone: '+237 696 444 653',
    location: 'Simbock, Yaoundé, Cameroon',
    github: 'https://github.com/seedoph',
    linkedin: 'https://linkedin.com/in/seedoph',
    summary: "Full Stack Java Developer with 4+ years of experience designing, building, and operating scalable web and mobile applications (Java, Spring Boot, Angular, Docker, Microservices). Proven track record leading projects end-to-end — requirements, architecture, dev, testing, deployment, and maintenance — as sole technical owner on live production systems.",
    openTo: 'Open to Full Stack Java, Backend Java, or Tech Lead / Technical Project Manager roles. Available for international relocation and remote work.'
  };

  experiences = [
    {
      role: 'Software Development Project Lead & Full Stack Developer',
      company: 'Business Intelligence Solution',
      period: 'June 2024 – Present',
      icon: 'fa-solid fa-briefcase',
      highlights: [
        'End-to-end management of software and mobile projects using Agile/Scrum: requirements gathering, specification, architecture design, development, testing, and deployment.',
        'Engineered scalable backend REST APIs and microservices using Java, Spring Boot, and PostgreSQL.',
        'Implemented enterprise-level security: Spring Security, OAuth2, JWT, and Role-Based Access Control (RBAC).',
        'Deployed and maintained Docker containers on Linux servers with automated deployment pipelines.',
        'Integrated local and global payment gateways: MTN Mobile Money, Orange Money, Stripe, and PayPal.',
        'Led cross-functional teams (Dev, QA, Ops) and coordinated production release schedules.'
      ]
    }
  ];

  detailedProjects = [
    {
      id: 'microfin-manager',
      name: 'MicroFin Manager',
      role: 'Lead Architect & Creator',
      company: 'Personal Project / FinTech R&D',
      period: 'In Active Development',
      badge: 'Open Source / In Dev',
      badgeClass: 'bg-warning text-dark',
      icon: 'fa-solid fa-building-columns',
      images: [
        'assets/projects/microfin-dashboard.jpg',
        'assets/projects/microfin-roles.jpg',
        'assets/projects/microfin-ledger.jpg'
      ],
      description: 'A multi-branch core banking platform built to master domain-driven financial architecture and modern Angular features.',
      highlightsList: [
        'Built with Angular Signals for ultra-performant reactive state management in the UI.',
        'Powered by Java 21 & Spring Boot 3 with layered architecture and strict audit-ready immutability.',
        'Enforces Maker-Checker approval workflows across 9 distinct staff roles (Tellers to Auditors).'
      ],
      githubLink: 'https://github.com/seedoph/microfin-manager',
      isPublicRepo: true
    },
    {
      id: 'fast-gaz',
      name: 'FAST GAZ',
      role: 'Technical Lead & Project Manager (End-to-End)',
      company: 'Business Intelligence Solution',
      period: 'Sept 2025',
      badge: 'Live on App Stores',
      badgeClass: 'bg-success',
      icon: 'fa-solid fa-fire-flame-curved',
      images: [
        '/software/fastgaz-home.jpg',
        'assets/projects/fastgaz-tracking.jpg',
        'assets/projects/fastgaz-checkout.jpg'
      ],
      description: 'On-demand home gas delivery mobile application owned end-to-end from initial scoping through live operation.',
      highlightsList: [
        'Gathered requirements and drafted technical specs with commercial stakeholders.',
        'Designed complete system architecture (Spring Boot backend, database, REST APIs, mobile UI).',
        'Built real-time order tracking and native mobile wallet payment processing.',
        'Containerized with Docker, deployed to Linux servers, and published to Play Store & App Store.'
      ],
      playStoreLink: 'https://play.google.com/store/apps/details?id=cm.kapexpert.grouping',
      isPublicRepo: false
    },
    {
      id: 'grouping',
      name: 'GroupinG',
      role: 'Technical Lead & Project Manager (End-to-End)',
      company: 'Business Intelligence Solution',
      period: '2024 - Present',
      badge: 'In Production',
      badgeClass: 'bg-info text-dark',
      icon: 'fa-solid fa-store',
      images: [
        '/software/grouping-marketplace.jpg',
        '/software/grouping-merchant.jpg',
        'assets/projects/grouping-mobile.jpg'
      ],
      description: 'Multi-vendor e-commerce marketplace featuring group-buying logic and real-time order tracking.',
      highlightsList: [
        'Designed group-ordering architecture, merchant dashboards, and stock control systems.',
        'Developed Spring Boot / REST API backend, Angular web app, and companion Android app.',
        'Integrated multi-payment rails (MTN MoMo, Orange Money, Stripe).',
        'Managed Linux server infrastructure and Docker deployments.'
      ],
      webLink: 'https://kapexpert.cloud:3000/',
      playStoreLink: 'https://play.google.com/store/apps/details?id=cm.kapexpert.grouping',
      isPublicRepo: false
    },
    {
      id: 'tontine-bank',
      name: 'KAP Expert Tontine Bank',
      role: 'Technical Lead & Project Manager',
      company: 'Business Intelligence Solution',
      period: 'In Progress',
      badge: 'In Production Dev',
      badgeClass: 'bg-primary',
      icon: 'fa-solid fa-piggy-bank',
      images: [
        '/software/tontine-loans.jpg' ,
        '/software/tontine-overview.jpg'
      ],
      description: 'Digital community banking platform handling savings, loan management, and scheduled repayments.',
      highlightsList: [
        'Architected core accounting modules using Spring Boot, Angular, and PostgreSQL.',
        'Implemented JWT authentication with strict role-based authorization for compliance.',
        'Supervised QA and coordinated closely with business stakeholders.'
      ],
      webLink: 'https://www.bis-srl.cloud/',
      isPublicRepo: false
    }
  ];

  skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: 'fa-solid fa-code',
      skills: ['Java 21', 'Spring Boot 3', 'Angular (Signals)', 'TypeScript', 'Ionic', 'RxJS']
    },
    {
      title: 'Architecture & APIs',
      icon: 'fa-solid fa-diagram-project',
      skills: ['REST APIs', 'Microservices', 'OAuth2', 'JWT', 'API Gateway', 'Eureka', 'Load Balancing']
    },
    {
      title: 'DevOps & Infrastructure',
      icon: 'fa-solid fa-server',
      skills: ['Docker', 'Linux Administration', 'CI/CD Pipelines', 'Git', 'Maven']
    },
    {
      title: 'Databases & Messaging',
      icon: 'fa-solid fa-database',
      skills: ['PostgreSQL', 'MySQL', 'Kafka', 'RabbitMQ']
    },
    {
      title: 'Payment Integrations',
      icon: 'fa-solid fa-credit-card',
      skills: ['MTN Mobile Money', 'Orange Money', 'Stripe', 'PayPal']
    },
    {
      title: 'Project Leadership',
      icon: 'fa-solid fa-list-check',
      skills: ['Agile / Scrum', 'Technical Specs', 'System Architecture', 'Business Analysis', 'Team Mentorship']
    }
  ];

  education = [
    {
      degree: 'Professional Bachelor\'s Degree in Software Engineering',
      school: 'IUSTE, Yaoundé, Cameroon',
      period: 'Nov 2021 — Aug 2022',
      icon: 'fa-solid fa-graduation-cap'
    },
    {
      degree: 'Information Systems Management',
      school: 'Hintel Higher Institute (ISH), Cameroon',
      period: 'Oct 2020 — Jun 2021',
      icon: 'fa-solid fa-university'
    }
  ];

  languages = [
    { name: 'French', level: 'Native Speaker', icon: 'fa-solid fa-language' },
    { name: 'English', level: 'Intermediate / Working Proficiency', icon: 'fa-solid fa-language' }
  ];
}