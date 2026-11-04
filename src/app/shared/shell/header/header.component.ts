import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import type { Translations } from '../../../core/i18n/fr';
import { LanguageService } from '../../../core/services/language.service';
import { LanguageSwitchComponent } from '../../language-switch/language-switch.component';

/** Clés du menu : ce sont aussi des clés de page (route-paths.ts). */
type NavKey = Exclude<keyof Translations['nav'], 'services'>;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LanguageSwitchComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly lang = inject(LanguageService);
  private readonly router = inject(Router);

  protected readonly main: NavKey[] = ['construction', 'land', 'interior'];
  protected readonly services: NavKey[] = [
    'houses',
    'houseRentals',
    'apartments',
    'materials',
    'iranianTiles',
    'travel',
    'software',
  ];
  protected readonly after: NavKey[] = ['blog'];
  /** Menu mobile : tout à plat */
  protected readonly all: NavKey[] = [...this.main, ...this.services, ...this.after];

  protected readonly mobileOpen = signal(false);
  protected readonly servicesOpen = signal(false);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.closeAll());
  }

  protected toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  protected toggleServices(): void {
    this.servicesOpen.update((open) => !open);
  }

  protected closeAll(): void {
    this.mobileOpen.set(false);
    this.servicesOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeAll();
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('[data-services-menu]')) {
      this.servicesOpen.set(false);
    }
  }
}