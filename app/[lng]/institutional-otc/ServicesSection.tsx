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
  const { t } = useTranslation(lng as string, 'institutional-otc');
  const services: Service[] = [
    {
      id: 'institutional-trading',
      icon: '/icons/otc-1.svg',
      title: '',
      description: t('institutionalGradeTradingExperienceWith247Support'),
    },
    {
      id: 'spot-delivery',
      icon: '/icons/otc-2.svg',
      title: '',
      description: t('spotDeliveryAtTheMostCompetitivePricing'),
    },
    {
      id: 'ecosystem-growth',
      icon: '/icons/otc-3.svg',
      title: '',
      description: t('ensuringTheEcosystemGrowsCompliantly'),
    },
  ];
  return (
    <section className="w-full max-w-7xl px-4 py-8 mt-14 mx-auto" data-aos="fade-up">
      <div className="flex justify-start items-end gap-6 flex-wrap">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
