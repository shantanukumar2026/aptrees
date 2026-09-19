import { translations } from '../translations';

export type Language = 'en' | 'es';
export type TranslationType = (typeof translations)['en'];

export interface ServiceItem {
  title: string;
  img: string;
}
