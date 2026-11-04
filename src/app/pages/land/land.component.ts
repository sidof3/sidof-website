import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { PropertyCardComponent } from '../../shared/components/property-card/property-card.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
// import { formatSurface } from '../../core/utils/fortmat';
import { LANDS } from '../../core/data/lands.data';
import { formatArea, formatPricePerM2 } from '../../core/utils/fortmat';

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, SectionHeadingComponent, PropertyCardComponent, CtaBandComponent],
  templateUrl: './land.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly whatsapp = inject(WhatsappService);

   protected readonly cards = computed(() => {
    const lang = this.lang.lang();
    return LANDS.filter((land) => land.available).map((land) => ({
      land,
      link: this.lang.url('landDetail', land.slug),
      facts: [formatArea(land.surfaceM2, lang)],
      price: formatPricePerM2(land.pricePerM2, lang),
    }));
  });
}