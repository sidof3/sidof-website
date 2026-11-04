import { fr } from './fr';
import { en } from './en';
import type { Translations } from './fr';
import type { Lang } from './lang';

export const TRANSLATIONS: Record<Lang, Translations> = { fr, en };

/** Clés de page, utilisées par data.page des routes et par SeoService */
export type PageKey = keyof Translations['pages'];

/** Remplace {nom} par une valeur : format('Bonjour {subject}', { subject: 'terrain' }) */
export function format(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}