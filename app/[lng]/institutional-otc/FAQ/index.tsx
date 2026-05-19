import React from 'react';
import { FAQHeader } from './FAQHeader';
import { FAQCard } from './FAQCard';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const FAQSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'institutional-otc');
  const questions = [
    {
      q: t('whatIsOTCOnRampAndOffRamp'),
      a: (
        <>
          <p className="self-stretch text-[#777] text-lg font-semibold leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-sm:text-base">
            {t('overTheCounterOTCTradingIsAPrivateAndFlexibleMethodForBuyingOrSellingCryptocurrencies')}
            {t('withoutRelyingOnPublicExchanges')}
            {t('unlikeTraditionalExchangesWhereTransactionsAreVisibleAndInfluencedByMarketFluctuations')}
          </p>
          <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-sm:text-base">
            {t('onRampRefersToUsingFiatCurrenciesToBuyCryptocurrenciesOrDigitalAssets')}
            <br />
            {t('offRampRefersToSellingCryptocurrenciesOrDigitalAssetsToFiatCurrencies')}
          </p>
        </>
      ),
      active: true,
    },
    {
      q: t('whyUseOTCDeskToTradeCrypto'),
      a: (
        <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-sm:text-base">
          {t('onRampRefersToUsingFiatCurrenciesToBuyCryptocurrenciesOrDigitalAssets')}
          <br />
          {t('offRampRefersToSellingCryptocurrenciesOrDigitalAssetsToFiatCurrencies')}
        </p>
      ),
    },
    {
      q: t('whichCurrenciesDoWeSupportForOTCTrading'),
      a: (
        <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-sm:text-base">
          {t('onRampRefersToUsingFiatCurrenciesToBuyCryptocurrenciesOrDigitalAssets')}
          <br />
          {t('offRampRefersToSellingCryptocurrenciesOrDigitalAssetsToFiatCurrencies')}
        </p>
      ),
    },
    {
      q: t('whyShouldYouUseUsForOTCCryptoTrading'),
      a: (
        <p className="self-stretch text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-sm:text-base">
          {t('onRampRefersToUsingFiatCurrenciesToBuyCryptocurrenciesOrDigitalAssets')}
          <br />
          {t('offRampRefersToSellingCryptocurrenciesOrDigitalAssetsToFiatCurrencies')}
        </p>
      ),
    },
  ];
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <section
        className="flex w-full max-w-[1280px] flex-col items-start gap-20 relative box-border mx-auto my-0 p-20 max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10"
        aria-labelledby="faq-title"
        data-aos="fade-up"
      >
        <FAQHeader
          title={t('questions')}
          description={t('getClarityOnOTCOnRampOffRampAndHowOurDeskCanHelpYouTradeSmarter')}
        />

        <div className="flex w-full max-w-screen-xl flex-col items-start gap-6 relative max-md:max-w-full">
          {!!questions?.length &&
            questions.map((qna, index) => (
              <FAQCard key={index} index={index} question={qna.q} defaultExpanded={qna.active}>
                {qna.a}
              </FAQCard>
            ))}
        </div>
      </section>
    </>
  );
};
