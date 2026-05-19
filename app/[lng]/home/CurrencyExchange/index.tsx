import React from 'react';
import { ExchangeWidget } from './ExchangeWidget';
import { ActionButton } from '@/components/ActionButton';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const CurrencyExchange: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  const router = useRouter();
  return (
    <section className="flex flex-col items-center justify-center px-16 py-20 max-md:px-5">
      <div className="bg-white shadow-[0px_8px_40px_-20px_rgba(0,0,0,0.1)] flex w-[1280px] max-w-full gap-[40px_64px] flex-wrap px-16 py-20 rounded-2xl max-md:px-5">
        <div className="flex flex-1 min-w-0 items-center gap-20 max-md:flex-col max-md:gap-10">
          <header
            className="flex flex-col justify-center items-start gap-8 flex-1 min-w-0 max-md:items-center max-md:text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="flex flex-col items-start gap-6 w-full">
              <h1 className="text-[#1C1C1C] text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
                {t('liveExchangeRates')}
              </h1>
              <p className="w-[35rem] max-w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:w-full max-md:max-w-[600px] max-sm:text-base">
                {t('liveExchangeRatesDesc')}
              </p>
            </div>
            <ActionButton
              onClick={() => {
                router.push('https://trade.beeznis.com/auth/register');
              }}
              label={t('tryNow')}
              black
            />
          </header>
          <div
            className="flex-1 min-w-0 flex justify-center items-center w-full max-md:w-full max-md:mt-8"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <ExchangeWidget />
          </div>
        </div>
      </div>
    </section>
  );
};
