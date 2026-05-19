'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { FeatureSection } from './FeatureSection';
import { JobListingsSection } from './JobListingsSection';

export default function Careers() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'careers');
  return (
    <div>
      <HeroSection
        title1={t('buildYour')}
        title2={t('futureWithUs')}
        desc={t('joinAForwardThinkingCompanyWhereYourSkillsAndIdeasShapeTheFuture')}
        image="/banner/careers.png"
      />
      <FeatureSection />
      <JobListingsSection />
      <GetStarted />
      <Footer />
    </div>
  );
}
