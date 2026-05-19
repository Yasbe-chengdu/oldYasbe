'use client';
import React, { useState } from 'react';
import { DealTermsHeader } from './DealTermsHeader';
import { Accordion } from './Accordion';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const WhatAreDeals: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'how-it-works');
  const [expandedCard, setExpandedCard] = useState<string>('funding-goals');

  const toggleCard = (cardId: string) => {
    setExpandedCard(prev => (prev === cardId ? '' : cardId));
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <section
        className="flex w-full max-w-[1440px] flex-col items-start gap-20 box-border bg-white mx-auto my-0 p-20 max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10"
        data-aos="fade-up"
      >
        <div data-aos="fade-up" data-aos-delay="100">
          <DealTermsHeader />
        </div>

        <div
          className="flex items-start gap-6 w-full max-md:flex-col max-md:gap-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-start gap-6 left-[column] max-md:w-full">
            <Accordion
              title={t('fundingGoals')}
              isExpanded={expandedCard === 'funding-goals'}
              onToggle={() => toggleCard('funding-goals')}
            >
              <div className="w-full text-[#777] text-lg font-semibold leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                {t('everyCampaignHasTwoKeyFundingBenchmarks')}
              </div>
              <div className="w-full text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                <ul className="list-disc pl-5 ml-0 space-y-2">
                  <li className="pl-0 text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    <span className="font-bold">{t('minimumFundingGoal')}:</span>{' '}
                    {t(
                      'theLowestAmountTheStartupMustRaiseToSucceedIfTheyDontHitThisTargetByTheCampaignsEndTheDealFallsThroughAndAllInvestmentsAreRefunded',
                    )}
                  </li>
                  <li className="pl-0 text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    <span className="font-bold">{t('maximumFundingGoal')}:</span>{' '}
                    {t('theHighestAmountTheStartupIsWillingToAcceptOnceReachedTheCampaignStopsTakingNewInvestments')}
                  </li>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title={t('investmentAmounts')}
              isExpanded={expandedCard === 'investment-amounts'}
              onToggle={() => toggleCard('investment-amounts')}
            >
              <div className="w-full text-[#777] text-lg font-semibold leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                {t('startupsSetTheirOwnMinimumAndMaximumInvestmentLimits')}
              </div>
              <div className="w-full text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                <ul className="list-disc pl-5 ml-0 space-y-2">
                  <li className="pl-0 font-normal text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    {t('theLowestAllowedIsTypicallyUSD100000')}
                  </li>
                  <li className="pl-0 text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    {t('someCompaniesCapMaximumInvestmentsToEnsureBroaderParticipation')}
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>

          <div className="flex flex-col items-start gap-6 right-[column] max-md:w-full">
            <Accordion
              title={t('campaignTimeline')}
              isExpanded={expandedCard === 'campaign-timeline'}
              onToggle={() => toggleCard('campaign-timeline')}
            >
              <div className="w-full text-[#777] text-lg font-semibold leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                {t('eachFundraisingCampaignRunsForAFixedPeriodWhetherOrNotTheStartupMeetsItsFundingGoals')}
                {t('heresWhatYouShouldKnow')}
              </div>
              <div className="w-full text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                <ul className="list-disc pl-5 ml-0 space-y-2">
                  <li className="pl-0 text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    <span className="font-bold">{t('startAndEndDates')}:</span>{' '}
                    {t(
                      'theseAreSetInAdvanceAndDontChangeInvestorsCanCommitFundsAnytimeBeforeTheDeadlineEvenIfTheFundingGoalIsAlreadyMet',
                    )}
                  </li>
                  <li className="pl-0 text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    <span className="font-bold">{t('earlyCloseOrExtension')}:</span>{' '}
                    {t(
                      'ifAStartupHitsItsMinimumGoalEarlyItMayChooseToShortenOrExtendTheCampaignUnderCertainConditions',
                    )}
                  </li>
                  <li className="pl-0 text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    <span className="font-bold">{t('rollingCloseOption')}:</span>{' '}
                    {t(
                      'someStartupsMayKeepTheCampaignOpenAfterHittingTheirMinimumGoalWhileReceivingFundsIncrementallyInvestorsWillBeNotifiedIfThisHappens',
                    )}
                  </li>
                  <li className="pl-0 text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    <span className="font-bold">{t('cancellationDeadline')}:</span>{' '}
                    {t(
                      '48HoursBeforeTheCampaignEndsOrAfterARollingCloseIsTriggeredInvestmentsBecomeFinalAndNonRefundable',
                    )}
                  </li>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title={t('dealTermChangesMidCampaign')}
              isExpanded={expandedCard === 'deal-term-changes'}
              onToggle={() => toggleCard('deal-term-changes')}
            >
              <div className="w-full text-[#777] text-lg font-semibold leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                {t('ifAStartupAdjustsItsTermsAfterLaunchInvestorsMustReconfirmTheirCommitment')}
              </div>
              <div className="w-full text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                <ul className="list-disc pl-5 ml-0 space-y-2">
                  <li className="pl-0 font-normal text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    {t('youllHave14CalendarDaysToRespondToAnyChanges')}
                  </li>
                  <li className="pl-0 text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    {t('ifYouDontReconfirmYourInvestmentIsAutomaticallyCanceledAndRefunded')}
                  </li>
                  <li className="pl-0 text-[#777] text-lg leading-[28.8px] tracking-[-0.36px] max-sm:text-base">
                    {t('anyFutureContributionsWillBeTreatedAsANewInvestment')}
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};
