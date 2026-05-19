import React from 'react';
import Image from 'next/image';
import { FeatureCard } from './FeatureCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

const GlobeIcon: React.FC = () => (
  <Image src="/icons/globe.png" alt="Globe Icon" width={32} height={32} className="globe-icon" />
);

const LinkIcon: React.FC = () => (
  <Image src="/icons/link.png" alt="Globe Icon" width={32} height={32} className="globe-icon" />
);

export const VisionMissionSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'about-us');
  const features = [
    {
      icon: <GlobeIcon />,
      title: t('groundedInTheRealEconomy'),
      description: t(
        'weActivelyInvestInRealWorldSectorsLikeRealEstateHealthcareAndInfrastructureWhereInnovationMeetsTangibleHumanImpactBeyondTheTokenizationHype',
      ),
    },
    {
      icon: <LinkIcon />,
      title: t('bridgingMarketsUnlockingValue'),
      description: t(
        'withDeepRootsInDigitalAssetTradingWeEmpowerBothTraditionalAndCryptoNativePlayersToAccessHighQualityFutureProofInvestmentOpportunities',
      ),
    },
  ];
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap"
      />
      <section
        data-aos="fade-up"
        className="flex w-full flex-col items-start gap-2.5 relative box-border p-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10"
      >
        <div className="flex w-full max-w-screen-xl justify-center items-center gap-20 relative mx-auto my-0 max-md:flex-col max-md:gap-[60px] max-md:items-stretch max-sm:gap-10">
          <header className="flex flex-col justify-center items-start gap-6 flex-[1_0_0] self-stretch relative max-md:items-center max-md:text-center">
            <div className="self-stretch relative">
              <h1 className="font-bold text-[56px] text-[#1C1C1C] leading-[72.8px] tracking-[-2.24px] max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px] max-sm:leading-[43.2px]">
                {t('theVision')} &amp; {t('mission')}
              </h1>
            </div>
            <div className="w-[525px] relative max-md:w-full max-md:max-w-[600px]">
              <p className="font-normal text-lg text-[#777] leading-[28.8px] tracking-[-0.36px] max-sm:text-base max-sm:tracking-[-0.32px]">
                {t('ourVisionIsToBeTheMarketplaceConnectingDigitalAssetPlayersWithTheRealWorldProjects')}
              </p>
            </div>
          </header>
          <div className="flex flex-col items-start gap-6 flex-[1_0_0] self-stretch relative max-md:gap-5">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
