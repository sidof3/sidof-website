import { Component, OnInit, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Testimonial } from '../../model/testimonial';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  services = [
    {
      icon: 'fa-solid fa-house-chimney',
      title: 'Construction',
      description: 'Home building and construction, managed transparently for clients in Cameroon and abroad.',
      link: '/construction'
    },
    {
      icon: 'fa-solid fa-map-location-dot',
      title: 'Real Estate & Land',
      description: 'Titled land for sale in Yaoundé and surrounding areas, ready for investment.',
      link: '/lands'
    },
    {
      icon: 'fa-solid fa-couch',
      title: 'Interior Design',
      description: 'Thoughtful interior design and styling for homes and commercial spaces.',
      link: '/interior-design'
    },
    {
      icon: 'fa-solid fa-bed',
      title: 'Furnished Apartments',
      description: 'Fully furnished apartments and villas, ready for short or long-term stays.',
      link: '/furnished'
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Software Development',
      description: 'Custom web and mobile applications built with Java, Spring Boot, and Angular.',
      link: '/software-development'
    }
  ];

  stats = [
    { value: '5+', label: 'Service Lines' },
    { value: '15+', label: 'Projects Delivered' },
    { value: '4', label: 'Continents Served' },
    { value: 'Yaoundé', label: 'Based & Growing' }
  ];

  portfolioPreview = [
    { title: 'Software Projects', imageUrl: 'software/software.jpg' },
    { title: 'Construction Projects', imageUrl: '/construction/construction.jpg' },
    { title: 'Interior Design Projects', imageUrl: 'interior-design/hero-interior.jpg' }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Alice Johnson',
      role: 'CEO, TechCorp',
      message: 'Sidof delivered our web platform flawlessly and on time — a great team to work with.',
      avatarUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    },
  ];

  partners = [
    { name: 'BURMATS', logoUrl: 'partners/burmarts-logo.png' },
    { name: 'Universal Merche', logoUrl: 'partners/universal.png' },
    { name: 'KAP Expert - BIS', logoUrl: '/partners/logo-bis.jpeg' },
    { name: 'Beito', logoUrl: 'partners/beto_logo.png' }
  ];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.setMetaTags();
    this.injectStructuredData();
  }

  private setMetaTags(): void {
    this.titleService.setTitle('Sidof | Construction, Real Estate, Interior Design & Software in Cameroon');

    this.metaService.updateTag({
      name: 'description',
      content: 'Sidof is a multi-service company in Yaoundé, Cameroon offering construction, titled land sales, interior design, furnished apartments, and custom software development — trusted by clients in Cameroon and abroad.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Sidof, construction Cameroon, real estate Yaoundé, land for sale Cameroon, interior design Yaoundé, furnished apartments Cameroon, software development Cameroon, build in Cameroon from abroad, diaspora Cameroon investment'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Sidof | Construction, Real Estate, Interior Design & Software in Cameroon' });
    this.metaService.updateTag({ property: 'og:description', content: 'A multi-service company based in Yaoundé — construction, real estate, interior design, furnished apartments, and software development, all under one roof.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/og/sidof-cover.jpg' });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Sidof | Construction, Real Estate, Interior Design & Software in Cameroon' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Multi-service company in Yaoundé: construction, real estate, interior design, furnished apartments, and software development.' });
  }

  private injectStructuredData(): void {
    const existing = this.document.getElementById('home-structured-data');
    if (existing) existing.remove();

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Sidof',
      description: 'Multi-service company offering construction, real estate, interior design, furnished apartments, and software development in Yaoundé, Cameroon.',
      url: 'https://www.sidof.xyz', // update to your real domain
      telephone: '+237696444653',
      email: 'sidof@sidof.xyz',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yaoundé',
        addressRegion: 'Centre',
        addressCountry: 'CM'
      },
      areaServed: [
        { '@type': 'City', name: 'Yaoundé' },
        { '@type': 'Country', name: 'Cameroon' }
      ],
      sameAs: [
        // add real social profile URLs here, e.g.:
        'https://www.facebook.com/sidof3',
        'https://www.instagram.com/sidof_3'
      ],
      makesOffer: this.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `https://www.sidof.xyz${service.link}` // update to real domain
        }
      }))
    };

    const script = this.document.createElement('script');
    script.id = 'home-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    this.document.head.appendChild(script);
  }
}

  // partners = [
  //   { name: 'BURMARTS', logoUrl: 'partners/burmarts-logo.png' },
  //   { name: 'Universal Merche', logoUrl: 'partners/universal.png' },
  //   { name: 'KAP Expert - BIS', logoUrl: 'partners/logo-bis.jpeg' },
  //   { name: 'Beito', logoUrl: 'partners/beto_logo.png' }
  // ];
