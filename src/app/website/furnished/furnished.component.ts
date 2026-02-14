import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


 interface Apartment {
  name: string;
  location: string;
  features: string[];
  rooms: string;
  price: string;
  videoUrl?: string;
  imageUrl?: string;
  whatsapp?: string;
  galleryLink?: string;
  }

@Component({
  selector: 'app-furnished',
  standalone: true,
  imports: [],
  templateUrl: './furnished.component.html',
  styleUrl: './furnished.component.css'
})
export class FurnishedComponent {

   constructor(private sanitizer: DomSanitizer) {}

   apartments: Apartment[] = [
    {
      name: 'Appartement Meublé à Odza',
      location: 'Yaoundé - Carrefour Borne 10',
      rooms: '2 chambres, 1 salon, cuisine, 2 douches',
      features: ['Wi-Fi', 'Climatisation', 'Parking sécurisé', 'Eau et électricité incluses'],
      price: '35 000 FCFA / nuit',
      imageUrl: 'assets/apartments/odza.jpg',
      videoUrl: 'https://youtube.com/shorts/O-82uEU03s0',
      whatsapp: 'https://wa.me/237696444653?text=Bonjour!%20Je%20souhaite%20plus%20d\'informations%20sur%20l\'appartement%20meublé%20à%Odza.',

    },
    {
      name: 'Appartement Meublé à Odza',
      location: 'Yaoundé - Carrefour Borne 10',
      rooms: '2 chambres, 1 salon, cuisine, 2 douches',
      features: ['Wi-Fi', 'Climatisation', 'Parking sécurisé', 'Eau et électricité incluses'],
      price: '35 000 FCFA / nuit',
      imageUrl: 'assets/apartments/odza.jpg',
      videoUrl: 'https://youtube.com/shorts/8Sk3MAlmu-k',
      whatsapp: 'https://wa.me/237696444653?text=Bonjour!%20Je%20souhaite%20plus%20d\'informations%20sur%20l\'appartement%20meublé%20à%Odza.',

    },
    {
      name: 'Studio Meublé à Bastos',
      location: 'Yaoundé - En face de lambassade des Etat Unis - Bastos',
      rooms: '1 chambre, salon, cuisine moderne',
      features: ['Vue panoramique', 'Eau chaude', 'Télévision connectée'],
      price: '25 000 FCFA / nuit',
      videoUrl: 'https://youtube.com/shorts/sc1Umson2ao',
      whatsapp: 'https://wa.me/237696444653?text=Bonjour!%20Je%20souhaite%20plus%20d\'informations%20sur%20l\'appartement%20meublé%20à%20Bastos.',

    },
    {
      name: 'Appartement Meublé à Tongolo',
      location: 'Yaoundé - Tongolo Ancien Binam',
      rooms: '2 chambres, 1 salon, cuisine, 2 douches',
      features: ['Wi-Fi', 'Climatisation', 'Parking sécurisé', 'Eau et électricité incluses'],
      price: '35 000 FCFA / nuit',
      videoUrl: 'https://youtube.com/shorts/4lXSKeSGibU',
      whatsapp: 'https://wa.me/237696444653?text=Bonjour!%20Je%20souhaite%20plus%20d\'informations%20sur%20l\'appartement%20meublé%20à%Tongolo.',

    },
  ];


  getSafeVideoUrl(url: string): SafeResourceUrl {
    let embedUrl = url;

    // 🎥 Handle YouTube normal or short
    if (url.includes('youtu.be')) {
      embedUrl = url.replace('youtu.be/', 'www.youtube.com/embed/');
    } else if (url.includes('watch?v=')) {
      embedUrl = url.replace('watch?v=', 'embed/');
    } else if (url.includes('shorts/')) {
      embedUrl = url.replace('shorts/', 'embed/');
    }

    // 📘 Handle Facebook Reel
    else if (url.includes('facebook.com/reel/')) {
      embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }


}
