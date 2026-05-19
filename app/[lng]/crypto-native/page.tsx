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
import { TreasuryChallenges } from './TreasuryChallenges';

export default function CryptoNative() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'crypto-native');
  const challengesData = {
    title: t('keyChallengesInCryptoNativeCompany'),
    description: t(
      'cryptoNativeCompaniesFaceHurdlesAcrossBankingTreasuryComplianceAndConversionYasbeHelpsRemoveTheFriction',
    ),
    items: [
      {
        id: 1,
        iconSrc: '/icons/bank.png',
        iconAlt: 'Puzzle Piece',
        title: t('limitedAccessToTraditionalBankingInfrastructure'),
        description: t(
          'difficultyOpeningAndMaintainingBankAccountsEspeciallyUnderTheirEntityNameDeniedAccessToFiatSettlementRailsEgSwiftSepaAchRiskOfDeBankingDueToUnclearRegulatoryStatus',
        ),
      },
      {
        id: 2,
        iconSrc: '/icons/cardholder.png',
        iconAlt: 'Currency Circle Dollar',
        title: t('fragmentedPaymentAndTreasuryOperations'),
        description: t(
          'difficultyOpeningAndMaintainingBankAccountsEspeciallyUnderTheirEntityNameManualReconciliationOfOnChainAndOffChainTransactionsLimitedToolsForRealTimeFinancialVisibilityOrReporting',
        ),
      },
      {
        id: 3,
        iconSrc: '/icons/swap.png',
        iconAlt: 'Shield Warning',
        title: t('onOffRampConstraints'),
        description: t(
          'poorConversionInfrastructureFromCryptoToFiatAndViceVersaHighSlippageComplanceFrictionAndInconsistentProcessingTimesRegulatoryBottlenecksWhenMovingFundsBetweenEcosystems',
        ),
        className:
          'border min-w-60 min-h-[210px] overflow-hidden grow shrink w-[502px] pt-8 pb-[61px] px-8 rounded-2xl border-solid border-[#D6D6D6] max-md:max-w-full max-md:px-5',
      },
      {
        id: 4,
        iconSrc: '/icons/shield-warning.png',
        iconAlt: 'Question',
        title: t('complianceAndRiskManagement'),
        description: t(
          'needForKycKytAmlAndTransactionMonitoringRegulatoryUncertaintyInManyJurisdictionsHighOperationalBurdenForFinancialReportingAndAuditTrails',
        ),
      },
    ],
  };

  const solutions = [
    {
      number: '1',
      title: t('virtualAccountsInEurUsdGbpInYourOwnName'),
      description: [],
      details: [
        t('openNamedAccountsUnderYourCryptoEntityForFiatCollectionsAndPayouts'),
        t('streamlineTreasuryOperationsWithVirtualIban'),
        t('separateProjectSpecificFlowsAndTrackExpensesClearly'),
      ],
      isInitiallyExpanded: true,
    },
    {
      number: '2',
      title: t('globalCollectionsAndPayouts'),
      description: [],
      details: [
        t('acceptFiatFromClientsAndPartnersWorldwide'),
        t('payVendorsContributorsOrGranteesInstantlyAcrossBorders'),
        t('saveOnFxFeesEliminateIntermediaryBanksAndSpeedUpSettlements'),
      ],
      isInitiallyExpanded: false,
    },
    {
      number: '3',
      title: t('stablecoinAcceptanceWithFiatSettlement'),
      description: [],
      details: [
        t('acceptStablecoinPaymentsUsdcUsdtAcrossMajorChains'),
        t('autoConvertToFiatAndSettleToANamedAccountOrThirdPartyVendor'),
        t('enableA247PaymentInfrastructureWithBlockchainFinality'),
      ],
      isInitiallyExpanded: false,
    },
    {
      number: '4',
      title: t('oneStopCryptoOffRamps'),
      description: [],
      details: [
        t('seamlesslyConvertCryptoIntoFiatViaRegulatedCompliantRails'),
        t('withdrawDirectlyToYourOwnOrThirdPartyBankAccounts'),
        t('avoidExchangeWithdrawalLimitsDelaysOrHeavyManualKyc'),
      ],
      isInitiallyExpanded: false,
    },
    {
      number: '5',
      title: t('smarterTreasuryDiversification'),
      description: [],
      details: [
        t('moveIdleCryptoTreasuryIntoYieldBearingAssetsStablecoinsOrRealWorldAssets'),
        t('hedgeAgainstVolatilityAndDiversifyBeyondTheCryptoNativeEcosystem'),
        t('stayAgileAcrossMarketCyclesAndRegulatoryWaves'),
      ],
      isInitiallyExpanded: false,
    },
    {
      number: '6',
      title: t('embeddedComplianceAndRiskControls'),
      description: [],
      details: [
        t('integratedKytKnowYourTransactionMonitoring'),
        t('realTimeAlertsForSuspiciousPayments'),
        t('meetInstitutionalComplianceStandardsEffortlessly'),
      ],
      isInitiallyExpanded: false,
    },
  ];

  const treasuryGoalFeatures = [
    { text: t('noFiatAccounts') },
    { text: t('paymentFragmentation') },
    { text: t('onOffRampIssues') },
    { text: t('treasuryInefficiency') },
    { text: t('crossBorderPaymentFriction') },
  ];

  const yasbeeDeliversFeatures = [
    { text: t('namedVirtualAccountsInUsdEurGbp') },
    { text: t('unifiedGlobalPlatformForCryptoAndFiatFlows') },
    { text: t('stablecoinCheckoutCompliantFiatSettlement') },
    { text: t('diversifyIntoFiatStablecoinsRwas') },
    { text: t('globalPayoutAndCollectionInfrastructure') },
  ];
  return (
    <>
      <HeroSection
        title1={t('globalCashManagement')}
        title2={t('forCryptoBusinesses')}
        desc={[
          t(
            'yasbePowersCryptoNativeBusinessesWithSmarterCashControlSeamlessGlobalReachAndBuiltInRegulatoryComplianceAllFromOneUnifiedPlatform',
          ),
        ]}
        image="/banner/crypto-native.png"
      />
      <ChallengesSection data={challengesData} />
      <SolutionSection data={solutions} title={t('yasbeSolution')} />
      <GoalToOutcome
        title={t('fromChallengeToSolution')}
        firstCardTitle={t('challenge')}
        secondCardTitle={t('yasbeSolution')}
        firstCardFeatures={treasuryGoalFeatures}
        secondCardFeatures={yasbeeDeliversFeatures}
      />
      <TreasuryChallenges />
      <GetStarted />
      <Footer />
    </>
  );
}
