'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { ChallengesSection } from '@/components/ChallengesSection';
import { GoalToOutcome } from '@/components/GoalToOutcome';
import { UseCase } from '@/components/UseCase';
import { SolutionSection } from '@/components/SolutionSection';

export default function ImportExport() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'import-export');
  const challengesData = {
    title: t('keyChallengesInImportExport'),
    description: t(
      'crossBorderComplexityDelayedSettlementsAndCurrencyRisksAreCommonHurdlesHereIsWhatGlobalTradeTeamsFaceEveryDay',
    ),
    items: [
      {
        id: 1,
        iconSrc: '/icons/puzzle-piece.svg',
        iconAlt: 'Puzzle Piece',
        title: t('complexCrossBorderPayments'),
        description: t(
          'multipleCurrenciesInvolvedInPaymentsAndSettlementsDelaysInCrossBorderTransfersDueToBankingHoursCorrespondentBankingInefficienciesAndCurrencyConversion',
        ),
      },
      {
        id: 2,
        iconSrc: '/icons/currency-circle-dollar.png',
        iconAlt: 'Currency Circle Dollar',
        title: t('cashFlowInefficiencies'),
        description: t(
          'slowAccessToFundsTiedUpInInternationalBankAccountsImpactingWorkingCapitalDifficultyInForecastingAndManagingLiquidityAcrossGlobalMarkets',
        ),
      },
      {
        id: 3,
        iconSrc: '/icons/shield-warning.png',
        iconAlt: 'Shield Warning',
        title: t('currencyRisks'),
        description: t('exposureToExchangeRateFluctuationsCanResultInUnpredictableCostsForSuppliersAndBuyers'),
        className:
          'border min-w-60 min-h-[210px] overflow-hidden grow shrink w-[502px] pt-8 pb-[61px] px-8 rounded-2xl border-solid border-[#D6D6D6] max-md:max-w-full max-md:px-5',
      },
      {
        id: 4,
        iconSrc: '/icons/question.png',
        iconAlt: 'Question',
        title: t('reconciliationIssues'),
        description: t('complexitiesInReconcilingPaymentsAndCollectionsFromDifferentCurrenciesAndJurisdictions'),
      },
    ],
  };

  const solutions = [
    {
      number: '1',
      title: t('virtualAccountsSimplifyingPaymentFlowsAndEnhancingControl'),
      description: [t('yasbesVirtualAccountsAllowImportAndExportCompaniesTo')],
      details: [
        t(
          'issueAccountsInYourBusinessSNameInMultipleCurrenciesEurGbpUsdEliminatingTheNeedToOpenMultipleBankAccountsInEachRegion',
        ),
        t('trackFundsByProjectOrSectorGivingGreaterClarityOnCashFlowAndSimplifyingFinancialReporting'),
        t(
          'segmentAndIsolateFundsForDifferentCustomersSuppliersOrRegionsReducingRiskExposureAndEnablingBetterCashFlowManagement',
        ),
        t('streamlineReconciliationByHavingAllCollectionsAndPaymentsRoutedThroughDedicatedVirtualAccounts'),
      ],
      isInitiallyExpanded: true,
    },
    {
      number: '2',
      title: t('globalCollectionPayoutBridgingTheGapBetweenMarkets'),
      description: [t('withHoneybeesGlobalCollectionPayoutServicesImportAndExportCompaniesCan')],
      details: [
        t(
          'collectPaymentsFromCustomersInLocalCurrenciesAndMakePayoutsToSuppliersAndPartnersWorldwideThroughAUnifiedPlatform',
        ),
        t(
          'reduceTheComplexityAndCostOfTraditionalCrossBorderPaymentsByLeveragingLocalPaymentNetworksThusLoweringFeesAndSpeedingUpTransactions',
        ),
        t('accessFundsMoreQuicklyMakingItEasierToSettleSupplierInvoicesAndPayCustomsDutiesOrTaxesOnTime'),
      ],
      isInitiallyExpanded: false,
    },
    {
      number: '3',
      title: t('stablecoinCheckInstantSettlementsAndBorderlessTransactions'),
      description: [t('honeybeeAllowsCompaniesToAcceptStablecoinPaymentsEtcOfferingMultipleBenefits')],
      details: [
        t('instantAccessToFunds24x7AvoidingDelaysTiedToTraditionalBankingSystemsAndCutOffTimes'),
        t('convertStablecoinsToFiatAtYourConvenienceEitherToACompanyOwnedAccountOrToAThirdPartyBankAccount'),
        t(
          'avoidExchangeRateVolatilityAsStablecoinsArePeggedToFiatCurrenciesLikeUsdEurEnsuringPredictablePaymentValues',
        ),
        t(
          'enableCustomersAndSuppliersWorldwideToPayAndSettleInStablecoinsReducingCrossBorderTransactionDelaysAndDisputes',
        ),
      ],
      isInitiallyExpanded: false,
    },
  ];

  const treasuryGoalFeatures = [
    { text: t('simplifyCrossBorderPayments') },
    { text: t('improveCashFlowManagement') },
    { text: t('reduceCurrencyRisk') },
    { text: t('streamlineReconciliation') },
    { text: t('expandGlobalOperations') },
  ];

  const yasbeeDeliversFeatures = [
    { text: t('virtualAccountsInMultipleCurrenciesForSeamlessCollectionsAndPayouts') },
    { text: t('nearInstantSettlementsWithStablecoinCheckoutAllowingQuickerAccessToWorkingCapital') },
    { text: t('stablecoinsPeggedToFiatReduceVolatilityInInternationalTransactions') },
    { text: t('dedicatedVirtualAccountsForEachRegionSimplifyingAccountingProcesses') },
    { text: t('easyAccessToLocalPaymentRailsAndFiatOffRampsAcrossBorders') },
  ];

  const useCases = [
    {
      icon: '/icons/globe-hemisphere-west.png',
      title: t('importCompany'),
      description: t(
        'anImportCompanyBasedInTheUsExpandsOperationsInSouthAmericaAndAfricaUsingYasbeToSimplifyPayoutAndCollectionsAndReduceTheTimeAndCostInvolvedInTransferringFundsAcrossBorders',
      ),
    },
    {
      icon: '/icons/television.png',
      title: t('electronicsExporter'),
      description: t(
        'aHongKongBasedExporterOfElectronicsAdoptsStablecoinCheckoutToAcceptPaymentsFromGlobalClientsEnablingThemToInstantlySettleTransactionsAcrossTimeZonesAndReinvestInNewInventoryWithoutWaitingForBankProcessing',
      ),
    },
    {
      icon: '/icons/shopping-cart.png',
      title: t('eCommerceCompany'),
      description: t(
        'anECommerceCompanyConsolidatesSupplierPaymentsAndCustomerCollectionsAcrossApacEmeaAndTheAmericasUsingYasbeToStreamlineTreasuryOperationsWhileReducingFxAndBankFees',
      ),
    },
  ];
  return (
    <>
      <HeroSection title1={t('title1')} title2={t('title2')} desc={[t('desc1')]} image="/banner/import-export.png" />
      <ChallengesSection data={challengesData} />
      <SolutionSection data={solutions} title={t('solutionTitle')} />
      <GoalToOutcome
        title={t('goalToOutcomeTitle')}
        firstCardTitle={t('businessGoal')}
        secondCardTitle={t('yasbeeDelivers')}
        firstCardFeatures={treasuryGoalFeatures}
        secondCardFeatures={yasbeeDeliversFeatures}
      />
      <UseCase data={useCases} />
      <GetStarted />
      <Footer />
    </>
  );
}
