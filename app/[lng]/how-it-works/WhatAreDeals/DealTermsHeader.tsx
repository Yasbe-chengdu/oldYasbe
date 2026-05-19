import React from 'react';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const DealTermsHeader: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'how-it-works');
  return (
    <header className="flex justify-center items-start gap-[148px] w-full max-md:flex-col max-md:gap-8 max-md:items-center max-md:text-center">
      <h1 className="w-[650px] text-[#1C1C1C] text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] max-md:w-full max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:leading-[43.2px] max-sm:tracking-[-1.44px] max-sm:text-start">
        {t('whatAreDealTerms')}
      </h1>
      <p className="w-[480px] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:w-full max-md:max-w-[600px] max-sm:text-base max-sm:leading-6 max-sm:text-start">
        {t('whenStartupsRaiseCapitalOnYASBeTheyDefineTheirOwnDealTermsHereIsABreakdownOfHowItAllWorks')}
        {t('toHelpGuideYourNextInvestment')}
      </p>
    </header>
  );
};
