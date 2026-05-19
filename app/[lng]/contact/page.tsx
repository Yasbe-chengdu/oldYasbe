'use client';

import React from 'react';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ContactSection } from './ContactSection';
import { ServicesSection } from './ServicesSection';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export default function Contact() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'contact');
  return (
    <>
      <HeroSection
        title1={t('ourExpertsAreReadyTo')}
        title2={t('helpGrowYourBusiness')}
        desc={t('desc')}
        image="/banner/contact.png"
        hideCTA
      >
        <ServicesSection />
      </HeroSection>
      <ContactSection />
      <Footer />
    </>
  );
}
