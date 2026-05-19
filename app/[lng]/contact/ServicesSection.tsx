import React from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const ServicesSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'contact');
  const services: Service[] = [
    {
      id: 'solution-overview',
      icon: '/icons/CheckCircle.png',
      title: t('solutionOverview'),
      description: t('learnHowOurProductsAndServicesCanSupportYourBusiness'),
    },
    {
      id: 'qa-session',
      icon: '/icons/CheckCircle.png',
      title: t('qaSession'),
      description: t('talkToAnExpertToSeeHowOurSolutionsCanSupportYourBusiness'),
    },
    {
      id: 'interactive-consultation',
      icon: '/icons/CheckCircle.png',
      title: t('interactiveConsultation'),
      description: t('weWillExploreYourGoalsAndShareInsightsToHelpYouGrow'),
    },
  ];
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 mt-20 max-md:mt-0">
      <div className="flex justify-start items-end gap-6 flex-wrap">
        {services.map(service => (
          <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};
