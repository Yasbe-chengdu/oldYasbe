'use client';

import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, cookieName, fallbackLng } from './settings';
import { languages } from '@/constants';

const runsOnServerSide: boolean = typeof window === 'undefined';

function getDefaultLanguage() {
  let defaultLang = fallbackLng;
  if (typeof window !== 'undefined') {
    const browserLang = navigator.languages || [navigator.language];
    if (browserLang?.length) {
      defaultLang = browserLang[0]?.split('-')[0];
    }
  }
  return defaultLang;
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    ...(getOptions() as any),
    lng: getDefaultLanguage(),
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation(lng: string, ns: string, options: any = {}) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const { t, i18n } = useTranslationOrg(ns, options);
  const [activeLng, setActiveLng]: any = useState(i18n.resolvedLanguage);

  useEffect(() => {
    if (activeLng !== i18n.resolvedLanguage) {
      setActiveLng(i18n.resolvedLanguage);
    }
  }, [activeLng, i18n.resolvedLanguage]);

  useEffect(() => {
    if (lng && lng !== i18n.resolvedLanguage) {
      i18n.changeLanguage(lng);
      console.log('change', lng);
    }
  }, [lng, i18n]);

  useEffect(() => {
    if (cookies.i18next !== lng) {
      setCookie(cookieName, lng, { path: '/' });
    }
  }, [lng, cookies.i18next]);

  return { t, i18n };
}
