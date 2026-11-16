import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ImageSlotComponent } from '../image-slot/image-slot.component';

@Component({
  selector: 'app-staff-package-card',
  standalone: true,
  imports: [ImageSlotComponent],
  templateUrl: './staff-package-card.component.html',
  host: { class: 'block h-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffPackageCardComponent {
  @Input({ required: true }) title!: string;
  @Input() text = '';
  /** « Comprend : » ou « Tout de la formule … , plus : » */
  @Input() intro = '';
  /** Ce que la formule ajoute à la précédente */
  @Input() adds: string[] = [];
  @Input() image = '';
  @Input() imageAlt = '';
  @Input({ required: true }) clientLabel!: string;
  @Input({ required: true }) clientPrice!: string;
  @Input({ required: true }) sidofLabel!: string;
  @Input({ required: true }) sidofPrice!: string;
    /** Texte du bouton « Estimer mon projet » ; vide = pas de bouton */
  @Input() estimateLabel = '';
  @Output() estimate = new EventEmitter<void>();

    @Input() hasPhotos = false;
  @Input() hasVideo = false;
  @Input() photosLabel = '';
  @Input() videoLabel = '';
  @Output() viewPhotos = new EventEmitter<void>();
  @Output() viewVideo = new EventEmitter<void>();
}