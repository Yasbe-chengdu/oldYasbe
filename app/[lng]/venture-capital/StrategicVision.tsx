import React from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const StrategicVision: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'venture-capital');
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col items-start gap-8 mt-10 self-stretch relative bg-[#F7F7F7] p-10 rounded-2xl border-2 border-solid border-[#EFEFEF] max-md:p-8 max-sm:gap-6 max-sm:p-6"
    >
      <h2 className="text-[#1C1C1C] text-2xl font-bold leading-[28.8px] tracking-[-0.48px] relative max-md:text-[22px] max-sm:text-xl">
        {t('strategicVision')}
      </h2>
      <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-sm:text-base max-sm:leading-6">
        {t(
          'yasbesSolutionsAreDesignedToEmpowerTheNextGenerationOfInvestmentStrategiesGivingVcsAndInvestmentFundsTheToolsTheyNeedToThriveInBothTheCryptoWorldAndTraditionalFinance',
        )}
      </p>
    </section>
  );
};
