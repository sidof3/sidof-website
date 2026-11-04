import type { Lang } from '../i18n/lang';

/** Un texte (ou une valeur) dans chaque langue, côte à côte. */
export type Localized<T = string> = Record<Lang, T>;

/** Lecture dans la langue courante : pick(land.title, lang.lang()) */
export function pick<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}

/** Images et vidéo : les champs existent toujours, Sidof renseigne ensuite les bons chemins. */
export interface Media {
  /** Chemin sous public/images/, ou l'image par défaut tant qu'il n'y a pas de photo */
  image: string;
  /** Texte alternatif : y mettre le quartier et la ville */
  imageAlt: Localized;
  /** Photos supplémentaires, même règle */
  gallery: string[];
   /** Liens YouTube (vidéo, lien court ou Short), à remplacer par les vôtres */
  videos: string[];
}