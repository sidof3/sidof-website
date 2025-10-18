import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';

interface Land {
  name: string;
  location: string;
  features: string[];
  surface: string;
  price: string;
}
@Component({
  selector: 'app-land',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './land.component.html',
  styleUrl: './land.component.css'
})
export class LandComponent {

  lands: Land[] = [
    {
      name: 'Nkoabang',
      location: 'Après l’ancienne barrière du GMI, entrée Fokou, à 500 m de l’axe principal.',
      features: [
        'En bordure de l’axe secondaire',
        'Zone habitée et électrifiée'
      ],
      surface: 'Un lot de 7 000 m² (un seul signataire)',
      price: '10 000 – 13 000 FCFA/m²'
    },
    {
      name: 'Soa',
      location: 'Derrière la nouvelle sous-préfecture Quartier administratif, à 300 m de l’axe principal.',
      features: [
        'Terrain électrifié',
        'En bordure de l’axe secondaire',
        'Zone habitée'
      ],
      surface: 'Un titre foncier de 2 600 m² (un seul signataire) répartis en : 1 lot de 6 000 m², 2 lots de 1 000 m² chacun',
      price: '18 000 FCFA/m²'
    },
    {
      name: 'Soa Nkolfoulou II',
      location: 'Après Radio Bonne Nouvelle, à 700 m de l’axe principal.',
      features: [
        'Terrain électrifié',
        'En bordure de l’axe secondaire',
        'Zone habitée'
      ],
      surface: '4,9 hectares (un seul signataire) répartis en : 1 titre de 3,5 ha, 1 titre de 5 000 m², 1 titre de 7 000 m², 1 titre de 2 000 m²',
      price: '10 000 FCFA/m²'
    },
    {
      name: 'Ebang',
      location: 'Route derrière la gendarmerie de Soa (travaux menant vers l’axe d’Obala), à 400 m de l’axe principal.',
      features: [
        'Terrain électrifié',
        'En bordure de l’axe secondaire',
        'Zone habitée'
      ],
      surface: 'Un titre foncier de 2 hectares (un seul signataire)',
      price: '8 000 – 10 000 FCFA/m²'
    },
    {
      name: 'Lobé',
      location: 'Entrée plaque LNB, à 20 min de l’aéroport (avant l’entrée du BIR).',
      features: [
        'Terrain électrifié',
        'En bordure de l’axe secondaire',
        'Zone habitée'
      ],
      surface: '11,3 hectares (un seul signataire), répartis en plusieurs titres de 3,5 ha, 2,5 ha, 1,5 ha et 3 000 m²',
      price: '8 000 – 10 000 FCFA/m²'
    },
    {
      name: 'Fomakap',
      location: 'Sur la route d’Obala à 1 km de l’axe principal, zone en plein développement.',
      features: [
        'Idéal pour projets agricoles ou d’élevage'
      ],
      surface: 'Un titre foncier de 1 hectare (un seul signataire)',
      price: '6 000 FCFA/m²'
    }
  ];
}
