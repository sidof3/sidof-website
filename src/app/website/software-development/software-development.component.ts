import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-software-development',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './software-development.component.html',
  styleUrl: './software-development.component.css'
})
export class SoftwareDevelopmentComponent {

  services = [
    { icon: '🌐', title: 'Web App Development', description: 'Custom web applications built with Spring Boot and Angular, tailored to your business needs.' },
    { icon: '📱', title: 'Mobile App Development', description: 'Native and cross-platform mobile apps, published to the Play Store and App Store.' },
    { icon: '🔗', title: 'API & Backend Development', description: 'Scalable REST APIs and microservices architecture built for performance and security.' },
    { icon: '🐳', title: 'DevOps & Deployment', description: 'Docker containerization, Linux server deployment, and production release pipelines.' },
    { icon: '🛠️', title: 'Maintenance & Support', description: 'Ongoing monitoring, bug fixes, and feature evolution after launch.' }
  ];

  techStack = [
    'Java', 'Spring Boot', 'Spring Security', 'OAuth2 / JWT',
    'Angular', 'PostgreSQL', 'Docker', 'Linux',
    'MTN Mobile Money', 'Orange Money', 'Stripe', 'PayPal'
  ];

  process = [
    { title: 'Discovery', description: 'Requirements gathering and technical specification with stakeholders.' },
    { title: 'Architecture', description: 'System design, database modeling, and technology planning.' },
    { title: 'Development', description: 'Agile/Scrum-based build of backend, frontend, and mobile components.' },
    { title: 'Deployment & Support', description: 'Docker-based production deployment with ongoing monitoring and evolution.' }
  ];

  projects = [
    {
      name: 'FAST GAZ',
      tagline: 'Home gas delivery mobile app',
      description: 'End-to-end mobile app for ordering and tracking home gas delivery, with integrated mobile payment. Owned from scoping through production operation.',
      tech: ['Spring Boot', 'Angular', 'Docker', 'Mobile Payment'],
      imageUrl: 'assets/projects/fastgaz.jpg',
      webLink: 'https://www.bis-srl.cloud/',
      playStoreLink: 'https://play.google.com/store/apps/details?id=cm.kapexpert.grouping'
    },
    {
      name: 'GroupinG',
      tagline: 'Multi-vendor e-commerce marketplace',
      description: 'Grouping-based order system with merchant dashboards, inventory management, and real-time order tracking across web and Android.',
      tech: ['Spring Boot', 'Angular', 'Android', 'MTN MoMo', 'Orange Money', 'Stripe'],
      imageUrl: 'assets/projects/grouping.jpg',
      webLink: 'https://kapexpert.cloud:3000/',
      playStoreLink: 'https://play.google.com/store/apps/details?id=cm.kapexpert.grouping'
    },
    {
      name: 'KAP Expert Tontine Bank',
      tagline: 'Digital community banking platform',
      description: 'Digital savings, loans, and repayment management platform for community banking, built with secure JWT authentication.',
      tech: ['Spring Boot', 'Angular', 'PostgreSQL', 'JWT'],
      imageUrl: 'assets/projects/tontine-bank.jpg',
      webLink: 'https://www.bis-srl.cloud/'
    },
    {
    name: 'MicroFin Manager',
    tagline: 'Secure, multi-branch core banking platform',
    description: 'A backend banking platform built for financial institutions, with an immutable transaction ledger, maker-checker approval controls, and role-based access across 9 staff roles — from tellers to auditors. Currently in active development.',
    tech: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Layered Architecture'],
    imageUrl: 'assets/projects/microfin-manager.jpg',
    status: 'In Development'
  }
  ];

  whyUs = [
    { title: 'End-to-End Ownership', description: 'From requirements to production support, one accountable team.' },
    { title: 'Agile Delivery', description: 'Scrum-based process with clear milestones and stakeholder coordination.' },
    { title: 'Production-Ready', description: 'Real apps live on Play Store, App Store, and in daily production use.' },
    { title: 'Secure by Design', description: 'OAuth2, JWT, RBAC, and enterprise-grade security built in from day one.' }
  ];
}