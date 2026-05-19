'use client';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';
import React from 'react';

export const BottomBar: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'footer');

  return (
    <section className="flex flex-col items-start gap-5 self-stretch ">
      <div className="w-full">
        <svg
          width="1280"
          height="2"
          viewBox="0 0 1280 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="divider w-full"
          style={{ height: '0px', alignSelf: 'stretch', strokeWidth: '2px' }}
        >
          <path d="M0 1H1280" stroke="#1C1C1C" strokeOpacity="0.1" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex justify-between items-center self-stretch max-md:flex-col max-md:items-start max-md:gap-5">
        <div className="flex-[1_0_0] text-[#777] text-center text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-start">
          {t('copyright')} © YASBe 2025. {t('allRightsReserved')}
        </div>
      </div>
    </section>
  );
};
