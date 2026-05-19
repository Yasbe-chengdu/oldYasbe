import React from 'react';
import { FeatureCard } from './FeatureCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface FeatureData {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  features?: FeatureData[];
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'collection-payout');

  const defaultFeatures: FeatureData[] = [
    {
      id: 'global-business',
      imageSrc: '/images/feature-image-1.png',
      imageAlt: 'Global business operations visualization',
      title: t('feature1Title'),
      description: t('feature1Description'),
    },
    {
      id: 'global-potential',
      imageSrc: '/images/feature-image-2.png',
      imageAlt: 'Global potential and market expansion',
      title: t('feature2Title'),
      description: t('feature2Description'),
    },
  ];

  const featureList = features || defaultFeatures;

  return (
    <section
      className="flex w-full flex-col items-center gap-2.5 bg-[#f8f9fa] p-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10"
      aria-labelledby="features-heading"
    >
      <div className="flex w-full max-w-screen-xl items-start gap-6 max-md:flex-col max-md:gap-8">
        {featureList.map(feature => (
          <FeatureCard
            key={feature.id}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
