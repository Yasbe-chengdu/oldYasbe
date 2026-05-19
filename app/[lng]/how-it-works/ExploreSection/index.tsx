import React from 'react';
import { HeroImage } from './HeroImage';
import { InvestmentCard } from './InvestmentCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface InvestmentOption {
  title: string;
  description: string;
}

export const ExploreSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'how-it-works');
  const investmentOptions: InvestmentOption[] = [
    {
      title: t('realEstate'),
      description: t('investInPhysicalOrDigitalPropertiesFromFixAndFlipToProptech'),
    },
    {
      title: t('startups'),
      description: t('backFoundersWithBoldIdeasInEarlyStageCompaniesPoisedToGrow'),
    },
    {
      title: t('cryptoMining'),
      description: t('gainExposureToMiningOperationsWithoutManagingInfrastructureYourself'),
    },
    {
      title: t('cryptoFunds'),
      description: t('handsOffInvestingInDiversifiedDigitalAssetsFullyManagedForYou'),
    },
  ];
  return (
    <section className="flex w-full max-w-[1440px] flex-col items-start gap-2.5 relative box-border mx-auto my-0 p-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex flex-col items-center gap-20 self-stretch relative max-sm:gap-[60px]">
        <header data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-[#1C1C1C] text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative text-center max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
            <div className="font-bold text-[56px] text-[#1C1C1C] max-md:text-5xl max-sm:text-4xl">
              {t('exploreWhatYouCanInvestIn')}
            </div>
          </h1>
        </header>

        <div className="flex flex-col items-start gap-10 self-stretch relative max-sm:gap-[30px]">
          <HeroImage
            src="/images/explore-section.png"
            alt={t('investmentOpportunitiesShowcaseFeaturingVariousInvestmentCategories')}
          />

          <div className="flex items-start gap-6 self-stretch relative max-md:flex-wrap max-md:gap-5 max-sm:flex-col max-sm:gap-4">
            {investmentOptions.map((option, index) => (
              <InvestmentCard key={index} title={option.title} description={option.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
