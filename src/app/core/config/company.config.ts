import { environment } from '../../../environments/environment';

export interface SocialLink {
  id: 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'linkedin' | 'github';
  label: string;
  url: string;
  /** true : lien de l'entreprise, repris dans les données structurées (sameAs) */
  organization: boolean;
}

export const COMPANY = {
  name: 'Sidof',
  url: environment.siteUrl,
  email: 'sidof190@gmail.com',
  phone: '+237696444653',
  phoneDisplay: '+237 696 44 46 53',
  /** Format wa.me : sans le « + » */
  whatsapp: '237696444653',
  address: {
    street: 'Nouvelle route Tam-Tam',
    city: 'Yaoundé',
    countryCode: 'CM',
  },
} as const;

export const SOCIALS: readonly SocialLink[] = [
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/Sidof3/', organization: true },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/sidof_3', organization: true },
  { id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@sidof89', organization: true },
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@sidof8065', organization: true },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/sidof-dountio', organization: false },
  { id: 'github', label: 'GitHub', url: 'https://github.com/sidofdountio', organization: false },
];