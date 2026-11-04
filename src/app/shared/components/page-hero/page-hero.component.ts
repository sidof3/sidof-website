import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  templateUrl: './page-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeroComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle = '';
  /** Chemin de l'image, vide tant qu'il n'y a pas de photo */
  @Input() image = '';
  @Input() imageAlt = '';
}