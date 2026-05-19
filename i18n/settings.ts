import { languages } from '@/constants';

export const fallbackLng: string = 'en';
export const supportedLngs: string[] = languages;
export const defaultNS: string = 'translation';
export const cookieName: string = 'i18next';
export function getOptions(lng: string = fallbackLng, ns: string = defaultNS) {
  return {
    // debug: true,
    supportedLngs,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
