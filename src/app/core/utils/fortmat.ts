import type { Lang } from '../i18n/lang';
import { PricePerM2, LandLot } from '../models/land';

const LOCALES: Record<Lang, string> = { fr: 'fr-FR', en: 'en-US' };

export function formatPrice(amount: number, lang: Lang): string {
  return `${new Intl.NumberFormat(LOCALES[lang]).format(amount)} FCFA`;
}

/** 10 000 – 13 000 FCFA/m² */
export function formatPricePerM2(price: PricePerM2, lang: Lang): string {
  const number = new Intl.NumberFormat(LOCALES[lang]);
  const range = price.max ? `${number.format(price.min)} – ${number.format(price.max)}` : number.format(price.min);
  return `${range} FCFA/m²`;
}

/** 7 000 m² ; à partir de 10 000 m², en hectares : 3,5 ha */
export function formatArea(squareMeters: number, lang: Lang): string {
  if (squareMeters >= 10_000) {
    const hectares = new Intl.NumberFormat(LOCALES[lang], { maximumFractionDigits: 2 }).format(squareMeters / 10_000);
    return `${hectares} ha`;
  }
  return `${new Intl.NumberFormat(LOCALES[lang]).format(squareMeters)} m²`;
}

/** « 3,5 ha » ou « 2 × 3,5 ha » */
export function formatLot(lot: LandLot, lang: Lang): string {
  const area = formatArea(lot.surfaceM2, lang);
  return lot.count > 1 ? `${lot.count} × ${area}` : area;
}

export interface YoutubeVideo {
  id: string;
  /** true pour un YouTube Short (format vertical) */
  short: boolean;
}

const VIDEO_ID = /^[\w-]{11}$/;

/** Renvoie null si le lien n'est pas un lien YouTube valide (par exemple le texte à remplacer). */
export function parseYoutube(url: string): YoutubeVideo | null {
  let parsed: URL;
  try {
    parsed = new URL(url.trim());
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^(www|m)\./, '');
  const parts = parsed.pathname.split('/').filter(Boolean);
  let id: string | null = null;
  let short = false;

  if (host === 'youtu.be') {
    id = parts[0] ?? null;
  } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    if (parts[0] === 'shorts') {
      id = parts[1] ?? null;
      short = true;
    } else if (parts[0] === 'embed' || parts[0] === 'live') {
      id = parts[1] ?? null;
    } else {
      id = parsed.searchParams.get('v');
    }
  }

  return id && VIDEO_ID.test(id) ? { id, short } : null;
}