'use client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { ChallengesSection } from '@/components/ChallengesSection';
import { GoalToOutcome } from '@/components/GoalToOutcome';
import { HeroSection } from '@/components/HeroSection';
import { SolutionSection } from '@/components/SolutionSection';
import { BenefitsGrid } from './BenefitsGrid';
import { UseCase } from '@/components/UseCase';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export default function CorporateTreasury() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'corporate-treasury');
  const challengesData = {
    title: t('keyChallengesInTreasuryTeams'),
    description: t('fromBankingFragmentationToCrossBorderDelaysTheseAreCommonBarriersToEfficiencyAndGrowth'),
    items: [
      {
        id: 1,
        iconSrc: '/icons/git-branch.svg',
        iconAlt: 'Git Branch',
        title: t('bankingFragmentation'),
        description: t('fragmentedBankingRelationshipsAndLimitedAccessToNamedAccountsInKeyCurrencies'),
      },
      {
        id: 2,
        iconSrc: '/icons/clock.svg',
        iconAlt: 'Clock',
        title: t('paymentDelays'),
        description: t('delaysInCrossBorderPaymentsCausingWorkingCapitalInefficiencies'),
      },
      {
        id: 3,
        iconSrc: '/icons/puzzle-piece.svg',
        iconAlt: 'Puzzle Piece',
        title: t('reconciliationComplexity'),
        description: t('complexReconciliationOfMultiPartyPayments'),
        className:
          'border min-w-60 min-h-[210px] overflow-hidden grow shrink w-[502px] pt-8 pb-[61px] px-8 rounded-2xl border-solid border-[#D6D6D6] max-md:max-w-full max-md:px-5',
      },
      {
        id: 4,
        iconSrc: '/icons/warning.svg',
        iconAlt: 'Warning',
        title: t('accessConstraints'),
        description: t('limitedRealTimeAccessToFundsDueToBankingHoursAndGeographicConstraints'),
      },
    ],
  };

  const solutions = [
    {
      number: '1',
      title: t('virtualAccountsStructureControlAndReconciliationAtScale'),
      description: [
        t('yasbeProvidesVirtualAccountsInTheNameOfTheBusinessAcrossKeyCurrenciesEurGbpUsdAllowingTreasurersTo'),
      ],
      details: [
        t('openUniqueAccountsForEachEntityRegionOrBusinessLine'),
        t('trackfundspersprojectorbusinessunitforgranularfinancialoversight'),
        t('automateReconciliationOfIncomingPaymentsFromCustomersPartnersOrSubsidiaries'),
        t('simplifyAuditAndComplianceWithClearerFundFlows'),
        t('improveWorkingCapitalVisibilityAndLiquidityForecasting'),
      ],
      isInitiallyExpanded: true,
    },
    {
      number: '2',
      title: t('globalCollectionPayoutUnifiedGlobalTreasuryOperations'),
      description: [t('honeybeesGlobalPaymentRailsSupportCollectionsAndPayoutsIn20PlusCountriesEnabling')],
      details: [
        t('fasterSettlementToFromUpstreamSuppliersBusinessPartnersAndCustomers'),
        t('unifiedTreasuryOperationsAcrossJurisdictionsWithReducedRelianceOnLocalBanks'),
        t('fxOptimizationViaMultiCurrencySupportAndLocalRails'),
        t('endToEndVisibilityOverIncomingAndOutgoingFlowsOnASinglePlatform'),
      ],
      isInitiallyExpanded: false,
    },
    {
      number: '3',
      title: t('stablecoinCheckout247LiquidityAndBorderlessGrowth'),
      description: [t('honeybeeEmpowersCorporatesToAcceptStablecoinsEtcAndSettleInFiatInstantlyEnabling')],
      details: [
        t('realTimeAccessToCapitalEvenOnWeekendsAndHolidays'),
        t('fasterCrossBorderSettlementComparedToSwiftOrTraditionalRails'),
        t('directFiatOffRampingToYourOwnOrThirdPartyBankAccounts'),
        t('enhancedSecurityAndTransparencyViaBlockchainAndKYTScreening'),
      ],
      isInitiallyExpanded: false,
    },
  ];

  const treasuryGoalFeatures = [
    { text: t('centralizedLiquidityManagement') },
    { text: t('realTimeTreasuryVisibility') },
    { text: t('fasterAccessToWorkingCapital') },
    { text: t('operationalEfficiency') },
    { text: t('expansionIntoNewMarkets') },
  ];

  const yasbeeDeliversFeatures = [
    { text: t('namedVirtualAccountsInMultipleCurrencies') },
    { text: t('globalCollectionPayoutPlatformWithInstantData') },
    { text: t('247StablecoinSettlementAndFiatOffRamps') },
    { text: t('automatedReconciliationReducedManualOverhead') },
    { text: t('localRailsStablecoinsToRemoveCrossBorderFriction') },
  ];

  const useCases = [
    {
      icon: '/icons/truck.png',
      title: t('logisticsCompany'),
      description: t(
        'aGlobalLogisticsCompanyUsesVirtualAccountsToManagePaymentsFromCustomersInTheEuUkAndUsSimplifyingReconciliationAndImprovingVisibilityIntoRegionalCashPositions',
      ),
    },
    {
      icon: '/icons/code.png',
      title: t('saasCompany'),
      description: t(
        'aSaaSCompanyServingGlobalEnterpriseClientsAdoptsStablecoinCheckoutForContractBillingDramaticallyReducingInvoiceSettlementTimesFrom5DaysToUnder5Minutes',
      ),
    },
    {
      icon: '/icons/briefcase.png',
      title: t('consultingFirm'),
      description: t(
        'aMultinationalConsultancyAssignsVirtualAccountsPerClientProjectEnablingClearerCashFlowTrackingAndFasterFinancialCloseProcessesAcrossRegions',
      ),
    },
  ];
  return (
    <>
      <HeroSection
        title1={t('modernTreasuryInfrastructure')}
        title2={t('builtForGlobalScale')}
        desc={t(
          'yasbeEmpowersTreasuryTeamsToControlLiquidityManageMultiCurrencyOperationsAndSimplifyCrossBorderPaymentsAllInOneSeamlessPlatform',
        )}
        image="/banner/corporate-treasury.png"
      />
      <ChallengesSection data={challengesData} />
      <SolutionSection data={solutions} title={t('yasbeSolution')}>
        <BenefitsGrid />
      </SolutionSection>
      <GoalToOutcome
        title={t('fromGoalToOutcome')}
        firstCardTitle={t('treasuryGoal')}
        secondCardTitle={t('yasbeDelivers')}
        firstCardFeatures={treasuryGoalFeatures}
        secondCardFeatures={yasbeeDeliversFeatures}
      />
      <UseCase data={useCases} />
      <GetStarted />
      <Footer />
    </>
  );
}
