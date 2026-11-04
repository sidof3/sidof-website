import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface ConsentChoices {
  statistics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'sidof-consent';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 12 mois

@Injectable({ providedIn: 'root' })
export class ConsentService {
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  /** false sur le serveur et avant la lecture du choix : le bandeau ne s'affiche pas. */
  private readonly ready = signal(false);
  /** null = le visiteur n'a pas encore choisi. Les cookies nécessaires sont toujours actifs. */
  readonly choices = signal<ConsentChoices | null>(null);
  private readonly settingsOpen = signal(false);

  /** Le bandeau s'affiche au premier accès, ou quand le visiteur clique sur « Gérer mes cookies ». */
  readonly visible = computed(() => this.ready() && (this.choices() === null || this.settingsOpen()));

  /** À lire par le chargement de Tag Manager (phase 5) : true seulement après acceptation. */
  readonly statisticsAllowed = computed(() => this.choices()?.statistics === true);
  readonly marketingAllowed = computed(() => this.choices()?.marketing === true);

  constructor() {
    if (!this.browser) return;
    this.choices.set(this.read());
    this.ready.set(true);
  }

  acceptAll(): void {
    this.set({ statistics: true, marketing: true });
  }

  refuseAll(): void {
    this.set({ statistics: false, marketing: false });
  }

  save(choices: ConsentChoices): void {
    this.set(choices);
  }

  /** Lien « Gérer mes cookies » du pied de page. */
  openSettings(): void {
    this.settingsOpen.set(true);
  }

  private set(choices: ConsentChoices): void {
    this.choices.set(choices);
    this.settingsOpen.set(false);
    this.write(choices);
  }

  private read(): ConsentChoices | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw) as { statistics?: boolean; marketing?: boolean; date?: number };
      if (!data.date || Date.now() - data.date > MAX_AGE_MS) return null;
      return { statistics: data.statistics === true, marketing: data.marketing === true };
    } catch {
      return null; // stockage indisponible ou contenu illisible : on redemande
    }
  }

  private write(choices: ConsentChoices): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...choices, date: Date.now() }));
    } catch {
      // navigation privée ou stockage plein : le choix vaut pour la session seulement
    }
  }
}