'use client';

import React from 'react';
import { ActionButton } from './ActionButton';
import HeaderMenu from './HeaderMenu';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface HeroSectionProps {
  children?: React.ReactNode;
  title1?: string;
  title2?: string;
  desc?: string | string[];
  image?: string;
  hideCTA?: boolean;
  titlesRow?: boolean;
}

export const HeroSection = ({ children, title1, title2, desc, image, hideCTA, titlesRow }: HeroSectionProps) => {
  const router = useRouter();
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'header-menu');
  return (
    <section className="flex justify-center p-4">
      <div className="max-w-full overflow-hidden rounded-2xl">
        <div className="flex flex-col relative lg:max-h-[934px] w-full max-md:max-w-full">
          <img src={image} alt="Background" className="absolute h-full w-full object-cover inset-0" />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.5) 100%)' }}
          />
          <div className="relative flex flex-col pb-[327px] max-md:max-w-full max-md:pb-[100px] z-20">
            <HeaderMenu />
            <div className="w-[1400px] max-w-full mx-auto my-[29px]">
              <main className="flex mb-[-65px] w-full flex-col items-center justify-center mt-44 max-md:mt-10 max-md:mb-2.5">
                <div className="flex w-full flex-col items-center text-center justify-center max-md:max-w-full mt-[120px]">
                  <div
                    className={`flex ${
                      titlesRow ? 'flex-row gap-4' : 'flex-col'
                    } items-center text-[56px] font-bold tracking-[-2.24px] leading-[1.3] max-md:flex-col max-md:max-w-full max-md:text-[40px]`}
                  >
                    <h1 data-aos="flip-up" className="text-white  max-md:text-[40px]">
                      {title1}
                    </h1>
                    <h1
                      data-aos="flip-up"
                      data-aos-delay="200"
                      className="bg-clip-text text-transparent bg-gradient-to-b from-[#FFCA00] via-[#FFCA00] to-white max-md:text-[40px]"
                      style={{
                        backgroundImage: 'linear-gradient(180deg, #FFCA00 20.55%, #FFF 103.03%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {title2}
                    </h1>
                  </div>
                  <p
                    data-aos="fade-up"
                    className="w-[750px]  text-white text-lg font-normal leading-[1.6] tracking-[-0.36px] mt-4 max-md:max-w-full"
                  >
                    {desc}
                  </p>
                  {!hideCTA && (
                    <ActionButton
                      onClick={() => {
                        router.push('https://trade.beeznis.com/auth/register');
                      }}
                      label={t('tryForFree')}
                      className="self-center"
                    />
                  )}
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
