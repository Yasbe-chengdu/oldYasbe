'use client';
import React, { useEffect, useState } from 'react';
import { WorldClock } from './WorldClock';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const GlobalLocations: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'institutional-otc');
  const locations = [
    { city: t('london, UK'), timezone: 'Europe/London' },
    { city: t('singapore, SG'), timezone: 'Asia/Singapore' },
    { city: t('new york, USA'), timezone: 'America/New_York' },
  ];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Roboto:wght@400&display=swap"
      />
      <section
        className="flex w-full max-w-[1280px] flex-col items-start gap-20 relative mx-auto my-0 p-20 max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10"
        data-aos="fade-up"
      >
        <header className="flex flex-col justify-center items-center gap-6 self-stretch relative">
          <h1 className="w-[650px] text-[#1C1C1C] text-center text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative max-md:text-[42px] max-md:tracking-[-1.68px] max-md:w-full max-md:max-w-[500px] max-sm:text-[32px] max-sm:tracking-[-1.28px]">
            {t('globalLocations')}
          </h1>
        </header>
        {!!isClient && (
          <div className="flex justify-center items-start gap-20 self-stretch relative max-md:gap-[60px] max-md:flex-wrap max-sm:flex-col max-sm:gap-10 max-sm:items-center">
            {locations.map((location, index) => (
              <WorldClock key={index} index={index} city={location.city} timezone={location.timezone} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};
