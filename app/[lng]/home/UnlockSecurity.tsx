import React from 'react';
import LottiePlayer from '@/components/LottiePlayer';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const UnlockSecurity: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  return (
    <section className="flex flex-col items-center justify-center px-16 py-20 max-md:px-5">
      <div className="bg-white shadow-[0px_8px_40px_-20px_rgba(0,0,0,0.1)] flex max-md:flex-col w-[1280px] max-w-full gap-[40px_64px] px-16 py-20 rounded-2xl max-md:px-5">
        <div data-aos="zoom-in" data-aos-delay="100">
          <div className={`aspect-[2.15] object-contain w-full min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full`}>
            <LottiePlayer source="lottie-security.json" />
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100">
          <article className="min-w-60 min-h-[257px] w-[536px] max-md:max-w-full">
            <header>
              <h2 className="text-[#1C1C1C] text-[56px] font-bold leading-[73px] tracking-[-2.24px] max-md:max-w-full max-md:text-[40px] max-md:leading-[58px]">
                {t('unlockSecurity')}
              </h2>
            </header>
            <p className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] mt-6 max-md:max-w-full">
              {t('unlockSecurityDesc')}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
