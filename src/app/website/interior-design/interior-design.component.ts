import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-interior-design',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './interior-design.component.html',
  styleUrl: './interior-design.component.css'
})
export class InteriorDesignComponent {

  introVideo = {
    title: 'Discover Our Interior Design Approach',
    description: 'A quick look at how we design, source, and style spaces — for clients in Cameroon and abroad.',
    youtubeId: 'heNX37Jx3tQ' // replace with your real YouTube video ID
  };

  videoEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.videoEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.introVideo.youtubeId}`
    );
  }

  whyUs = [
    { icon: 'fa-solid fa-palette', title: 'Tailored Design', description: 'Every space designed around your taste, needs, and budget.' },
    { icon: 'fa-solid fa-couch', title: 'Quality Sourcing', description: 'Furniture and materials sourced for durability and style.' },
    { icon: 'fa-solid fa-house-flag', title: 'Staging Expertise', description: 'Spaces styled to sell, rent, or simply feel move-in ready.' },
    { icon: 'fa-solid fa-globe', title: 'Remote-Friendly', description: 'Full design and styling coordinated even if you live abroad.' }
  ];

  services = [
    { icon: 'fa-solid fa-couch', title: 'Residential Interior Design', description: 'Full design and styling for homes, from concept to final touches.' },
    { icon: 'fa-solid fa-building', title: 'Commercial & Office Design', description: 'Functional, professional interiors for offices and business spaces.' },
    { icon: 'fa-solid fa-house-flag', title: 'Home Staging', description: 'Styling properties for sale or rental to attract buyers and tenants faster.' },
    { icon: 'fa-solid fa-lamp', title: 'Furniture Sourcing & Styling', description: 'Curated furniture and decor sourcing, delivered and styled on-site.' },
    { icon: 'fa-solid fa-ruler-combined', title: 'Space Planning & Renovation', description: 'Smart space layouts and renovation guidance to maximize every room.' }
  ];

  process = [
    { title: 'Consultation', description: 'We discuss your vision, needs, and budget.' },
    { title: 'Concept & Mood Board', description: 'A design direction and style proposal for your approval.' },
    { title: 'Sourcing', description: 'Furniture and materials sourced and prepared.' },
    { title: 'Styling & Handover', description: 'Final installation and styling, ready to enjoy.' }
  ];

  serviceAreas = [
    'Yaoundé', 'Olembe', 'Odza', 'Simbock', 'Nkoabang',
    'Emana', 'Soa', 'North Cameroon', 'Douala'
  ];

  clientLocations = [
    { country: 'Belgium', flag: '🇧🇪' },
    { country: 'United States', flag: '🇺🇸' },
    { country: 'France', flag: '🇫🇷' },
    { country: 'Cameroon', flag: '🇨🇲' }
  ];

  projects = [

  {
    location: 'Odza, Yaoundé',
    rooms: [
      { label: 'Living Room', imageUrl: '/interior-design/projects/odza/salon.jpg' },
      { label: 'Living Room', imageUrl: '/interior-design/projects/odza/salon-1.jpg' },
      { label: 'Kitchen', imageUrl: '/interior-design/projects/odza/cuisine.jpg' },
      { label: 'Master Bedroom', imageUrl: '/interior-design/projects/odza/chambre-parent.jpg' },
      { label: 'Hallway', imageUrl: '/interior-design/projects/odza/couloir.jpg' },
      { label: 'Ceiling', imageUrl: '/interior-design/projects/odza/plafond.jpg' },
      { label: 'TV Stand', imageUrl: '/interior-design/projects/odza/tv-stand.jpg' },
    ]
  },
  {
    location: 'Bastos, Yaoundé',
    rooms: [
      { label: 'TV Stand', imageUrl: '/interior-design/projects/bastos/tv-stand.jpg' },
      { label: 'Ceiling', imageUrl: '/interior-design/projects/bastos/plafond.jpg' },
      { label: 'Ceiling', imageUrl: '/interior-design/projects/bastos/plafond-1.jpg' },
      { label: 'Ceiling', imageUrl: '/interior-design/projects/bastos/plafond-2.jpg' },
      { label: 'Hallway', imageUrl: '/interior-design/projects/bastos/couloir.jpg' },
      { label: 'Exterior View', imageUrl: '/interior-design/projects/bastos/exterieur.jpg' },
    ]
  },

  {
    location: 'Olembe, Yaoundé',
    rooms: [
      { label: 'Living Room', imageUrl: '/interior-design/projects/olembe/salon.jpg' },
      { label: 'Office', imageUrl: '/interior-design/projects/olembe/salon-2.jpg' },
      { label: 'TV Stand', imageUrl: '/interior-design/projects/olembe/tv-stand.jpg' },
      { label: 'Ceiling', imageUrl: '/interior-design/projects/olembe/plafond.jpg' },
      { label: 'Hallway', imageUrl: '/interior-design/projects/olembe/couloir.jpg' },
      { label: 'Office', imageUrl: '/interior-design/projects/olembe/bureau.jpg' },
      { label: 'Ceiling', imageUrl: '/interior-design/projects/olembe/plafond-1.jpg' }
    ]
  },

  {
    location: 'Simbock, Yaoundé',
    rooms: [
      { label: 'Living Room', imageUrl: '/interior-design/projects/simbock/salon.jpg' },
      { label: 'TV Stand', imageUrl: '/interior-design/projects/simbock/tv-stand.jpg' },
      { label: 'Ceiling', imageUrl: '/interior-design/projects/simbock/plafond.jpg' },
      { label: 'Master Bedroom', imageUrl: '/interior-design/projects/simbock/chambre-parent.jpg' },
    ]
  },

];

  activeImageIndex: number[] = this.projects.map(() => 0);

  setActiveImage(projectIndex: number, imageIndex: number): void {
    this.activeImageIndex[projectIndex] = imageIndex;
  }

  testimonial = {
    name: '',
    location: '',
    message: '',
    avatarUrl: ''
  };
}