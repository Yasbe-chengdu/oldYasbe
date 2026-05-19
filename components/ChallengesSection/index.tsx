import { ChallengeCard } from '@/components/ChallengesSection/ChallengeCard';
import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { SectionHeader } from '../SectionHeader';

interface ChallengesSectionProp {
  data: {
    title: string;
    description: string;
    items: {
      id: number;
      iconSrc: string;
      iconAlt: string;
      title: string;
      description: string;
      className?: string;
    }[];
  };
}

export const ChallengesSection = ({ data }: ChallengesSectionProp) => {
  return (
    <SectionContainer>
      <SectionHeader title={data.title} desc={data.description} />
      <div className="flex w-full gap-6 flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
        {data.items.map((challenge, index) => (
          <ChallengeCard
            key={challenge.id}
            index={index}
            iconSrc={challenge.iconSrc}
            iconAlt={challenge.iconAlt}
            title={challenge.title}
            description={challenge.description}
            className={challenge.className}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
