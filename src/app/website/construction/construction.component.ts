import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-construction',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './construction.component.html',
  styleUrl: './construction.component.css'
})
export class ConstructionComponent {

  presentationVideo = {
    title: 'See How Sidof Builds Your Project',
    description: 'A quick walkthrough of our process, site supervision, and remote tracking system — so you know exactly what to expect.',
    youtubeId: 'dQw4w9WgXcQ' // replace with your real YouTube video ID
  };

  videoEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.videoEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.presentationVideo.youtubeId}`
    );
  }

  whyUs = [
    { icon: 'fa-solid fa-video', title: 'Remote Tracking', description: 'Follow your site progress from abroad via camera access.' },
    { icon: 'fa-solid fa-file-signature', title: 'Written Agreement', description: 'Clear quote, defined budget, and a formal commitment.' },
    { icon: 'fa-solid fa-magnifying-glass', title: 'Rigorous Control', description: 'Every stage and material checked before moving forward.' },
    { icon: 'fa-solid fa-phone', title: 'Regular Updates', description: 'Ongoing reports and transparent communication throughout.' }
  ];

  services = [
    { icon: 'fa-solid fa-house', title: 'Residential Construction', description: 'Homes and residences built to your specifications, from foundation to finishing.' },
    { icon: 'fa-solid fa-building', title: 'Commercial Construction', description: 'Buildings for business use, designed and built for durability and function.' },
    { icon: 'fa-solid fa-screwdriver-wrench', title: 'Renovation & Remodeling', description: 'Upgrading and transforming existing structures with quality workmanship.' },
    { icon: 'fa-solid fa-road', title: 'Land Development & Site Prep', description: 'Geotechnical testing and site preparation before construction begins.' },
    { icon: 'fa-solid fa-clipboard-check', title: 'Project Management & Supervision', description: 'Full oversight of your build — coordination, quality control, and timeline management.' }
  ];

  process = [
    { title: 'Contact', description: 'Reach out and share your project idea.' },
    { title: 'Study & Quote', description: 'We assess your project and provide a clear quote.' },
    { title: 'Agreement', description: 'A written commitment defines scope, budget, and timeline.' },
    { title: 'Build & Track', description: 'Construction begins, with regular updates and remote monitoring.' }
  ];

  projects = [
    {
      name: 'Guest House G+5',
      location: 'Emana, Yaoundé',
      size: '473 m²',
      status: 'Ongoing',
      description: 'A 5-storey guest house under active construction, built to accommodate multiple independent units with modern finishing.',
      images: [
        'construction/projects/emana-guesthouse-1.jpg',
        'construction/projects/emana-guesthouse-2.jpg',
        'construction/projects/emana-guesthouse-3.jpg',
        'construction/projects/emana-guesthouse-4.jpg',
        'construction/projects/emana-guesthouse-5.jpg',
        'construction/projects/emana-guesthouse-6.jpg'



      ]
    },
    {
      name: 'Residence G+1',
      location: 'Bafoussam',
      size: '143.14 m²',
      status: 'Completed',
      description: 'A single-family residence delivered from foundation to finishing, designed for comfort and durability.',
      images: [
        'construction/projects/bafoussam-residence-1.jpg',
        'construction/projects/bafoussam-residence-2.jpg',
        'construction/projects/bafoussam-residence-3.jpg',
        'construction/projects/bafoussam-residence-4.jpg',
        'construction/projects/bafoussam-residence-5.jpg',
        'construction/projects/bafoussam-residence-6.jpg',
      ]
    },
    {
      name: 'Residence G+2',
      location: 'Mbandoumou, Yaoundé',
      size: '—',
      status: 'Completed',
      description: 'A two-storey residence built with full project supervision from Sidof, coordinated remotely for the client.',
      images: [
        'construction/projects/mbandjock-residence-1.jpg',
        'construction/projects/mbandjock-residence-2.jpg',
        'construction/projects/mbandjock-residence-3.jpg',
        'construction/projects/mbandjock-residence-4.jpg',
        'construction/projects/mbandjock-residence-5.jpg',
        'construction/projects/mbandjock-residence-6.jpg',
        'construction/projects/mbandjock-residence-7.jpg',
        'construction/projects/mbandjock-residence-8.jpg',
        'construction/projects/mbandjock-residence-9.jpg',

      ]
    },
    {
      name: 'Residence G+1',
      location: 'Simbock, Yaoundé',
      size: '—',
      status: 'Completed',
      description: 'A single-storey residence completed with transparent progress tracking throughout construction.',
      images: [
        'construction/projects/simbock-residence-1.jpg',
        'construction/projects/simbock-residence-2.jpg',
        'construction/projects/simbock-residence-3.jpg',
        'construction/projects/simbock-residence-4.jpg',
        'construction/projects/simbock-residence-5.jpg',
        'construction/projects/simbock-residence-6.jpg',
        'construction/projects/simbock-residence-7.jpg',
        'construction/projects/simbock-residence-8.jpg'
      ]
    }
  ];

  activeImageIndex: number[] = this.projects.map(() => 0);


  clientLocations = [
    { country: 'Belgium', flag: '🇧🇪' },
    { country: 'United Kingdom', flag: '🇬🇧' },
    { country: 'Germany', flag: '🇩🇪' },
    { country: 'United States', flag: '🇺🇸' },
    { country: 'France', flag: '🇫🇷' },
    { country: 'Cameroon', flag: '🇨🇲' }
  ];

  avoidPoints = [
    {
      icon: 'fa-solid fa-triangle-exclamation',
      title: 'Unclear Costs',
      description: 'Budgets that quietly grow without explanation, with no clear record of how funds are spent.'
    },
    {
      icon: 'fa-solid fa-hourglass-half',
      title: 'Unpredictable Delays',
      description: 'Work that stalls for weeks or months with no formal timeline holding anyone accountable.'
    },
    {
      icon: 'fa-solid fa-eye-slash',
      title: 'No Real Oversight',
      description: 'Construction managed informally, with no professional supervision or quality control at each stage.'
    },
    {
      icon: 'fa-solid fa-file-circle-xmark',
      title: 'No Written Commitment',
      description: 'Verbal agreements with no formal contract to protect your investment or define responsibilities.'
    }
  ];

  sidofAdvantages = [
    {
      icon: 'fa-solid fa-file-contract',
      title: 'Fixed, Written Pricing',
      description: 'The price we agree on is the price you pay — backed by a formal written commitment, with no hidden increases.'
    },
    {
      icon: 'fa-solid fa-video',
      title: 'Live Site Monitoring',
      description: 'Watch your construction site 24/7 from your phone or computer, anywhere in the world, via on-site cameras and Starlink internet.'
    },
    {
      icon: 'fa-solid fa-user-shield',
      title: 'Professional Supervision',
      description: 'Every stage of your project is managed and controlled by experienced professionals, not left to chance.'
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Full Transparency',
      description: 'Regular reports, clear communication, and complete visibility into how your project and budget are progressing.'
    }
  ];


  diasporaTestimonial = {
  name: '', // e.g. "Marie K."
  location: 'Brussels, Belgium', // e.g. "Brussels, Belgium"
  message: '', // their actual quote
  avatarUrl: '' // photo path, or leave blank for placeholder
};

  setActiveImage(projectIndex: number, imageIndex: number): void {
    this.activeImageIndex[projectIndex] = imageIndex;
  }
}