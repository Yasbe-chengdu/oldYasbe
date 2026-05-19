'use client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { OurProject } from './OurProject';
import { WhatGivesUs } from './WhatGivesUs';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export default function SelectProjects() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'select-projects');
  return (
    <>
      <HeroSection
        title1={t('title1')}
        title2={t('title2')}
        desc={t('desc')}
        image="/banner/select-projects-hero.png"
        titlesRow
        hideCTA
      />
      <OurProject />
      <WhatGivesUs />
      <GetStarted />
      <Footer />
    </>
  );
}
