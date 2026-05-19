import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';
import React from 'react';

export const HeroContent: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'institutional-otc');
  return (
    <header
      className="w-[736px] text-white text-[40px] font-bold leading-[52px] tracking-[-0.8px] absolute h-[156px] left-[60px] top-[30%] max-md:w-full max-md:max-w-[600px] max-md:text-[32px] max-md:h-auto max-md:leading-[38.4px] max-md:left-5 max-sm:text-2xl max-sm:w-[calc(100%_-_40px)] max-sm:max-w-none max-sm:leading-[26.4px] max-sm:tracking-[-0.4px] max-sm:left-5 z-10"
      data-aos="zoom-in"
    >
      <h1 className="text-white">
        <span className="block">{t('weProvideDeepLiquidityWithReliableOnAndOffRampCapability')}</span>
        <span className="flex justify-start items-start gap-2">
          <span>{t('atMost')}</span>
          <span
            className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(90deg, #FDE560 0%, #FF6F00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('competitivePricing')}
          </span>
        </span>
      </h1>
    </header>
  );
};
