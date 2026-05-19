import React from 'react';
import { BenefitCard } from './BenefitCard';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const BenefitsGrid: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'corporate-treasury');
  const benefits = [
    {
      icon: '/icons/CheckCircle.png',
      title: t('oneStopFiatOffRamps'),
      description: t('seamlessConversionToFiatIntoYourCompanySOwnNamedAccountOrThirdPartyBeneficiaries'),
    },
    {
      icon: '/icons/CheckCircle.png',
      title: t('enhancedSecurityAndTransparency'),
      description: t('onChainTraceabilityWithKytEnabledTransactionMonitoring'),
    },
    {
      icon: '/icons/CheckCircle.png',
      title: t('noGeographicLimits'),
      description: t('acceptPaymentsGloballyEnablingNewMarketsWithoutPaymentInfrastructureDependencies'),
    },
    {
      icon: '/icons/CheckCircle.png',
      title: t('predictableValue'),
      description: t('peggedToFiatCurrenciesStablecoinsEliminateTheVolatilityAssociatedWithCryptoPayments'),
    },
  ];
  return (
    <section
      data-aos="fade-up"
      className="w-full bg-[#F7F7F7] mt-[60px] p-10 rounded-2xl border-2 border-solid border-[#EFEFEF] max-md:max-w-full max-md:mt-10 max-md:px-5"
    >
      <header>
        <h2 className="text-[#1C1C1C] text-2xl font-semibold leading-[1.2] tracking-[-0.48px]">{t('keyBenefits')}</h2>
      </header>
      <div className="flex w-full gap-6 text-lg text-center tracking-[-0.36px] flex-wrap mt-8 max-md:max-w-full">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
        ))}
      </div>
    </section>
  );
};
