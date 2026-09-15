import { Component, OnInit, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

interface Land {
  name: string;
  location: string;
  features: string[];
  surface: string;
  price: string;
  videoUrl: string;
  whatsapp?: string;
  status?: 'Available' | 'Reserved' | 'Sold';
}

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './land.component.html',
  styleUrl: './land.component.css'
})
export class LandComponent implements OnInit {

  defaultWhatsapp = '237696444653';

  lands: Land[] = [
    {
      name: 'Nkoabang',
      location: 'Past the old GMI barrier, Fokou entrance, 500 m from the main road.',
      features: [
        'Bordering the secondary road',
        'Populated and electrified area'
      ],
      surface: 'One 7,000 m² plot (single title holder)',
      price: '10,000 – 13,000 FCFA/m²',
      videoUrl: 'https://youtu.be/KX5lw16oiG4',
      status: 'Available'
    },
    {
      name: 'Soa',
      location: 'Behind the new sub-prefecture, administrative district, 300 m from the main road.',
      features: [
        'Electrified plot',
        'Bordering the secondary road',
        'Populated area'
      ],
      surface: 'A 2,600 m² land title (single title holder), split into: one 6,000 m² plot, two 1,000 m² plots',
      price: '18,000 FCFA/m²',
      videoUrl: 'https://www.facebook.com/share/r/18eySVEtUt/',
      status: 'Available'
    },
    {
      name: 'Soa Nkolfoulou II',
      location: 'Past Radio Bonne Nouvelle, 700 m from the main road.',
      features: [
        'Electrified plot',
        'Bordering the secondary road',
        'Populated area'
      ],
      surface: '4.9 hectares (single title holder), split into: 3.5 ha, 5,000 m², 7,000 m², and 2,000 m² titles',
      price: '10,000 FCFA/m²',
      videoUrl: 'https://youtu.be/O0qJgEfMAcA',
      status: 'Available'
    },
    {
      name: 'Ebang',
      location: 'Road behind the Soa gendarmerie (road under construction toward the Obala axis), 400 m from the main road.',
      features: [
        'Electrified plot',
        'Bordering the secondary road',
        'Populated area'
      ],
      surface: 'A 2-hectare land title (single title holder)',
      price: '16,000 FCFA/m²',
      videoUrl: 'https://www.facebook.com/share/r/1EtxvUQsvy/',
      status: 'Available'
    },
    {
      name: 'Lobé',
      location: 'LNB plaque entrance, 20 min from the airport (before the BIR entrance).',
      features: [
        'Electrified plot',
        'Bordering the secondary road',
        'Populated area'
      ],
      surface: '11.3 hectares (single title holder), split into titles of 3.5 ha, 2.5 ha, 1.5 ha, and 3,000 m²',
      price: '8,000 – 10,000 FCFA/m²',
      videoUrl: '', // TODO: add real video link
      status: 'Available'
    },
    {
      name: 'Fomakap',
      location: 'On the Obala road, 1 km from the main road, a fast-developing area.',
      features: [
        'Ideal for agricultural or livestock projects'
      ],
      surface: 'A 1-hectare land title (single title holder)',
      price: '6,000 FCFA/m²',
      videoUrl: 'https://youtu.be/1f0exaquIYE',
      status: 'Available'
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
    this.titleService.setTitle('Titled Land for Sale in Yaoundé, Cameroon | Sidof');

    this.metaService.updateTag({
      name: 'description',
      content: 'Titled plots of land for sale in Yaoundé and surrounding areas: Nkoabang, Soa, Ebang, Lobé, Fomakap. Secure investment opportunities for buyers in Cameroon and the diaspora.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'land for sale Yaoundé, titled land Cameroon, buy land Cameroon diaspora, real estate investment Cameroon, land Nkoabang, land Soa, land Ebang, land Lobé, plots Yaoundé'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Titled Land for Sale in Yaoundé, Cameroon | Sidof' });
    this.metaService.updateTag({ property: 'og:description', content: 'Explore titled plots of land for sale across Yaoundé and nearby areas — ideal for diaspora investors and local buyers alike.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
  }

  private injectStructuredData(): void {
    // Remove any previously injected script (avoids duplicates on route re-entry)
    const existing = this.document.getElementById('land-structured-data');
    if (existing) {
      existing.remove();
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': this.lands.map(land => ({
        '@type': 'RealEstateListing',
        name: `Titled Land – ${land.name}`,
        description: `${land.surface}. ${land.location}. Features: ${land.features.join(', ')}.`,
        url: 'https://www.sidof.xyz/lands', // update to your real domain
        address: {
          '@type': 'PostalAddress',
          addressLocality: land.name,
          addressRegion: 'Centre',
          addressCountry: 'CM'
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'XAF',
          price: this.extractNumericPrice(land.price),
          availability: land.status === 'Sold'
            ? 'https://schema.org/SoldOut'
            : 'https://schema.org/InStock',
          url: 'https://www.sidof.xyz/lands'
        }
      }))
    };

    const script = this.document.createElement('script');
    script.id = 'land-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    this.document.head.appendChild(script);
  }

  /**
   * Extracts a usable numeric price from strings like "10,000 – 13,000 FCFA/m²"
   * Schema.org "price" expects a single number, so we take the lower bound of any range.
   */
  private extractNumericPrice(priceText: string): string {
    const match = priceText.replace(/,/g, '').match(/\d+/);
    return match ? match[0] : '0';
  }

  getSafeVideoUrl(url: string): SafeResourceUrl | null {
    if (!url) return null;

    let embedUrl = url;

    if (url.includes('youtu.be')) {
      embedUrl = url.replace('youtu.be/', 'www.youtube.com/embed/');
    } else if (url.includes('watch?v=')) {
      embedUrl = url.replace('watch?v=', 'embed/');
    } else if (url.includes('shorts/')) {
      embedUrl = url.replace('shorts/', 'embed/');
    } else if (url.includes('facebook.com')) {
      embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  getWhatsappLink(land: Land): string {
    const number = land.whatsapp || this.defaultWhatsapp;
    const message = encodeURIComponent(`Hello, I'm interested in the land at ${land.name}.`);
    return `https://wa.me/${number}?text=${message}`;
  }
}