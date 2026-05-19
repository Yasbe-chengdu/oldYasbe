import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const TermsSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'institutional-otc');
  const termsData = [
    {
      title: t('complianceRequired'),
      description: t('eligibilityForOTCTradingIsSubjectToApplicableKYCKYBAndAMLCKFTLawsAndRegulations'),
      className: 'w-[411px]',
    },
    {
      title: t('preFundingRequired'),
      description: t('allTradesMustBePreFundedInCryptoOffRampOrFiatOnRampYASBeDoesNotOfferCreditLinesOrMarginTrading'),
      className: 'w-auto flex-[1_0_0] max-md:flex-none',
    },
    {
      title: t('noAssetCustody'),
      description: t('yasBeDoNotHoldCustodyOfAnyCryptocurrencyOrDigitalAssetsOnBehalfOfTradingCounterparties'),
      className: 'w-[411px]',
    },
  ];
  return (
    <section
      className="flex w-full max-w-[1280px] flex-col items-start gap-20 relative box-border mx-auto my-0 py-20 max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10"
      data-aos="fade-up"
    >
      <header className="flex flex-col justify-center items-center gap-6 self-stretch relative">
        <h1 className="w-[650px] text-[#1C1C1C] text-center text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative max-md:w-full max-md:max-w-[650px] max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px] max-sm:leading-[43.2px]">
          {t('termAndEligibility')}
        </h1>
        <p className="w-[800px] text-[#777] text-center text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:w-full max-md:max-w-[580px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px]">
          {t('eligibilityRulesAndTradingGuidelines')}
        </p>
      </header>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 w-full max-md:flex-col max-md:gap-6">
        {termsData.map((term, index) => (
          <FeatureCard
            key={index}
            index={index}
            icon={`<div class="px-2">${index + 1}</div>`}
            title={term.title}
            description={term.description}
            className={term.className}
          />
        ))}
      </div>
    </section>
  );
};
