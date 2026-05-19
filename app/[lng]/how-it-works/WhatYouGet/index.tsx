'use client';
import React from 'react';
import { InvestmentCard } from './InvestmentCard';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const WhatYouGet: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'how-it-works');
  const investmentTypes = [
    {
      type: 'equity' as const,
      title: t('equity'),
      description: t(
        'prepareToEngageWithOurInteractivePlatformWhereLearningITFeelsLikeAnExcitingAdventureEveryLessonIsDesignedToKeepYouMotivatedAndEagerToLearn',
      ),
    },
    {
      type: 'future-equity' as const,
      title: t('futureEquity'),
      description: t(
        'thisTypeOfInvestmentGivesYouAPotentialClaimToEquityOrACashEquivalentAtALaterTimeHoneybeeUsesAStructureCalledTheCrowdSAFESimpleAgreementForFutureEquityItIsImportantToNoteThatSAFEDoesntMeanTheInvestmentIsLowRiskItSimplyRefersToTheLegalFrameworkUsed',
      ),
    },
    {
      type: 'digital-assets' as const,
      title: t('digitalAssets'),
      description: t(
        'digitalAssetsAreBlockchainBasedTokensOrCryptocurrenciesThatMayIncreaseInValueDependingOnMarketDemandAndTheUtilityOfTheAssetYouMightEncounterAgreementsLikeATokenDPAAnInterestBearingLoanRepaidInTokensOrCashOrATokenPurchaseAgreementTPAWhichIsAContractPromisingTokenDeliveryInTheFutureItsNotAnEquityDebtOrTheTokenItself',
      ),
    },
    {
      type: 'debt' as const,
      title: t('debt'),
      description: t(
        'debtInvestingMeansYoureLendingMoneyToACompanyWithTheExpectationOfRepaymentPlusInterestHoneybeeOffersCrowdTermNotesWhichSpecifyFixedInterestRatesAndScheduledRepaymentTermsBasedOnTheLoanAmount',
      ),
    },
    {
      type: 'revenue-share' as const,
      title: t('revenueShare'),
      description: t(
        'withRevenueSharingModelsYouEarnAPortionOfTheCompaniesRevenueWithoutOwningAnyEquityThisIsTypicallyStructuredThroughCrowdRevenueNotesWhereRepaymentsAreBasedOnAPercentageOfTheIssuersIncomeUntilACertainCapIsReached',
      ),
    },
  ];
  const [selectedType, setSelectedType] = React.useState<
    'equity' | 'future-equity' | 'digital-assets' | 'debt' | 'revenue-share'
  >('equity');

  return (
    <section
      className="flex flex-col items-start gap-2.5 self-stretch relative px-4 py-20 max-md:px-4 max-md:py-10 max-sm:px-4 max-sm:py-5 bg-black"
      data-aos="fade-up"
    >
      <div className="flex w-[1408px] max-w-full flex-col items-start gap-2.5 relative mx-auto my-0 p-16 rounded-2xl max-md:w-full max-md:p-8 max-sm:p-6">
        <div className="flex w-[1280px] max-w-full flex-col items-start gap-20 relative max-md:w-full max-md:gap-10 max-sm:gap-8">
          <header
            className="flex flex-col items-center gap-6 self-stretch relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-white text-[56px] font-bold leading-[44px] tracking-[-2.24px] relative text-center max-md:text-[40px] max-md:tracking-[-1.6px] max-sm:text-[36px] max-sm:tracking-[-1.28px]">
              {t('whatYouGetWhenYouInvest')}
            </h1>
            <p className="w-[740px] max-w-full text-[#A5A5A5] text-center text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:w-full max-md:text-base max-sm:text-sm max-sm:leading-[21px]">
              {t(
                'whenYouInvestThroughYASBeYouProvideCapitalInExchangeForAFinancialInterestThisIsGovernedByAFormalAgreementWithTheFundraisingEntity',
              )}
            </p>
          </header>

          <div
            className="flex w-[1280px] max-w-full justify-center items-center gap-20 relative max-md:flex-col max-md:w-full max-md:gap-10 max-sm:gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col items-start flex-[1_0_0] relative max-md:w-full">
              {investmentTypes.map((investment, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedType(investment.type)}
                  style={{ cursor: 'pointer', width: '100%' }}
                >
                  <InvestmentCard
                    type={investment.type}
                    title={investment.title}
                    isHighlighted={selectedType === investment.type}
                    description={selectedType === investment.type ? investment.description : undefined}
                  />
                </div>
              ))}
            </div>

            <div className="flex h-[720px] flex-col justify-center items-center gap-10 flex-[1_0_0] relative p-10 rounded-2xl max-md:h-[400px] max-md:p-5 max-sm:h-[300px] max-sm:p-4 bg-[#FFFFFF29]">
              <figure className="flex flex-col justify-center items-center flex-[1_0_0] max-md:flex-auto self-stretch shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] relative overflow-hidden rounded-2xl">
                <img
                  src="/images/how-its-works-4.png"
                  alt="Investment platform dashboard showing various investment opportunities and analytics"
                  className="h-[640px] aspect-[1137.78/640.00] absolute object-cover top-0 max-md:w-full max-md:h-auto max-md:relative max-md:left-0 max-md:top-0 max-sm:w-[300px] max-sm:h-[270px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
