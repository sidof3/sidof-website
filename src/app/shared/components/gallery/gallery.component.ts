import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, inject, signal } from '@angular/core';
import { WhatsappService } from '../../../core/services/whatsapp.service';
import { ImageSlotComponent } from '../image-slot/image-slot.component';
import { GalleryItem } from '../../../core/models/gallery-item';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageSlotComponent],
  templateUrl: './gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  protected readonly whatsapp = inject(WhatsappService);

  @Input({ required: true }) items!: GalleryItem[];
  /** Boutons de filtre ; vide = pas de filtre */
  @Input() categories: { key: string; label: string }[] = [];
  @Input() allLabel = '';
  /** Texte du bouton « Je veux ce modèle » */
  @Input() ctaLabel = '';
  @Input() closeLabel = '';
  /** Début du message WhatsApp : « Modèle de staff » */
  @Input() subjectPrefix = '';

  @ViewChild('viewer') private viewer?: ElementRef<HTMLDialogElement>;

  protected readonly filter = signal('');
  protected readonly selected = signal<GalleryItem | null>(null);

  protected get visible(): GalleryItem[] {
    const key = this.filter();
    return key ? this.items.filter((item) => item.category === key) : this.items;
  }

  protected link(item: GalleryItem): string {
    return this.whatsapp.link(`${this.subjectPrefix} – ${item.caption || item.alt}`);
  }

  protected open(item: GalleryItem): void {
    this.selected.set(item);
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