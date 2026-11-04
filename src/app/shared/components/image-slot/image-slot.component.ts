import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-slot',
  standalone: true,
  templateUrl: './image-slot.component.html',
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSlotComponent {
  /** Chemin sous public/images/ ; vide tant qu'il n'y a pas de photo */
  @Input() src = '';
  /** Texte alternatif : y mettre le quartier et la ville. Sert aussi de description de la photo attendue. */
  @Input({ required: true }) alt!: string;
  @Input() width = 1200;
  @Input() height = 800;
  /** true pour l'image principale visible dès l'ouverture de la page */
  @Input() priority = false;
}