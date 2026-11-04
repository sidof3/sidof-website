import { ChangeDetectionStrategy, Component, Input, afterNextRender, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from '../../../core/services/language.service';
import { parseYoutube } from '../../../core/utils/fortmat';

@Component({
  selector: 'app-youtube-facade',
  standalone: true,
  templateUrl: './youtube-facade.component.html',
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeFacadeComponent {
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly lang = inject(LanguageService);

  protected readonly video = signal(parseYoutube(''));
  protected readonly started = signal(false);

  /** Lien YouTube : vidéo, lien court ou Short */
  @Input({ required: true }) set url(value: string) {
    this.video.set(parseYoutube(value));
  }
  /** Nom accessible de la vidéo */
  @Input({ required: true }) title!: string;
  /** true : la vidéo se lance seule, sans le son (seule façon que les navigateurs autorisent) */
  @Input() autoplay = false;

  protected readonly embedUrl = computed(() => {
    const video = this.video();
    if (!video) return null;
    const params = new URLSearchParams({ autoplay: '1', rel: '0', playsinline: '1' });
    if (this.autoplay) params.set('mute', '1');
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${video.id}?${params.toString()}`,
    );
  });

  constructor() {
    // Seulement dans le navigateur, après l'affichage : le HTML pré-rendu ne contient pas de lecteur
    afterNextRender(() => {
      if (this.autoplay) this.started.set(true);
    });
  }
}