'use client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Coverage } from './Coverage';
import { FeatureSection } from './FeatureSection';
import { EverythingYouNeed } from '@/components/EverythingYouNeed';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export default function CollectionPayout() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'collection-payout');
  return (
    <>
      <HeroSection
        title1={t('title1')}
        title2={t('title2')}
        desc={t('desc')}
        image="/banner/business-person-futuristic-business-environment.jpg"
      />
      <Coverage />
      <EverythingYouNeed
        sectionTitle={t('sectionTitle')}
        singleContent={{
          title: t('singleContentTitle'),
          image: '/images/global-collection-and-payout.svg',
          description: t('singleContentDescription'),
        }}
      />
      <FeatureSection />
      <GetStarted />
      <Footer />
    </>
  );
}
