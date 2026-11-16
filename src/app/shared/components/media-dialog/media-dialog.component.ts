import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import type { MediaContent } from '../../../core/models/MediaContent';
import { ImageSlotComponent } from '../image-slot/image-slot.component';
import { YoutubeFacadeComponent } from '../youtube-facade/youtube-facade.component';

@Component({
  selector: 'app-media-dialog',
  standalone: true,
  imports: [ImageSlotComponent, YoutubeFacadeComponent],
  templateUrl: './media-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaDialogComponent {
  /** Texte du bouton de fermeture */
  @Input() closeLabel = '';

  @ViewChild('viewer') private viewer?: ElementRef<HTMLDialogElement>;

  protected readonly content = signal<MediaContent | null>(null);

  /** Ouvre la fenêtre : appelée par la page quand le visiteur clique */
  open(content: MediaContent): void {
    this.content.set(content);
    const dialog = this.viewer?.nativeElement;
    if (dialog && !dialog.open) dialog.showModal();
  }

  protected close(): void {
    this.viewer?.nativeElement.close();
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.viewer?.nativeElement) this.close();
  }
}