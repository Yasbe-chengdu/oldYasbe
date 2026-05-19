import React from 'react';
import { FeatureList } from './FeatureList';
import { ActionButton } from '@/components/ActionButton';
import { SectionHeader } from '@/components/SectionHeader';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const DualAsset: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  const features = [
    {
      id: 'disruptive-tech',
      text: t('dualAssetFeatures1'),
    },
    {
      id: 'crypto-innovators',
      text: t('dualAssetFeatures2'),
    },
    {
      id: 'infrastructure',
      text: t('dualAssetFeatures3'),
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center px-16 py-20 max-md:px-5">
      <div className="bg-white shadow-[0px_8px_40px_-20px_rgba(0,0,0,0.1)] flex w-[1280px] max-w-full gap-[40px_64px] flex-wrap px-16 py-20 rounded-2xl max-md:flex-col max-md:gap-[40px] max-md:px-5 max-md:py-10">
        <div
          className="aspect-[0.83] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto rounded-2xl max-md:max-w-full"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="/images/home-dual-asset.svg"
            alt={t('dualAssetImage')}
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
        <article
          className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="w-full max-md:max-w-full">
            <SectionHeader title={t('dualAssetTitle')} desc={t('dualAssetDesc')} />
            <FeatureList title={t('dualAssetFeatures')} features={features} />
          </div>
          <div className="mt-8">
            <ActionButton label={t('findOutMore2')} black />
          </div>
        </article>
      </div>
    </section>
  );
};
