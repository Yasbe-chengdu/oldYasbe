import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const InstitutionalGrade: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'institutional-otc');
  const features = [
    {
      icon: `/icons/Handshake.svg`,
      title: t('Onboarding'),
      description: t('personalizedGuidanceThroughKYCKYBWithAlwaysOnChatSupportEnsuringAFastAndSmoothOnboardingProcess'),
    },
    {
      icon: `/icons/ChartBar.svg`,
      title: t('Trade'),
      description: t('otcTradesWithSecureChatConfirmingAssetSizeAndPriceDirectlyWithOurTradeDesk'),
    },
    {
      icon: `/icons/Coins.svg`,
      title: t('Execution'),
      description: t('executionWithFlexibleSettlementToYourBankExchangeOrExternalWalletTypicallyWithin24Hours'),
    },
  ];

  return (
    <section
      className="flex w-full max-w-[1280px] flex-col items-start gap-20 box-border mx-auto my-0 p-20 max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10"
      data-aos="fade-up"
    >
      <header className="flex flex-col justify-center items-center gap-6 w-full">
        <h1 className="text-[#1C1C1C] text-center text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-[32px] max-sm:leading-[38.4px] max-sm:tracking-[-1.28px]">
          {t('institutionalGradeOtcTrade')}
        </h1>
        <p className="w-full max-w-[1094px] text-[#777] text-center text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:max-w-[900px] max-sm:text-base max-sm:leading-6">
          {t(
            'weWorkWithTraditionalInstitutionsLookingToBeginTheirDigitalAssetsJourneyAndEstablishedDigitalAssetsTraders',
          )}
        </p>
      </header>

      <div className="flex w-full max-w-screen-xl flex-col items-start gap-16 shadow-[0px_8px_40px_-20px_rgba(0,0,0,0.10)] box-border bg-white mx-auto my-0 p-16 rounded-2xl max-md:gap-12 max-md:p-12 max-sm:gap-8 max-sm:px-6 max-sm:py-8">
        <div
          className="grid lg:grid-cols-3 grid-cols-1 gap-6 w-full max-md:flex-col max-md:gap-6"
          role="list"
          aria-label={t('tradingPlatformFeatures')}
        >
          {features.map((feature, index) => (
            <div key={index} role="listitem">
              <FeatureCard index={index} icon={feature.icon} title={feature.title} description={feature.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
