'use client';
import React from 'react';
import { FeatureList } from './FeatureList';
import { ActionButton } from '@/components/ActionButton';
import { SectionHeader } from '@/components/SectionHeader';
import { SectionContainer } from '@/components/SectionContainer';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const InstitutionalOTC: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  const router = useRouter();
  const features = [
    { text: t('institutionalOTCFeatures1') },
    { text: t('institutionalOTCFeatures2') },
    { text: t('institutionalOTCFeatures3') },
  ];

  return (
    <SectionContainer>
      <div className="bg-white shadow-[0px_8px_40px_-20px_rgba(0,0,0,0.1)] flex w-[1280px] max-w-full gap-[40px_64px] flex-wrap px-16 py-20 rounded-2xl max-md:flex-col max-md:gap-[40px] max-md:px-5 max-md:py-10">
        <div
          className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <header className="w-full max-md:max-w-full">
            <SectionHeader title={t('institutionalOTC')} desc={t('institutionalOTCDesc2')} />
            <FeatureList title={t('institutionalOTCFeatures')} features={features} />
          </header>
          <div>
            <ActionButton
              onClick={() => {
                router.push('https://trade.beeznis.com/auth/register');
              }}
              label={t('findOutMore')}
              black
            />
          </div>
        </div>
        <div
          className="aspect-[0.83] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto rounded-2xl max-md:max-w-full"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="/images/home-institutional-otc-two.png"
            alt={t('institutionalOTCImage')}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
