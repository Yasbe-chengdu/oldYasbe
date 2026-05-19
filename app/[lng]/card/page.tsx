'use client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { CryptoPaymentSection } from './CryptoPaymentSection';
import { GlobalCollection } from './GlobalCollection';
import { CorporateCard } from './CorporateCard';
import { YasbeeCard } from './YasbeeCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export default function Card() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'card');
  return (
    <>
      <HeroSection title1={t('title1')} title2={t('title2')} desc={t('desc')} image="/banner/card.png" />
      <CryptoPaymentSection />
      <GlobalCollection />
      <CorporateCard />
      <YasbeeCard />
      <GetStarted />
      <Footer />
    </>
  );
}
