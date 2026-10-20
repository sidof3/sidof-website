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
  status?: 'Disponible' | 'Réservé' | 'Vendu';
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
      location: 'Après l\'ancienne barrière du GMI, entrée Fokou, à 500 m de l\'axe principal.',
      features: [
        'En bordure de l\'axe secondaire',
        'Zone habitée et électrifiée'
      ],
      surface: 'Un lot de 7 000 m² (un seul signataire)',
      price: '10 000 – 13 000 FCFA/m²',
      videoUrl: 'https://youtu.be/KX5lw16oiG4',
      status: 'Disponible'
    },
    {
      name: 'Soa',
      location: 'Derrière la nouvelle sous-préfecture, quartier administratif, à 300 m de l\'axe principal.',
      features: [
        'Terrain électrifié',
        'En bordure de l\'axe secondaire',
        'Zone habitée'
      ],
      surface: 'Un titre foncier de 2 600 m² (un seul signataire), réparti en : 1 lot de 6 000 m², 2 lots de 1 000 m² chacun',
      price: '18 000 FCFA/m²',
      videoUrl: 'https://www.facebook.com/share/r/18eySVEtUt/',
      status: 'Disponible'
    },
    {
      name: 'Soa Nkolfoulou II',
      location: 'Après Radio Bonne Nouvelle, à 700 m de l\'axe principal.',
      features: [
        'Terrain électrifié',
        'En bordure de l\'axe secondaire',
        'Zone habitée'
      ],
      surface: '4,9 hectares (un seul signataire), répartis en : 3,5 ha, 5 000 m², 7 000 m² et 2 000 m²',
      price: '10 000 FCFA/m²',
      videoUrl: 'https://youtu.be/O0qJgEfMAcA',
      status: 'Disponible'
    },
    {
      name: 'Ebang',
      location: 'Route derrière la gendarmerie de Soa (travaux menant vers l\'axe d\'Obala), à 400 m de l\'axe principal.',
      features: [
        'Terrain électrifié',
        'En bordure de l\'axe secondaire',
        'Zone habitée'
      ],
      surface: 'Un titre foncier de 2 hectares (un seul signataire)',
      price: '16 000 FCFA/m²',
      videoUrl: 'https://www.facebook.com/share/r/1EtxvUQsvy/',
      status: 'Disponible'
    },
    {
      name: 'Lobé',
      location: 'Entrée plaque LNB, à 20 min de l\'aéroport (avant l\'entrée du BIR).',
      features: [
        'Terrain électrifié',
        'En bordure de l\'axe secondaire',
        'Zone habitée'
      ],
      surface: '11,3 hectares (un seul signataire), répartis en plusieurs titres de 3,5 ha, 2,5 ha, 1,5 ha et 3 000 m²',
      price: '8 000 – 10 000 FCFA/m²',
      videoUrl: '', // TODO : ajouter le lien vidéo réel
      status: 'Disponible'
    },
    {
      name: 'Fomakap',
      location: 'Sur la route d\'Obala, à 1 km de l\'axe principal, zone en plein développement.',
      features: [
        'Idéal pour projets agricoles ou d\'élevage'
      ],
      surface: 'Un titre foncier de 1 hectare (un seul signataire)',
      price: '6 000 FCFA/m²',
      videoUrl: 'https://youtu.be/1f0exaquIYE',
      status: 'Disponible'
    }
  ];

  faq = [
    {
      question: 'Les terrains proposés disposent-ils tous d\'un titre foncier ?',
      answer: 'Oui. Tous les terrains que nous proposons disposent d\'un titre foncier, au nom d\'un seul signataire, ce qui sécurise votre achat et facilite les démarches administratives.'
    },
    {
      question: 'Puis-je acheter un terrain depuis l\'étranger ?',
      answer: 'Oui. Nous accompagnons régulièrement des membres de la diaspora dans l\'achat de terrains à distance. Nous pouvons organiser une visite filmée, gérer les démarches et vous tenir informé à chaque étape.'
    },
    {
      question: 'Les terrains sont-ils viabilisés ?',
      answer: 'La plupart des terrains proposés sont électrifiés et situés en zone habitée, en bordure d\'un axe secondaire. Les détails de viabilisation sont précisés pour chaque terrain dans sa fiche.'
    },
    {
      question: 'Comment se déroule l\'achat d\'un terrain ?',
      answer: 'Après votre prise de contact, nous vous présentons le terrain (visite ou vidéo), confirmons la disponibilité et le prix, puis procédons aux démarches de transfert de titre avec un acte notarié.'
    },
    {
      question: 'Est-il possible de visiter le terrain avant l\'achat ?',
      answer: 'Oui, une visite sur place est toujours possible. Si vous êtes à l\'étranger, nous pouvons organiser une visite vidéo en direct ou vous fournir des vidéos et photos récentes du terrain.'
    },
    {
      question: 'Peut-on négocier le prix au m² ?',
      answer: 'Les prix affichés sont indicatifs. Contactez-nous pour discuter des conditions selon la surface souhaitée et le mode de paiement.'
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
    this.titleService.setTitle('Terrains titrés à vendre à Yaoundé, Cameroun | Sidof');

    this.metaService.updateTag({
      name: 'description',
      content: 'Terrains titrés à vendre à Yaoundé et environs : Nkoabang, Soa, Ebang, Lobé, Fomakap. Opportunités d\'investissement sécurisées pour acheteurs au Cameroun et dans la diaspora.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'vente de terrain à Yaoundé, terrain titré Cameroun, acheter terrain Cameroun diaspora, investissement immobilier Cameroun, terrain Nkoabang, terrain Soa, terrain Ebang, terrain Lobé, lotissement Yaoundé'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Terrains titrés à vendre à Yaoundé, Cameroun | Sidof' });
    this.metaService.updateTag({ property: 'og:description', content: 'Découvrez nos terrains titrés à vendre à Yaoundé et environs — idéal pour investisseurs de la diaspora et acheteurs locaux.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:locale', content: 'fr_FR' });
  }

  private injectStructuredData(): void {
    const existing = this.document.getElementById('land-structured-data');
    if (existing) {
      existing.remove();
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': this.lands.map(land => ({
        '@type': 'RealEstateListing',
        name: `Terrain titré – ${land.name}`,
        description: `${land.surface}. ${land.location} Caractéristiques : ${land.features.join(', ')}.`,
        url: 'https://www.sidof.xyz/lands', // à remplacer par ton vrai domaine
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
          availability: land.status === 'Vendu'
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

  private extractNumericPrice(priceText: string): string {
    const match = priceText.replace(/\s|,/g, '').match(/\d+/);
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
    const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par le terrain à ${land.name}.`);
    return `https://wa.me/${number}?text=${message}`;
  }
}