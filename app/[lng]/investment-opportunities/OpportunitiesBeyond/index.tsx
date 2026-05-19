import React from 'react';
import { SectionHeader } from './SectionHeader';

import { FeatureCard } from './FeatureCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import Image from 'next/image';

export const OpportunitiesBeyond: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'investment-opportunities');
  const dollarIcon = (
    <Image src="/icons/CurrencyCircleDollar.svg" alt="Dollar Icon" width={32} height={32} className="icon" />
  );

  const magnifyingGlassIcon = (
    <Image src="/icons/MagnifyingGlass.svg" alt="Magnifying Glass Icon" width={32} height={32} className="icon" />
  );

  const handshakeIcon = (
    <Image src="/icons/Handshake.svg" alt="Handshake Icon" width={32} height={32} className="icon" />
  );

  return (
    <section
      className="flex w-full max-w-[1440px] flex-col items-start gap-20 box-border mx-auto my-0 p-20 max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10"
      data-aos="fade-up"
    >
      <div data-aos="fade-up" data-aos-delay="100">
        <SectionHeader
          title={t('opportunitiesBeyondTheTradFiMarket')}
          description={t('connectWithGrowthReadyVenturesThroughClearCuratedInvestmentAccess')}
        />
      </div>

      <div
        className="flex w-full max-w-screen-xl flex-col items-start gap-16 shadow-[0_16px_64px_-8px_rgba(0,0,0,0.20)] box-border bg-white p-16 rounded-2xl max-md:gap-12 max-md:p-12 max-sm:gap-8 max-sm:p-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex justify-between items-center w-full gap-10 max-md:flex-col max-md:items-start max-md:gap-8">
          <div className="flex w-[588px] flex-col items-start gap-6 shrink-0 max-md:w-full">
            <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
              <span className="font-bold">{t('accessCuratedPrivateInvestments')}</span>{' '}
              {t(
                'acrossRealEstateManufacturingTechnologyHealthcareAndInfrastructureCarefullySelectedToDriveLongTermGrowth',
              )}
            </p>
            <p className="w-full text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
              <span className="font-bold">
                {t(
                  'byConnectingInvestorsWithEntrepreneursWeEnsureTransparencyBridgingInformationGapsSoEveryPartyStaysAligned',
                )}
              </span>{' '}
              {t('bridgingInformationGapsSoEveryPartyStaysAligned')}
            </p>
          </div>
          <img src="/images/visual.svg" alt="Visual" />
        </div>

        <div className="flex items-start gap-6 w-full max-md:flex-col max-md:gap-5">
          <FeatureCard
            icon={dollarIcon}
            title={t('privateInvestmentOpportunities')}
            description={t(
              'weOfferAccessToHighGrowthPrivateInvestmentsAcrossRealEstateManufacturingTechnologyHealthcareAndInfrastructure',
            )}
          />
          <FeatureCard
            icon={magnifyingGlassIcon}
            title={t('transparency')}
            description={t(
              'weBringInvestorsAndEntrepreneursTogetherEliminateInformationAsymmetrySoEveryoneIsOnTheSamePage',
            )}
          />
          <FeatureCard
            icon={handshakeIcon}
            title={t('credibility')}
            description={t('wePartnerWithProvenEntrepreneursAndEveryProjectIsCarefullyVettedByOurDueDiligenceTeam')}
          />
        </div>
      </div>
    </section>
  );
};
