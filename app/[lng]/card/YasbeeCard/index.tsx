'use client';
import React, { useState } from 'react';
import { FeatureCard } from './FeatureCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

export const YasbeeCard: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'card');
  const features: Feature[] = [
    {
      id: 'transaction-monitoring',
      icon: '/icons/transaction-monitoring.svg',
      title: t('transactionMonitoring'),
      description: t('transactionMonitoringDesc'),
    },
    {
      id: 'fraud-prevention',
      icon: '/icons/fraud-prevention.svg',
      title: t('fraudPrevention'),
      description: t('fraudPreventionDesc'),
    },
    {
      id: 'transaction-blocking',
      icon: '/icons/transaction-blocking.svg',
      title: t('transactionBlocking'),
      description: t('transactionBlockingDesc'),
    },
    {
      id: 'freeze-cards',
      icon: '/icons/freeze-cards.svg',
      title: t('freezeCards'),
      description: t('freezeCardsDesc'),
    },
  ];
  const [activeFeature, setActiveFeature] = useState<string>('transaction-monitoring');

  const handleFeatureClick = (featureId: string) => {
    setActiveFeature(featureId);
  };

  return (
    <section
      className=" max-w-[1408px] mx-auto flex flex-col items-stretch justify-center p-20 max-md:px-5"
      aria-labelledby="yasbee-title"
    >
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <header className="text-center mb-20 max-md:mb-10">
          <h1
            id="yasbee-title"
            className="text-[#1C1C1C] text-[56px] font-bold leading-[1.3] tracking-[-2.24px] self-center max-md:max-w-full max-md:text-[40px]"
          >
            {t('whyYASBeCorporateCard')}
          </h1>
        </header>

        <div className="flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
          <aside
            data-aos="zoom-in"
            className="bg-white shadow-[0px_4px_64px_-20px_rgba(0,0,0,0.2)] self-stretch flex min-w-60 flex-col overflow-hidden items-center justify-center flex-1 shrink basis-[0%] my-auto px-[25px] py-10 rounded-2xl max-md:max-w-full max-md:px-5"
          >
            <img
              src="/images/yasbee-card-showcase.png"
              alt="YASBe Corporate Card showcase"
              className="aspect-[0.79] object-contain w-[550px] max-w-full rounded-2xl"
            />
          </aside>
          <main
            data-aos="fade-up"
            className="self-stretch min-w-60 flex-1 shrink basis-[50px] my-auto max-md:max-w-full"
          >
            <nav className="space-y-4" role="tablist" aria-label="Corporate card features">
              {features.map(feature => (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  isActive={activeFeature === feature.id}
                  onClick={() => handleFeatureClick(feature.id)}
                />
              ))}
            </nav>
          </main>
        </div>
      </div>
    </section>
  );
};
