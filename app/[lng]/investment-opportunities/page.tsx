'use client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { OpportunitiesBeyond } from './OpportunitiesBeyond';
import { Opportunities } from './Opportunities';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export default function InstitutionalOTC() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'investment-opportunities');
  return (
    <>
      <HeroSection
        title1={t('title1')}
        title2={t('title2')}
        desc={t('desc')}
        image="/banner/investment-opportunities.png"
      />
      <OpportunitiesBeyond />
      <Opportunities />
      <GetStarted variant="investment" />
      <Footer />
    </>
  );
}
