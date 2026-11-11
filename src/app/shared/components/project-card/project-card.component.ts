import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageSlotComponent } from '../image-slot/image-slot.component';
import { YoutubeFacadeComponent } from '../youtube-facade/youtube-facade.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [YoutubeFacadeComponent, ImageSlotComponent],
  templateUrl: './project-card.component.html',
  host: { class: 'block h-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input({ required: true }) title!: string;
  @Input() description = '';
  @Input() place = '';
  /** « Réalisé », « En cours » */
  @Input() status = '';
  /** Étiquettes : « Staff », « Décoration »... */
  @Input() tags: string[] = [];
  /** Liens YouTube (vidéo ou Short) */
  @Input() videos: string[] = [];
  /** Chemins des photos, vide tant qu'il n'y en a pas */
  @Input() photos: string[] = [];
  @Input() photoAlt = '';
}