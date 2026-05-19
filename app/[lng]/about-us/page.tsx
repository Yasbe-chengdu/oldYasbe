'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { OurStory } from './OurStory';
import { AboutSection } from './AboutSection';
import { VisionMissionSection } from './VisionMissionSection';

export default function AboutUs() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'about-us');
  return (
    <div>
      <HeroSection
        title1={t('empoweringBusinessesBridgingEconomies')}
        title2={t('bridgingEconomies')}
        desc={t('helpingSmbsGrowThroughGlobalFinancialSolutions')}
        image="/banner/about-us.png"
      />
      <OurStory />
      <AboutSection />
      <VisionMissionSection />
      <GetStarted />
      <Footer />
    </div>
  );
}
