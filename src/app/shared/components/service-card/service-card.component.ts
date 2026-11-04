import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-card.component.html',
  host: { class: 'block h-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) text!: string;
  @Input({ required: true }) link!: string;
  /** Classe Font Awesome sans le préfixe : 'fa-house' */
  @Input({ required: true }) icon!: string;
  @Input() ctaLabel = '';
  @Input() accent: 'build' | 'design' | 'land' | '' = '';
}