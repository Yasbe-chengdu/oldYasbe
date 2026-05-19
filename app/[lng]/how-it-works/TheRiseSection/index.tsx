'use client';
import React from 'react';
import { SectionHeader } from './SectionHeader';
import { FeatureList } from './FeatureList';
import Image from 'next/image';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const TheRiseSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'how-it-works');
  const features = [
    {
      id: 'wall-street',
      icon: <Image src="/icons/ChartBar.svg" alt="Lock Key Open" width={32} height={32} />,
      title: t('fromWallStreetToPrivateStreets'),
      description: t(
        'overThePastTwoDecadesCapitalHasMovedFromPublicToPrivateMarketsPrivateAssetsHaveGrownTenfoldSinceTheEarly2000sNowExceeding6TrillionGlobally',
      ),
    },
    {
      id: 'accessible',
      icon: <Image src="/icons/LockKeyOpen.svg" alt="Lock Key Open" width={32} height={32} />,
      title: t('onceExclusiveNowAccessible'),
      description: t(
        'privateEquityVentureCapitalAndCryptoOnceForTheUltraWealthyAreNowOpenToAllYASBeBreaksDownTraditionalBarriersInvitingEverydayInvestorsToTakePart',
      ),
    },
    {
      id: 'believe',
      icon: <Image src="/icons/CurrencyCircleDollar.svg" alt="Lock Key Open" width={32} height={32} />,
      title: t('investInWhatYouBelieveIn'),
      description: t(
        'backRealFoundersBuildingTheFutureYouCareAboutYASBeEmpowersPurposeDrivenInvestingWithEaseAndClarity',
      ),
    },
  ];

  return (
    <section className="flex w-full max-w-[1440px] flex-col items-start gap-20 box-border mx-auto my-0 p-20 max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10">
      <SectionHeader
        title={t('theRiseOfPrivateInvesting')}
        description={t('privateMarketsAreGrowingFastAndNowTheyreOpenToEveryone')}
        ctaText={t('startInvest')}
      />
      <FeatureList features={features} />
    </section>
  );
};
