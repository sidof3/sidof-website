import { Component, OnInit, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  label: string;
  url?: string;
}

@Component({
  selector: 'app-house-sale',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './house-sale.component.html',
  styleUrl: './house-sale.component.css'
})
export class HouseSaleComponent implements OnInit {

  price = '290,000,000 FCFA';
  unitsAvailable = 2;
  location = 'Odza Cité de la Paix, Yaoundé';
  whatsappNumber = '237696444653';

  features = [
    { icon: 'fa-solid fa-bed', label: '4 Bedrooms' },
    { icon: 'fa-solid fa-bath', label: '6 Bathrooms' },
    { icon: 'fa-solid fa-couch', label: 'Spacious Living Room' },
    { icon: 'fa-solid fa-kitchen-set', label: 'Fully Equipped Kitchen with Pantry' },
    { icon: 'fa-solid fa-building-user', label: 'Rooftop Terrace' },
    { icon: 'fa-solid fa-solar-panel', label: 'Full Solar Installation' },
    { icon: 'fa-solid fa-water', label: 'Operational Water Borehole' },
    { icon: 'fa-solid fa-shield-halved', label: 'Secure, Gated Property' }
  ];

  mediaItems: MediaItem[] = [
    {
      type: 'image',
      src: 'dup/img-1.jpeg',
      alt: 'Duplex exterior facade — Odza Cité de la Paix',
      label: 'Facade'
    },
    {
      type: 'image',
      src: 'dup/img-2.jpeg',
      alt: 'Duplex living room',
      label: 'Living Room'
    },
    {
      type: 'image',
      src: 'dup/img-3.jpeg',
      alt: 'Duplex private pool',
      label: 'Pool'
    },
    {
      type: 'video',
      src: '',
      alt: 'Duplex video walkthrough',
      label: 'Video Tour 1',
      url: 'https://www.facebook.com/share/r/1DmBz5Dkf9/'
    },
    {
      type: 'video',
      src: '',
      alt: 'Duplex video walkthrough',
      label: 'Video Tour 2',
      url: 'https://www.facebook.com/share/r/1AypicJijs/'
    }
  ];

  activeMedia: MediaItem | null = null;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.activeMedia = this.mediaItems.find(m => m.type === 'image') || null;
  }

  ngOnInit(): void {
    this.setMetaTags();
    this.injectStructuredData();
  }

  openMedia(item: MediaItem): void {
    if (item.type === 'video' && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      this.activeMedia = item;
    }
  }

  get whatsappLink(): string {
    const message = encodeURIComponent(
      `Hello, I'm interested in the duplex for sale in ${this.location}. Could you share more details?`
    );
    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  }

  private setMetaTags(): void {
    this.titleService.setTitle('Modern Duplex For Sale — Odza Cité de la Paix, Yaoundé | Sidof');

    this.metaService.updateTag({
      name: 'description',
      content: 'Modern high-end duplex for sale in Odza Cité de la Paix, Yaoundé — 4 bedrooms, 6 bathrooms, solar power, private borehole, rooftop terrace. 290,000,000 FCFA. Two units available.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'duplex for sale Yaoundé, house for sale Odza, luxury home Cameroon, real estate Odza Cité de la Paix, property investment Yaoundé'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Modern Duplex For Sale — Odza Cité de la Paix, Yaoundé' });
    this.metaService.updateTag({ property: 'og:description', content: '4 bedrooms, 6 bathrooms, solar power, private borehole, rooftop terrace. 290,000,000 FCFA — two units available.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:image', content: '/dup/img-1.jpeg' });
  }

  private injectStructuredData(): void {
    const existing = this.document.getElementById('house-sale-structured-data');
    if (existing) existing.remove();

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      name: 'Modern High-End Duplex — Odza Cité de la Paix',
      description: 'Modern duplex with 4 bedrooms, 6 bathrooms, full solar installation, operational water borehole, and rooftop terrace.',
      url: 'https://www.sidof.xyz/house-sale', // update to real domain
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Odza Cité de la Paix',
        addressRegion: 'Centre',
        addressCountry: 'CM'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'XAF',
        price: '290000000',
        availability: 'https://schema.org/InStock',
        url: 'https://www.sidof.xyz/house-sale'
      }
    };

    const script = this.document.createElement('script');
    script.id = 'house-sale-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    this.document.head.appendChild(script);
  }
}