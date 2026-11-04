import type { PageKey } from '../i18n/translations';
import type { Localized, Media } from './common';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost extends Media {
  /** Identique en français et en anglais */
  slug: string;
  title: Localized;
  excerpt: Localized;
  body: Localized<BlogSection[]>;
  /** Date de publication, au format 2026-10-30 */
  date: string;
  updated?: string;
}

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
  /** Pages où la question apparaît (en plus de la page FAQ) */
  pages?: PageKey[];
}