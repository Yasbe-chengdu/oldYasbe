'use client';
import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { StablecoinSection } from './StablecoinSection';
import { InstantAccess } from './InstantAccess';
import { AcceptStablecoin } from './AcceptStablecoin';
import { MultiboxSection } from '@/components/MultiboxSection';
import { YasbeSolution } from './YasbeSolution';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export default function StablecoinCheckout() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'stablecoin-checkout');
  const data = [
    {
      icon: `<img src="/icons/card.png" />`,
      title: t('oneStopFiatOffRamps'),
      description: t('oneStopFiatOffRampsDesc'),
    },
    {
      icon: `<img src="/icons/bag-tick.png" />`,
      title: t('transparentSecurePayments'),
      description: t('transparentSecurePaymentsDesc'),
    },
    {
      icon: `<img src="/icons/world.png" />`,
      title: t('doingBusinessWithoutBorders'),
      description: t('doingBusinessWithoutBordersDesc'),
    },
    {
      icon: `<img src="/icons/hand-up.png" />`,
      title: t('doBusinessWithConfidence'),
      description: t('doBusinessWithConfidenceDesc'),
    },
  ];
  return (
    <>
      <HeroSection title1={t('title1')} title2={t('title2')} desc={t('desc')} image="/banner/stablecoin.png" />
      <StablecoinSection />
      <InstantAccess />
      <AcceptStablecoin />
      <YasbeSolution />
      <MultiboxSection title={t('whyYasbeStablecoinCheckout')} data={data} />
      <GetStarted />
      <Footer />
    </>
  );
}
