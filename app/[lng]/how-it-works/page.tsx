'use client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { TheRiseSection } from './TheRiseSection';
import { ExploreSection } from './ExploreSection';
import { HowReturn } from './HowReturn';
import { WhatAreDeals } from './WhatAreDeals';
import { WhatYouGet } from './WhatYouGet';
import { TakeControl } from './TakeControl';
import { DueDiligence } from './DueDiligence';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export default function InstitutionalOTC() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'how-it-works');
  return (
    <>
      <HeroSection
        title1={t('whatCanIInvestIn')}
        title2={t('investIn')}
        desc={t('seeWhatsPossibleWhenYouInvestBeyondTheTradFiMarket')}
        image="/banner/how-it-works.png"
        hideCTA
        titlesRow
      />
      <TheRiseSection />
      <ExploreSection />
      <WhatYouGet />
      <HowReturn />
      <WhatAreDeals />
      <TakeControl />
      <DueDiligence />
      <GetStarted />
      <Footer />
    </>
  );
}
