import React from 'react';
import { FeatureItem } from './FeatureItem';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

export const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <section
      className="flex flex-col items-start gap-10 w-full"
      aria-label="Investment Features"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {features.map(feature => (
        <FeatureItem key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
      ))}
    </section>
  );
};
