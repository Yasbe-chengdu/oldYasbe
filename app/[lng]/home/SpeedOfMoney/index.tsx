import React from 'react';
import { HeroSection } from './HeroSection';
import LottiePlayer from '@/components/LottiePlayer';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const SpeedOfMoney: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex w-full flex-col items-start gap-2.5 box-border bg-black px-4 py-20 max-md:px-4 max-md:py-[60px] max-sm:px-4 max-sm:py-10 font-['Plus_Jakarta_Sans']">
        <div className="flex w-full max-w-[1408px] flex-col items-start gap-20 box-border mx-auto my-0 px-16 py-20 rounded-2xl max-md:gap-[60px] max-md:px-8 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10">
          <div data-aos="zoom-in" data-aos-delay="100">
            <HeroSection />
          </div>
          <section className="flex flex-col items-start gap-5 self-stretch">
            <section className="w-full" data-aos="zoom-in" data-aos-delay="200">
              <LottiePlayer source="lottieplayer-two.json" alt={t('hero.desc3')} />
            </section>
            <div data-aos="zoom-in" data-aos-delay="300"></div>
          </section>
        </div>
      </main>
    </>
  );
};
