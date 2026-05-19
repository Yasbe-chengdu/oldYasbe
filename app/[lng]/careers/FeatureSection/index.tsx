import React from 'react';
import { FeatureCard } from './FeatureCard';
import { SectionContainer } from '@/components/SectionContainer';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface FeatureData {
  id: string;
  iconSrc: string;
  iconAlt: string;
  description: string;
}

export const FeatureSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'careers');
  const featuresData: FeatureData[] = [
    {
      id: 'unique-strengths',
      iconSrc: '/icons/unique-strengths.svg',
      iconAlt: t('uniqueStrengthsIcon'),
      description: t('weValueEveryoneSUniqueStrengthsAndFosterAWorkplaceWhereYouCanGrowBeYourselfAndDoGreatWork'),
    },
    {
      id: 'collaboration-innovation',
      iconSrc: '/icons/collaboration-innovation.svg',
      iconAlt: t('collaborationAndInnovationIcon'),
      description: t('collaborationInnovationAndDiversityDriveUsJoinACommunityThatValuesYourVoiceAndIdeas'),
    },
    {
      id: 'growth-impact',
      iconSrc: '/icons/growth-impact.svg',
      iconAlt: t('growthAndImpactIcon'),
      description: t('whetherStartingOutOrSeekingANewChallengeWeOfferSpaceToLearnGrowAndMakeAnImpact'),
    },
  ];
  return (
    <SectionContainer>
      <h2 id="features-heading" className="sr-only">
        {t('ourCoreValuesAndFeatures')}
      </h2>
      <div className="flex max-w-full w-[1280px] items-center gap-6 flex-wrap">
        {featuresData.map(feature => (
          <FeatureCard
            key={feature.id}
            iconSrc={feature.iconSrc}
            iconAlt={feature.iconAlt}
            description={feature.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
