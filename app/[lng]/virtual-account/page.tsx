'use client';
import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { StreamlineTransactions } from './StreamlineTransactions';
import { BrandedAccountsSection } from './Branded Accounts';
import { MultiboxSection } from '@/components/MultiboxSection';
import { EverythingYouNeed } from '@/components/EverythingYouNeed';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export default function VirtualAccount() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'virtual-account');
  const data = [
    {
      icon: '/icons/Rocket.svg',
      title: t('title4'),
      description: t('desc4'),
    },
    {
      icon: '/icons/Internet.svg',
      title: t('title5'),
      description: t('desc5'),
    },
    {
      icon: '/icons/Diagram.svg',
      title: t('title6'),
      description: t('desc6'),
    },
    {
      icon: '/icons/Money.svg',
      title: t('title7'),
      description: t('desc7'),
    },
  ];
  return (
    <>
      <HeroSection title1={t('title1')} title2={t('title2')} desc={t('desc')} image="/banner/virtual-account.png" />
      <StreamlineTransactions />
      <BrandedAccountsSection />
      <EverythingYouNeed
        sectionTitle={t('sectionTitle')}
        singleContent={{
          image: '/images/virtual-account.svg',
        }}
      />
      <MultiboxSection title={t('title3')} data={data} />
      <GetStarted />
      <Footer />
    </>
  );
}
