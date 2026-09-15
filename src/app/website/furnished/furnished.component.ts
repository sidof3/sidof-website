import { Component, OnInit, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

interface Apartment {
  name: string;
  location: string;
  rooms: string;
  features: string[];
  price: string;
  videoUrl?: string;
  imageUrl?: string;
  whatsappMessage: string;
}

@Component({
  selector: 'app-furnished',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './furnished.component.html',
  styleUrl: './furnished.component.css'
})
export class FurnishedComponent implements OnInit {

  defaultWhatsapp = '237696444653';

  apartments: Apartment[] = [
    {
      name: 'Furnished Apartment in Odza',
      location: 'Yaoundé – Carrefour Borne 10',
      rooms: '2 bedrooms, 1 living room, kitchen, 2 indoor showers, 2 outdoor showers',
      features: ['Wi-Fi', 'Air conditioning', 'Secure parking', 'Water & electricity included'],
      price: '35,000 FCFA / night',
      imageUrl: 'assets/apartments/odza.jpg',
      videoUrl: 'https://youtube.com/shorts/O-82uEU03s0',
      whatsappMessage: "Hello! I'd like more information about the furnished apartment in Odza."
    },
    {
      name: 'Furnished Villa in Odza – Plaque L&MB',
      location: 'Yaoundé – Plaque L&MB',
      rooms: '3 bedrooms, 1 living room, kitchen, 2 showers',
      features: [
        'Wi-Fi', 'Air conditioning', 'Secure parking', 'Water & electricity included',
        'Events allowed', 'Swimming pool', 'Near the airport'
      ],
      price: '150,000 FCFA / night – 350,000 FCFA with event',
      videoUrl: 'https://www.facebook.com/reel/1623245802073618',
      whatsappMessage: "Hello, I'd like more information about the Furnished Villa in Odza – Plaque L&MB. Is it still available?"
    },
    {
      name: 'Furnished Apartment in Odza',
      location: 'Yaoundé – Carrefour Borne 10',
      rooms: '2 bedrooms, 1 living room, kitchen, 2 showers',
      features: ['Wi-Fi', 'Air conditioning', 'Secure parking', 'Water & electricity included'],
      price: '35,000 FCFA / night',
      imageUrl: 'assets/apartments/odza.jpg',
      videoUrl: 'https://youtube.com/shorts/8Sk3MAlmu-k',
      whatsappMessage: "Hello! I'd like more information about the furnished apartment in Odza."
    },
    {
      name: 'Furnished Studio in Bastos',
      location: 'Yaoundé – Opposite the U.S. Embassy, Bastos',
      rooms: '1 bedroom, living room, modern kitchen',
      features: ['Panoramic view', 'Hot water', 'Smart TV'],
      price: '35,000 FCFA / night',
      videoUrl: 'https://youtube.com/shorts/sc1Umson2ao',
      whatsappMessage: "Hello! I'd like more information about the furnished apartment in Bastos."
    },
    {
      name: 'Furnished Apartment in Tongolo',
      location: 'Yaoundé – Tongolo, Ancien Binam',
      rooms: '2 bedrooms, 1 living room, kitchen, 2 showers',
      features: ['Wi-Fi', 'Air conditioning', 'Secure parking', 'Water & electricity included'],
      price: '35,000 FCFA / night',
      videoUrl: 'https://youtube.com/shorts/4lXSKeSGibU',
      whatsappMessage: "Hello! I'd like more information about the furnished apartment in Tongolo."
    },
    {
      name: 'Furnished Studio in Simbock',
      location: 'Yaoundé – Simbock, behind the chapel',
      rooms: '1 bedroom, 1 living room, kitchen, 1 shower',
      features: ['Wi-Fi', 'Air conditioning', 'Secure parking', 'Water & electricity included'],
      price: '15,000 FCFA / night',
      videoUrl: 'https://www.youtube.com/watch?v=PS5zvjak4KE&list=PLYT87i5LWwTFgWURkZdCRUTT9CBudWGH1',
      whatsappMessage: "Hello, I'd like more information about the Furnished Studio in Simbock, behind the chapel. Is it still available?"
    },
    {
      name: 'Chic Furnished Apartment in Simbock',
      location: 'Yaoundé – Simbock, Trois Lampadaires',
      rooms: '2 bedrooms, 1 living room, kitchen, 2 showers',
      features: ['Wi-Fi', 'Air conditioning', 'Secure parking', 'Water & electricity included'],
      price: '40,000 FCFA / night',
      videoUrl: 'https://youtube.com/shorts/j46UKKK4kYk',
      whatsappMessage: "Hello, I'd like more information about the Chic Furnished Apartment in Simbock. Is it still available?"
    },
    {
      name: 'Chic Furnished Apartment in Simbock',
      location: 'Yaoundé – Simbock, Trois Lampadaires',
      rooms: '3 bedrooms, 1 living room, kitchen, 2 showers',
      features: ['Wi-Fi', 'Air conditioning', 'Secure parking', 'Water & electricity included', 'Events allowed'],
      price: '60,000 FCFA / night',
      videoUrl: 'https://youtube.com/shorts/S8XnXZlCkRU',
      whatsappMessage: "Hello, I'd like more information about the Chic Furnished Apartment in Simbock (3 bedrooms). Is it still available?"
    },
    {
      name: 'Chic Furnished Studio in Simbock',
      location: 'Yaoundé – Simbock, Trois Lampadaires',
      rooms: '1 bedroom, 1 living room, kitchen, 2 showers',
      features: ['Wi-Fi', 'Air conditioning', 'Secure parking', 'Water & electricity included'],
      price: '25,000 FCFA / night',
      videoUrl: 'https://www.youtube.com/watch?v=lOf7liMz0_8&list=PLYT87i5LWwTFgWURkZdCRUTT9CBudWGH1&index=3',
      whatsappMessage: "Hello, I'd like more information about the Chic Furnished Studio in Simbock. Is it still available?"
    }
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.setMetaTags();
    this.injectStructuredData();
  }

  private setMetaTags(): void {
    this.titleService.setTitle('Furnished Apartments for Rent in Yaoundé | Sidof');

    this.metaService.updateTag({
      name: 'description',
      content: 'Fully furnished apartments and villas for short-term rent in Yaoundé — Odza, Bastos, Simbock, Tongolo. Wi-Fi, AC, secure parking, available now.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'furnished apartment Yaoundé, short term rental Cameroon, furnished villa Yaoundé, apartment for rent Odza, apartment for rent Bastos, apartment for rent Simbock, vacation rental Cameroon'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Furnished Apartments for Rent in Yaoundé | Sidof' });
    this.metaService.updateTag({ property: 'og:description', content: 'Browse fully furnished, move-in-ready apartments and villas for short-term stays in Yaoundé.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
  }

  private injectStructuredData(): void {
    const existing = this.document.getElementById('furnished-structured-data');
    if (existing) existing.remove();

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': this.apartments.map(apt => ({
        '@type': 'LodgingBusiness',
        name: apt.name,
        description: `${apt.rooms}. Features: ${apt.features.join(', ')}.`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: apt.location,
          addressRegion: 'Centre',
          addressCountry: 'CM'
        },
        priceRange: apt.price,
        image: apt.imageUrl || undefined
      }))
    };

    const script = this.document.createElement('script');
    script.id = 'furnished-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    this.document.head.appendChild(script);
  }

  getSafeVideoUrl(url?: string): SafeResourceUrl | null {
    if (!url) return null;

    let embedUrl = url;

    if (url.includes('youtu.be/')) {
      embedUrl = url.replace('youtu.be/', 'www.youtube.com/embed/');
    } else if (url.includes('watch?v=')) {
      embedUrl = url.replace('watch?v=', 'embed/');
    } else if (url.includes('/shorts/')) {
      embedUrl = url.replace('/shorts/', '/embed/');
    } else if (url.includes('facebook.com')) {
      embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  getWhatsappLink(apt: Apartment): string {
    return `https://wa.me/${this.defaultWhatsapp}?text=${encodeURIComponent(apt.whatsappMessage)}`;
  }
}