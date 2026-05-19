'use client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { InstitutionalGrade } from './InstitutionalGrade';
import { ServicesSection } from './ServicesSection';
import { GlobalLocations } from './GlobalLocations';
import { DollarSection } from './DollarSection';
import { FAQSection } from './FAQ';
import { TermsSection } from './TermsSection';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export default function InstitutionalOTC() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'institutional-otc');
  return (
    <>
      <HeroSection
        title1={t('institutional')}
        title2={t('overTheCounter')}
        desc={t('empoweringTheNextGenerationOfInvestors')}
        image="/banner/institutional-otc.png"
      />
      <ServicesSection />
      <InstitutionalGrade />
      <DollarSection />
      <GlobalLocations />
      <FAQSection />
      <TermsSection />
      <GetStarted />
      <Footer />
    </>
  );
}
