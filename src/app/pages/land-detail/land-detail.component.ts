import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { COMPANY } from '../../core/config/company.config';
import { landListingJsonLd } from '../../core/seo/land-json-ld';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { ImageSlotComponent } from '../../shared/components/image-slot/image-slot.component';
import { YoutubeFacadeComponent } from '../../shared/components/youtube-facade/youtube-facade.component';
import { LANDS } from '../../core/data/lands.data';
import { formatArea, formatPricePerM2, formatLot } from '../../core/utils/fortmat';

@Component({
  selector: 'app-land-detail',
  standalone: true,
  imports: [RouterLink, CtaBandComponent, ImageSlotComponent, YoutubeFacadeComponent],
  templateUrl: './land-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  protected readonly lang = inject(LanguageService);
  protected readonly whatsapp = inject(WhatsappService);
  protected readonly company = COMPANY;

  /** true : la première vidéo se lance seule, sans le son (déconseillé sur mobile : données et vitesse) */
  protected readonly autoplayFirst = false;

  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))), {
    initialValue: this.route.snapshot.paramMap.get('slug'),
  });

  /** Tous les textes de la fiche, dans la langue courante */
  protected readonly view = computed(() => {
    const land = LANDS.find((item) => item.slug === this.slug());
    if (!land) return null;
    const lang = this.lang.lang();
    return {
      land,
      title: land.title[lang],
      description: land.description[lang],
      location: land.location[lang],
      features: land.features[lang],
      imageAlt: land.imageAlt[lang],
      surface: formatArea(land.surfaceM2, lang),
      price: formatPricePerM2(land.pricePerM2, lang),
      lots: land.lots.map((lot) => formatLot(lot, lang)),
      photos: [land.image, ...land.gallery].filter(Boolean),
    };
  });

  constructor() {
    effect(() => {
      const view = this.view();
      if (!view) return;
      const lang = this.lang.lang();
      const url = environment.siteUrl + this.lang.url('landDetail', view.land.slug);
      this.seo.setOverride({
        title: `${view.title} | Sidof`,
        description: view.description,
        image: view.land.image ? environment.siteUrl + view.land.image : undefined,
        name: view.title,
        structuredData: [landListingJsonLd(view.land, lang, url)],
      });
    });
  }
}