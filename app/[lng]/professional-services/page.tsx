'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

import React from 'react';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { ChallengesSection } from '@/components/ChallengesSection';
import { GoalToOutcome } from '@/components/GoalToOutcome';
import { HeroSection } from '@/components/HeroSection';
import { SolutionSection } from '@/components/SolutionSection';
import { UseCase } from '@/components/UseCase';

export default function ProfessionalServices() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'professional-services');
  const challengesData = {
    title: t('keyChallengesInServicesFirms'),
    description: t('fromCrossBorderBillingToCurrencyComplexityHereIsWhatSlowsDownModernProfessionalTeams'),
    items: [
      {
        id: 1,
        iconSrc: '/icons/puzzle-piece.svg',
        iconAlt: 'Puzzle Piece',
        title: t('crossBorderPaymentComplexity'),
        description: t(
          'firmsWorkWithClientsAcrossMultipleRegionsAndManagingPaymentsInDifferentCurrenciesAddsComplexityCostAndDelayToTheTransactionProcess',
        ),
      },
      {
        id: 2,
        iconSrc: '/icons/currency-circle-dollar.png',
        iconAlt: 'Currency Circle Dollar',
        title: t('slowAccessToFunds'),
        description: t(
          'traditionalBankingSystemsAreSlowEspeciallyForInternationalPaymentsWhichDelaysRevenueRecognitionAndImpactsCashFlow',
        ),
      },
      {
        id: 3,
        iconSrc: '/icons/shield-warning.png',
        iconAlt: 'Shield Warning',
        title: t('currencyRiskExposure'),
        description: t(
          'exchangeRateFluctuationsMakeItChallengingToPredictPaymentAmountsAffectingMarginsOnInternationalContractsAndAdvisoryServices',
        ),
        className:
          'border min-w-60 min-h-[210px] overflow-hidden grow shrink w-[502px] pt-8 pb-[61px] px-8 rounded-2xl border-solid border-[#D6D6D6] max-md:max-w-full max-md:px-5',
      },
      {
        id: 4,
        iconSrc: '/icons/tree-structure.png',
        iconAlt: 'Question',
        title: t('fragmentedFinancialManagement'),
        description: t(
          'professionalServicesOftenNeedToManageMultipleClientsWithVaryingFinancialTermsRequiringClearTrackingOfProjectSpecificBudgetsAndPayments',
        ),
      },
    ],
  };

  const solutions = [
    {
      number: '1',
      title: t('virtualAccountsStreamliningPaymentsAndImprovingProjectControl'),
      description: [t('yasbesVirtualAccountsAllowFirmsTo')],
      details: [
        t(
          'centralizePaymentsAcrossMultipleCurrenciesEurGbpUsdUnderOnePlatformImprovingOperationalEfficiencyAndFinancialReporting',
        ),
        t(
          'trackFundsPerClientOrProjectSimplifyingBudgetingAndTrackingForConsultingEngagementsTaxAdvisoryServicesOrAccountingClients',
        ),
        t('isolateClientFundsForSpecificProjectsReducingFinancialRisksAndEnhancingControlOverEachAccount'),
        t(
          'simplifyReconciliationByDirectlyLinkingVirtualAccountsToClientInvoicesAndPaymentsEnsuringSeamlessAccountingProcesses',
        ),
      ],
      isInitiallyExpanded: true,
    },
    {
      number: '2',
      title: t('globalCollectionPayoutSimplifyingCrossBorderTransactions'),
      description: [t('honeybeesGlobalCollectionPayoutSolutionHelpsFirms')],
      details: [
        t(
          'collectPaymentsFromInternationalClientsInTheirPreferredCurrenciesReducingTransactionCostsAndDelaysTiedToTraditionalBankTransfers',
        ),
        t('payGlobalContractorsOrPartnersWithEaseReducingTheRelianceOnCorrespondentBanksAndImprovingCashFlow'),
        t(
          'easilyOnboardNewClientsInNewMarketsWithoutTheNeedToSetUpLocalBankAccountsOrNavigateComplexLocalBankingSystems',
        ),
        t(
          'increaseEfficiencyByUsingAUnifiedPlatformThatBridgesBothTraditionalAndModernPaymentMethodsAllowingForFasterInternationalTransactions',
        ),
      ],
      isInitiallyExpanded: false,
    },
    {
      number: '3',
      title: t('stablecoinCheckoutEnablingInstantGlobalTransactions'),
      description: [t('honeybeeAbilityToAcceptStablecoinPaymentsOffersProfessionalServicesFirms')],
      details: [
        t(
          'instantAccessToFundsEnsuringThatPaymentsAreSettledQuicklyAndRevenueCanBeReinvestedOrDistributedImmediatelyWithoutWaitingForTraditionalBankProcessingTimes',
        ),
        t(
          'predictableTransactionValuesAsStablecoinsArePeggedToFiatCurrenciesLikeUsdEurReducingExposureToExchangeRateFluctuations',
        ),
        t(
          '24x7PaymentAcceptanceEnablingFirmsToAcceptPaymentsFromClientsAcrossTimeZonesWithoutWorryingAboutBankingHours',
        ),
        t('convertStablecoinsToFiatWithFlexibilityDepositingFundsIntoACompany’sOwnAccountOrAThirdPartyAccount'),
      ],
      isInitiallyExpanded: false,
    },
  ];

  const treasuryGoalFeatures = [
    { text: t('simplifiedCrossBorderPayments') },
    { text: t('improvedCashFlowAccessToFunds') },
    { text: t('currencyRiskMitigation') },
    { text: t('enhancedFinancialControl') },
    { text: t('seamlessProjectFinancialManagement') },
  ];

  const yasbeeDeliversFeatures = [
    { text: t('globalCollectionPayoutReducesComplexityAndFeesForInternationalPayments') },
    { text: t('improvedCashFlowAccessToFunds') },
    { text: t('stablecoinsReduceExposureToExchangeRateFluctuationsEnsuringStablePayments') },
    { text: t('enhancedFinancialControl') },
    { text: t('seamlessProjectFinancialManagement') },
  ];

  const useCases = [
    {
      icon: '/icons/bank.png',
      title: t('taxAdvisoryFirm'),
      description: t(
        'aTaxAdvisoryFirmUsesYasbeVirtualAccountsToManageClientPaymentsAcrossTheEuUkAndUsEachVirtualAccountIsTiedToASpecificJurisdictionSimplifyingTaxReportingAndReconciliationWhileEnsuringFundsAreAvailableInTheCorrectCurrencies',
      ),
    },
    {
      icon: '/icons/briefcase.png',
      title: t('consultingFirm'),
      description: t(
        'aGlobalManagementConsultingFirmUsesYasbesGlobalCollectionPayoutToManagePaymentsFromClientsInAsiaEuropeAndTheUsTheFirmCanCollectPaymentsInLocalCurrenciesEliminatingCrossBorderTransferFeesAndAccessingFundsInRealTime',
      ),
    },
    {
      icon: '/icons/money.png',
      title: t('accountingFirm'),
      description: t(
        'anAccountingFirmThatWorksWithInternationalClientsAdoptsYasbesStablecoinPaymentsToReceiveFeesForServicesRenderedThisEnablesThemToReceivePaymentsOutsideOfTraditionalBankingHoursReducingDelaysAndGivingClientsMoreFlexibilityInPayingTheirInvoices',
      ),
    },
  ];
  return (
    <>
      <HeroSection
        title1={t('simplifyingFinanceFor')}
        title2={t('professionalServicesFirms')}
        desc={[
          t('fromClientBillingToGlobalCashFlowYasbeHelpsProfessionalServicesFirmsManage'),
          t('financialOperationsWithEaseTransparencyAndSpeed'),
        ]}
        image="/banner/professional-services.png"
      />
      <ChallengesSection data={challengesData} />
      <SolutionSection data={solutions} title={t('yasbeSolution')} />
      <GoalToOutcome
        title={t('fromGoalToOutcome')}
        firstCardTitle={t('businessGoal')}
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
