import React from 'react';
import { UseCaseCard } from './UseCaseCard';
import { SolutionCard } from './SolutionCard';
import { CentralIcon } from './CentralIcon';
import { SectionContainer } from '@/components/SectionContainer';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const TreasuryChallenges: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'crypto-native');
  const solutionFeatures = [
    {
      text: t('autoConvertUsdcToEurGbpAndPayVendorsOnBehalfOfTheDao'),
      iconSrc: '/icons/tick.png',
    },
    {
      text: t('paysEubasedVendorsViaSepaInstant'),
      iconSrc: '/icons/tick.png',
    },
    {
      text: t('tracksFlowsPerProjectForAccountingAndTransparency'),
      iconSrc: '/icons/tick.png',
    },
    {
      text: t('usesYasbesEmbeddedKytForTransactionScreening'),
      iconSrc: '/icons/tick.png',
    },
  ];

  return (
    <SectionContainer>
      <div className="flex max-w-full w-[1280px] items-stretch gap-[40px_80px] justify-center flex-wrap">
        <header className="flex min-w-60 flex-col items-stretch text-[56px] text-[#1C1C1C] font-bold tracking-[-2.24px] leading-[73px] justify-center flex-1 shrink basis-[0%] max-md:max-w-full max-md:text-[40px] max-md:leading-[58px]">
          <h1 className="text-[#1C1C1C] max-md:max-w-full max-md:text-[40px] max-md:leading-[58px]">
            {t('howYasbeSolvesCryptoTreasuryChallenges')}
          </h1>
        </header>
        <div className="relative flex min-w-60 flex-col items-stretch justify-center w-[628px] my-auto max-md:max-w-full">
          <UseCaseCard
            title={t('clientUseCase')}
            description={t(
              'aDaoReceivesContributionsInCryptoPaysContributorsInUsdcAndNeedsFiatAccountsToFundServiceProvidersAndRunMarketingInEurAndGbp',
            )}
          />
          <SolutionCard title={t('yasbeSolution')} features={solutionFeatures} />
          <CentralIcon iconSrc="/icons/arrow.png" />
        </div>
      </div>
    </SectionContainer>
  );
};
