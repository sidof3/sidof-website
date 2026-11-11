import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { YoutubeFacadeComponent } from '../../shared/components/youtube-facade/youtube-facade.component';
import { CONSTRUCTION_GALLERY, CONSTRUCTION_VIDEOS } from '../../core/data/construction-projects.data';
import { ConstructionGalleryCategory } from '../../core/models/ConstructionGalleryCategory';

@Component({
  selector: 'app-construction',
  standalone: true,
  imports: [
    RouterLink,
    PageHeroComponent,
    SectionHeadingComponent,
    GalleryComponent,
    YoutubeFacadeComponent,
    CtaBandComponent,
  ],
  templateUrl: './construction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConstructionComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly whatsapp = inject(WhatsappService);
  protected readonly t = computed(() => this.lang.t().constructionPage);

  protected readonly monitorIcons = ['fa-video', 'fa-file-lines', 'fa-comments'];
  protected readonly trustIcons = ['fa-eye', 'fa-scale-balanced', 'fa-handshake'];

  protected readonly galleryItems = computed(() => {
    const lang = this.lang.lang();
    return CONSTRUCTION_GALLERY.map((entry) => ({
      id: entry.id,
      src: entry.image,
      alt: entry.alt[lang],
      caption: entry.caption?.[lang],
      category: entry.category,
    }));
  });

  /** Seules les catégories qui contiennent au moins une image */
  protected readonly galleryCategories = computed(() => {
    const labels = this.t().galleryCategories;
    return (Object.keys(labels) as ConstructionGalleryCategory[])
      .filter((key) => CONSTRUCTION_GALLERY.some((entry) => entry.category === key))
      .map((key) => ({ key, label: labels[key] }));
  });

  protected readonly videos = computed(() => {
    const lang = this.lang.lang();
    return CONSTRUCTION_VIDEOS.map((video) => ({ id: video.id, url: video.url, title: video.title[lang] }));
  });
}