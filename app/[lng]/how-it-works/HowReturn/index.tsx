import React from 'react';
import { FeatureCard } from './FeatureCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const HowReturn: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'how-it-works');
  return (
    <section className=" flex flex-col items-stretch justify-center p-20 max-md:px-5 container mx-auto">
      <div className="flex max-w-full w-[1280px] items-stretch gap-[40px_80px] justify-center flex-wrap">
        <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] max-md:max-w-full">
          <h1
            className="text-[#1C1C1C] text-[56px] font-bold leading-[73px] tracking-[-2.24px] max-md:max-w-full max-md:text-[36px] max-md:leading-[43.2px]"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            {t('howReturnsWorkAtYASBe')}
          </h1>
          <p
            className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] mt-6 max-md:max-w-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t(
              'fromLumpSumPayoutsToOngoingEarningsEachInvestmentIsStructuredDifferentlyWithOver25MAlreadyReturnedToInvestors',
            )}
          </p>
        </div>
        <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
          <FeatureCard
            iconSrc="/icons/hiw-retrun.svg"
            iconAlt="Investment structure icon"
            title={t('everyInvestmentPaysDifferently')}
            description={t('someOfferAOneTimePayoutOthersProvideOngoingRecurringPaymentsDependingOnTheDealStructure')}
          />
          <div className="mt-6">
            <FeatureCard
              iconSrc="/icons/hiw-retrun-2.svg"
              iconAlt="Returns to investors icon"
              title={t('returnedToInvestors')}
              description={t('acrossStartupsCryptoRealEstateAndMoreWeveFacilitatedOver25MAlreadyReturnedToInvestors')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
