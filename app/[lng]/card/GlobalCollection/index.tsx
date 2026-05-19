import React from 'react';
import { PaymentInterface } from './PaymentInterface';
import { ContentSection } from './ContentSection';
import { SectionContainer } from '@/components/SectionContainer';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const GlobalCollection = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'card');
  return (
    <SectionContainer>
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <header className="text-center mb-20 max-md:mb-10">
          <h1 className="text-[#1C1C1C] text-[56px] font-bold leading-[1.3] tracking-[-2.24px] self-center max-md:max-w-full max-md:text-[40px]">
            {t('globalCollectionAndPayoutCoverage')}
          </h1>
        </header>

        <div className="flex w-full items-stretch gap-[40px_80px] justify-center flex-wrap max-md:max-w-full">
          <PaymentInterface />
          <ContentSection />
        </div>
      </div>
    </SectionContainer>
  );
};
