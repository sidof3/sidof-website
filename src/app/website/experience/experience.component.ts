import { Component } from '@angular/core';
import { Experience } from '../../model/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

 experiences: Experience[] = [
  {
    role: 'Software Development Project Manager',
    company: 'KAP EXPERT - BIS SARL',
    location: 'Yaoundé, Centre, Cameroon',
    period: 'Jun 2024 – Present',
    description: 'Building scalable web applications with Java/Spring Boot backends, PostgreSQL databases, paired with Angular & Bootstrap frontends. Deploy solutions on Linux servers using Git/GitHub for version control and project management.',
    skills: ['Java', 'Spring Boot', 'Angular', 'Bootstrap', 'PostgreSQL', 'Linux', 'Git', 'GitHub', 'Agile']
  },
  {
    role: 'Full Stack Java Software Developer',
    company: 'Self-employed',
    location: 'Yaoundé, Centre, Cameroon',
    period: 'Mar 2024 – Feb 2025',
    description: 'Developed SEKOU School Management System: student/teacher management, assessments, timetables, and reporting. Collaborated with product manager to create a marketable solution.',
    skills: ['Java', 'Spring Boot', 'Angular', 'Agile', 'CI/CD']
  },
  {
    role: 'Java Software Developer',
    company: 'Self-employed',
    location: 'Yaoundé VI, Centre, Cameroon',
    period: 'Apr 2024 – May 2024',
    description: 'Built secure Inventory Management System with real-time tracking and sales analytics. Implemented RESTful APIs, CI/CD workflows, and cloud deployment with Nginx.',
    skills: ['Java', 'REST API', 'Agile', 'Docker', 'CI/CD']
  },
  {
    role: 'Java Software Developer',
    company: 'Universal Merche',
    location: 'Yaoundé VI, Centre, Cameroon',
    period: 'Nov 2023 – Jan 2024',
    description: 'Developed a secure inventory tracking application with real-time sales analytics, user authentication, and reporting tools. Resolved deployment challenges and implemented client-specific solutions.',
    skills: ['Java', 'Full Stack', 'REST API', 'Agile', 'Cloud Deployment']
  },
  {
    role: 'Freelance Developer – Bank App',
    company: 'Freelance',
    location: 'Centre, Cameroon',
    period: 'Jan 2025 – Present',
    description: 'Developing a banking system with features like user access & control, customer registration, account services, transaction processing, and comprehensive reporting.',
    skills: ['Java', 'Spring Boot', 'Angular', 'Financial App', 'Agile']
  }
];
odd: any;

constructor() { }

}
