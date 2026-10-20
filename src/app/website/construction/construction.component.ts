import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, Meta, SafeResourceUrl, Title } from '@angular/platform-browser';

interface VideoItem { title: string; description: string; youtubeId: string; }

@Component({
  selector: 'app-construction', standalone: true, imports: [RouterLink],
  templateUrl: './construction.component.html', styleUrl: './construction.component.css'
})
export class ConstructionComponent implements OnInit {
  presentationVideo = { title: 'Découvrez comment BURMATS réalise votre projet', description: 'Une présentation de notre méthode, de la supervision des chantiers et de notre système de suivi à distance.', youtubeId: 'n1R88Vo0y_A' };
  videoEmbedUrl: SafeResourceUrl;

  whyUs = [
    { icon: 'fa-solid fa-video', title: 'Suivi à distance', description: 'Votre chantier visible depuis l’étranger.' },
    { icon: 'fa-solid fa-file-signature', title: 'Engagement écrit', description: 'Un cadre formel pour protéger votre investissement.' },
    { icon: 'fa-solid fa-magnifying-glass', title: 'Contrôle qualité', description: 'Chaque étape vérifiée par nos responsables.' },
    { icon: 'fa-solid fa-comments', title: 'Communication claire', description: 'Des rapports réguliers et des décisions partagées.' }
  ];
  services = [
    { icon: 'fa-solid fa-house', title: 'Construction résidentielle', description: 'Maisons et résidences construites selon vos plans, des fondations aux finitions.' },
    { icon: 'fa-solid fa-building', title: 'Construction commerciale', description: 'Bâtiments professionnels conçus pour la durabilité et la fonctionnalité.' },
    { icon: 'fa-solid fa-screwdriver-wrench', title: 'Rénovation & réhabilitation', description: 'Modernisation et transformation de structures existantes avec soin.' },
    { icon: 'fa-solid fa-road', title: 'Viabilisation & études de sol', description: 'Préparation du terrain et études techniques avant les travaux.' },
    { icon: 'fa-solid fa-clipboard-check', title: 'Supervision de chantier', description: 'Coordination, contrôle qualité et respect du calendrier.' },
    { icon: 'fa-solid fa-truck', title: 'Fourniture de matériaux', description: 'Approvisionnement en sable, gravier et agrégats pour vos travaux.' }
  ];
  process = [
    { title: 'Prise de contact', description: 'Vous présentez votre projet et vos attentes.' },
    { title: 'Étude & devis', description: 'Nous analysons le projet et établissons un devis détaillé.' },
    { title: 'Engagement écrit', description: 'Le budget, le périmètre et le calendrier sont formalisés.' },
    { title: 'Travaux & suivi', description: 'Nous exécutons et documentons chaque étape du chantier.' }
  ];
  projects = [
    { name: 'Guest House R+5', location: 'Emana, Yaoundé', size: '473 m²', status: 'En cours', description: 'Guest house de 5 étages conçue pour accueillir plusieurs unités indépendantes.', images: ['construction/projects/emana-guesthouse-1.jpg','construction/projects/emana-guesthouse-2.jpg','construction/projects/emana-guesthouse-3.jpg','construction/projects/emana-guesthouse-4.jpg'] },
    { name: 'Résidence R+1', location: 'Bafoussam', size: '143,14 m²', status: 'Terminé', description: 'Résidence familiale livrée des fondations aux finitions.', images: ['construction/projects/bafoussam-residence-1.jpg','construction/projects/bafoussam-residence-2.jpg','construction/projects/bafoussam-residence-3.jpg','construction/projects/bafoussam-residence-4.jpg'] },
    { name: 'Résidence R+2', location: 'Mbandoumou, Yaoundé', size: '—', status: 'Terminé', description: 'Résidence réalisée sous supervision complète pour un client à distance.', images: ['construction/projects/mbandjock-residence-1.jpg','construction/projects/mbandjock-residence-2.jpg','construction/projects/mbandjock-residence-3.jpg'] },
    { name: 'Résidence R+1', location: 'Simbock, Yaoundé', size: '—', status: 'Terminé', description: 'Résidence achevée avec un suivi transparent de l’avancement.', images: ['construction/projects/simbock-residence-1.jpg','construction/projects/simbock-residence-2.jpg','construction/projects/simbock-residence-3.jpg'] }
  ];
  activeImageIndex = this.projects.map(() => 0);
  clientLocations = [
    { country: 'Belgique', flag: '🇧🇪' },
    { country: 'Royaume-Uni', flag: '🇬🇧' },
    { country: 'Allemagne', flag: '🇩🇪' },
    { country: 'États-Unis', flag: '🇺🇸' },
    { country: 'France', flag: '🇫🇷' },
    { country: 'Cameroun', flag: '🇨🇲' }
  ];
  avoidPoints = [
    { icon: 'fa-solid fa-triangle-exclamation', title: 'Coûts imprécis', description: 'Budgets qui augmentent sans explication ni traçabilité.' },
    { icon: 'fa-solid fa-hourglass-half', title: 'Retards imprévisibles', description: 'Travaux interrompus sans calendrier ni responsabilité définie.' },
    { icon: 'fa-solid fa-eye-slash', title: 'Absence de contrôle', description: 'Aucune supervision professionnelle ni contrôle qualité.' },
    { icon: 'fa-solid fa-file-circle-xmark', title: 'Aucun engagement écrit', description: 'Des accords verbaux qui ne protègent pas votre investissement.' }
  ];
  advantages = [
    { icon: 'fa-solid fa-file-contract', title: 'Prix ferme et écrit', description: 'Le prix convenu est formalisé, sans augmentation cachée.' },
    { icon: 'fa-solid fa-video', title: 'Suivi par caméra et Starlink', description: 'Consultez votre chantier depuis votre téléphone ou ordinateur.' },
    { icon: 'fa-solid fa-user-shield', title: 'Supervision professionnelle', description: 'Une équipe expérimentée pilote chaque étape.' },
    { icon: 'fa-solid fa-handshake', title: 'Transparence totale', description: 'Rapports réguliers et visibilité sur l’avancement.' }
  ];
  faq = [
    { question: 'Puis-je construire au Cameroun si je vis à l’étranger ?', answer: 'Oui. BURMATS accompagne les clients de la diaspora en gérant le chantier, les équipes et les rapports à distance.' },
    { question: 'Comment suivre l’avancement de mon chantier ?', answer: 'Lorsque les conditions techniques le permettent, nous installons des caméras avec une connexion Starlink. Vous recevez aussi des comptes rendus écrits.' },
    { question: 'Le prix peut-il augmenter en cours de chantier ?', answer: 'Le devis est formalisé par un engagement écrit. Toute modification demandée par le client fait l’objet d’une validation préalable.' },
    { question: 'Dans quelles villes intervenez-vous ?', answer: 'Nous intervenons principalement à Yaoundé, Douala et Bafoussam, ainsi que dans d’autres zones selon la faisabilité du projet.' },
    { question: 'Puis-je vous confier uniquement la supervision ?', answer: 'Oui. BURMATS propose aussi la gestion, la supervision et le contrôle qualité d’un chantier réalisé par une autre équipe.' }
  ];

  constructor(private sanitizer: DomSanitizer, private titleService: Title, private metaService: Meta, @Inject(DOCUMENT) private document: Document) {
    this.videoEmbedUrl = this.safeVideoUrl(this.presentationVideo.youtubeId);
  }
  ngOnInit(): void { this.setMetaTags(); this.injectStructuredData(); }
  private setMetaTags(): void {
    this.titleService.setTitle('Construction au Cameroun depuis l’étranger | BURMATS');
    const description = 'BURMATS accompagne la diaspora dans ses projets de construction au Cameroun : prix transparent, engagement écrit, supervision professionnelle et suivi de chantier par caméras Starlink.';
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: 'construction au Cameroun depuis l’étranger, entreprise BTP Yaoundé, construction maison Cameroun, suivi chantier Starlink, diaspora camerounaise immobilier' });
    const openGraphTags = [
      { property: 'og:title', content: 'Construire au Cameroun depuis l’étranger avec BURMATS' },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'fr_FR' }
    ];
    openGraphTags.forEach(tag => this.metaService.updateTag(tag));
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }
  private injectStructuredData(): void {
    this.document.getElementById('burmats-structured-data')?.remove();
    const data = { '@context': 'https://schema.org', '@type': 'GeneralContractor', name: 'BURMATS', description: 'Entreprise de construction au Cameroun pour les clients de la diaspora.', telephone: '+237696444653', url: this.document.location?.origin, address: { '@type': 'PostalAddress', addressLocality: 'Yaoundé', addressCountry: 'CM' }, areaServed: ['Cameroun', 'Yaoundé', 'Douala', 'Bafoussam'], serviceType: this.services.map(s => s.title) };
    const script = this.document.createElement('script'); script.id = 'burmats-structured-data'; script.type = 'application/ld+json'; script.text = JSON.stringify(data); this.document.head.appendChild(script);
  }
  safeVideoUrl(id: string): SafeResourceUrl { return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`); }
  setActiveImage(projectIndex: number, imageIndex: number): void { this.activeImageIndex[projectIndex] = imageIndex; }
}
