import { ActionButton } from '@/components/ActionButton';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const HeroSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  const router = useRouter();
  return (
    <header className="flex w-full justify-between items-start gap-10 max-md:flex-col max-md:gap-10">
      <div className="flex flex-col justify-center items-start">
        <h1 className="w-[542px] text-white text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] max-md:w-full max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
          {t('hero.title3')}
        </h1>
        <div className="text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] bg-gradient-to-r from-[#FFCA00] to-[#FFE066] bg-clip-text text-transparent max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
          {t('hero.title4')}
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 md:ml-[250px]">
        <p className="w-[435px] text-[#A5A5A5] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:w-full max-md:max-w-[500px] max-sm:text-base max-sm:tracking-[-0.32px]">
          {t('hero.desc2')}
        </p>
        <div>
          <ActionButton
            onClick={() => {
              router.push('https://trade.beeznis.com/auth/register');
            }}
            label={t('hero.button')}
          />
        </div>
      </div>
    </header>
  );
};
