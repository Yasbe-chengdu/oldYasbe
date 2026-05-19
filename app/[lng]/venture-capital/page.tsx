'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { ChallengesSection } from '@/components/ChallengesSection';
import { HeroSection } from '@/components/HeroSection';
import { SolutionSection } from '@/components/SolutionSection';
import { StrategicVision } from './StrategicVision';

export default function VentureCapital() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'venture-capital');
  const challengesData = {
    title: t('challengesForVcInvestmentFunds'),
    description: t(
      'fromLiquidityLockupsToDealCompetitionTodaySVCAndInvestmentFirmsFaceMountingPressureToDeployCapitalWiselyAndSecureLongTermReturns',
    ),
    items: [
      {
        id: 1,
        iconSrc: '/icons/shield-warning.png',
        iconAlt: 'Puzzle Piece',
        title: t('dueDiligenceRiskAssessment'),
        description: t(
          'identifyingHighPotentialInvestmentsWhileMinimizingTheRiskOfFailureEnsuringAThoroughVettingProcessForStartupsOrBusinessesSeekingFunding',
        ),
      },
      {
        id: 2,
        iconSrc: '/icons/coins.png',
        iconAlt: 'Currency Circle Dollar',
        title: t('liquidityConstraints'),
        description: t(
          'vcFundsTypicallyRequireALongerTermCommitmentToInvestmentsOften510YearsMakingLiquidityAChallengeForFundManagersAndInvestors',
        ),
      },
      {
        id: 3,
        iconSrc: '/icons/users.png',
        iconAlt: 'Shield Warning',
        title: t('competitionForInvestment Opportunities'),
        description: t(
          'asMoreVcFirmsEnterTheMarketCompetitionForHighQualityDealsIncreasesOftenLeadingToHigherValuationsAndTighterMargins',
        ),
        className:
          'border min-w-60 min-h-[210px] overflow-hidden grow shrink w-[502px] pt-8 pb-[61px] px-8 rounded-2xl border-solid border-[#D6D6D6] max-md:max-w-full max-md:px-5',
      },
      {
        id: 4,
        iconSrc: '/icons/target.png',
        iconAlt: 'Question',
        title: t('exitStrategies'),
        description: t(
          'determiningTheRightExitStrategyEIPOAcquisitionAndTimingToEnsureThatReturnsAreMaximizedCanBeChallenging',
        ),
      },
    ],
  };

  const solutions = [
    {
      number: '1',
      title: t('seamlessAccessToBothDigitalAndTraditionalAssets'),
      description: [
        t(
          'yasbesPlatformOffersInstitutionalGradeAccessToBothCryptoAndTraditionalAssetsEgrealestateCryptoMiningFarmsYieldGeneratingFundsThisAllowsVcsAndInvestmentFundsToCreateDiversifiedPortfoliosThatSpanMultipleAssetClassesWithoutTheComplexitiesTypicallyInvolvedInManagingBoth',
        ),
      ],
      isInitiallyExpanded: true,
    },
    {
      number: '2',
      title: t('enhancedLiquidityAndAccessToPortfolioDiversification'),
      description: [
        t(
          'vcsOftenFaceLiquidityConstraintsInTraditionalAssetsParticularlyWithLongInvestmentTimelinesWhileCryptoAssetsCanOfferMoreImmediateReturnsButAreOftenVolatileHoneybeeProvidesALiquidInfrastructureForBothCryptoAndTraditionalAssetsMakingItEasierForFirmsToDiversifyInvestmentsAcrossBothWithoutSacrificingLiquidityOrReturns',
        ),
        t(
          'forExampleHoneybeesTailoredLiquiditySolutionsAllowFundsToAccessSmartDiversificationByBlendingStableAssetsLikeStablecoinsWithGrowthAssetsLikeRealEstateOrPrivateEquityFundsCanHedgeCryptoVolatilityWhileStillCapturingCryptoSExplosiveUpside',
        ),
      ],
      isInitiallyExpanded: false,
    },
    {
      number: '3',
      title: t('stablecoinCheckInstantSettlementsAndBorderlessTransactions'),
      description: [
        t(
          'fundsOftenStruggleToAccessCrossBorderInvestmentsDueToComplexFinancialSystemsMultipleCurrenciesAndGeographicalConstraintsHoneybeesGlobalPaymentSystemAllowsSeamlessTransactionsAcrossBordersAndRegionsRemovingBarriersToEntryAndReducingFrictionInInternationalInvestments',
        ),
        t(
          'forExampleHoneybeesGlobalCollectionAndPayoutCapabilitiesEnableFirmsToEasilyMakeAndReceivePaymentsFromInternationalClientsOrPartnersUnlockingHighGrowthOpportunitiesAcrossGlobalMarketsWhetherInCryptoOrTraditionalSectorsLikePrivateEquityOrRealEstate',
        ),
      ],
      isInitiallyExpanded: false,
    },
    {
      number: '4',
      title: t('supportForDisruptiveTechnologiesAndTheCryptoEcosystem'),
      description: [
        t(
          'vcAndInvestmentFundsLookingToStayAheadOfTheCurveAreIncreasinglyInterestedInBackingDisruptiveTechnologiesAndInnovatorsWithinTheCryptoSphereHoneybeesActiveSupportForDisruptiveTechnologiesCanHelpVcFirmsAccessProjectsAndOpportunitiesThatAreShapingTheFutureOfFinance',
        ),
        t(
          'forExampleByPartneringWithCreatorsAndInnovatorsHoneybeeGivesVcsAndInvestmentFundsAccessToInvestmentOpportunitiesInDisruptiveTechnologiesThatAreAdvancingTheCryptosphereAndDigitalFinanceAllowingThemToStayOnTheCuttingEdgeOfIndustryEvolution',
        ),
      ],
      isInitiallyExpanded: false,
    },
  ];
  return (
    <>
      <HeroSection
        title1={t('smarterInvestingAcross')}
        title2={t('digitalAndTraditionalAssets')}
        desc={t(
          'builtForVcsAndInvestmentFundsYasbeHelpsYouUnlockNewMarketsManageRisksAndScaleFasterByBridgingTraditionalFinanceWithTheFutureOfDigitalAssets',
        )}
        image="/banner/venture-capital.png"
      />
      <ChallengesSection data={challengesData} />
      <SolutionSection title={t('howYasbeCanHelpVcAndInvestmentFunds')} data={solutions}>
        <StrategicVision />
      </SolutionSection>
      <GetStarted />
      <Footer />
    </>
  );
}
