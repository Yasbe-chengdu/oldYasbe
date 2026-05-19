import React from 'react';

import { InvestmentCard } from './InvestmentCard';
import { SearchFilters } from './SearchFilter';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const Opportunities: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'investment-opportunities');
  const investmentData = [
    {
      id: 1,
      title: t('provinceCommercialAndResidentialEstate'),
      imageUrl: 'marketplace-build.png',
      overlayImageUrl: '/marketplace-build.png',
      tags: [t('realEstate'), t('debt')],
      aspectRatio: 'square' as const,
      details: {
        capitalization: '145000000',
        raised: '10000000',
        investors: '78',
        minInvestment: '10000',
      },
    },
    {
      id: 2,
      title: t('taxesBTCMiningFarm'),
      imageUrl: 'marketplace-build-2.png',
      overlayImageUrl: 'marketplace-build-2.png',
      tags: [t('realEstate'), t('debt')],
      aspectRatio: 'wide' as const,
      details: {
        capitalization: '145000000',
        raised: '10000000',
        investors: '78',
        minInvestment: '10000',
      },
    },
  ];

  return (
    <section
      className="max-w-[1440px] mx-auto flex flex-col items-stretch justify-center max-md:p-5 p-20 max-md:px-5 overflow-hidden"
      data-aos="fade-up"
    >
      <div
        className="self-center flex w-[719px] max-w-full flex-col items-stretch relative z-50"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <header className="self-center flex flex-col items-center justify-center max-md:max-w-full">
          <h1 className="text-[#1C1C1C] text-[56px] font-bold leading-[1.3] tracking-[-2.24px] max-md:max-w-full max-md:text-[36px] text-left max-md:text-center">
            {t('investmentOpportunities')}
          </h1>
          <p className="text-[#777] text-lg font-normal leading-[1.6] tracking-[-0.36px] mt-6 max-md:max-w-full">
            {t('browseCurrentInvestmentOpportunities')}
          </p>
        </header>

        <SearchFilters />
      </div>

      <div className="flex w-full gap-6 flex-wrap mt-20 max-md:max-w-full max-md:mt-10 container mx-auto">
        {investmentData.map(investment => (
          <InvestmentCard
            key={investment.id}
            title={investment.title}
            imageUrl={investment.imageUrl}
            overlayImageUrl={investment.overlayImageUrl}
            tags={investment.tags}
            details={investment.details}
            aspectRatio={investment.aspectRatio}
          />
        ))}
      </div>
    </section>
  );
};
