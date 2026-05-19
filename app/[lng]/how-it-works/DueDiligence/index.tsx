'use client';
import React, { useState } from 'react';
import { ImageDisplay } from './ImageDisplay';
import { DueDiligenceCard } from './DueDiligenceCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface CardData {
  id: string;
  title: string;
  description?: string;
}

export const DueDiligence: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'how-it-works');
  const cardData: CardData[] = [
    {
      id: 'deal-structure',
      title: t('understandTheDealStructure'),
      description: t(
        'differentRegulationsLikeRegCFRegAOrRegSComeWithDifferentTermsLookIntoMinimumInvestmentsFundingTargetsAndPerksOrDiscounts',
      ),
    },
    {
      id: 'progress-goals',
      title: t('assessProgressAndGoals'),
      description: t('whatMilestonesHasTheCompanyHitSoFarWhatsTheirPlanToReachTheNextStage'),
    },
    {
      id: 'community',
      title: t('engageWithTheCommunity'),
      description: t(
        'theCommentsSectionCanBeAGoldmineItsWhereFoundersInteractWithPotentialInvestorsAndWhereYouCanAskQuestionsOrLearnFromOthers',
      ),
    },
    {
      id: 'investments',
      title: t('spreadOutYourInvestments'),
      description: t(
        'ratherThanGoingAllInOnASingleOpportunityConsiderMakingSeveralSmallerInvestmentsItNotOnlyLowersYourRiskButAlsoHelpsYouGainBroaderExperience',
      ),
    },
    {
      id: 'lead-investors',
      title: t('payAttentionToLeadInvestors'),
      description: t(
        'isSomeoneWithExperienceBackingTheSameDealUnderTheSameTermsIfSoWhyAreTheyInAndWhatDoTheySeeInTheOpportunity',
      ),
    },
    {
      id: 'purpose',
      title: t('investWithPurpose'),
      description: t(
        'beyondFinancialReturnThinkAboutTheBiggerPictureAskYourselfHowThisInvestmentAlignsWithYourValuesAndWhetherItContributesToAFutureYouWantToHelpBuild',
      ),
    },
  ];
  const [expandedCard, setExpandedCard] = useState<string>('deal-structure');

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? '' : cardId);
  };

  return (
    <section
      className="flex flex-col items-start gap-2.5 self-stretch relative px-4 py-20 max-md:px-4 max-md:py-[60px] max-sm:px-4 max-sm:py-10 bg-black"
      data-aos="fade-up"
    >
      <div className="flex w-full max-w-[1408px] flex-col items-start gap-2.5 relative mx-auto my-0 p-16 rounded-2xl max-md:px-8 max-md:py-12 max-sm:px-4 max-sm:py-8">
        <div className="flex w-full max-w-screen-xl flex-col items-start gap-20 relative max-md:gap-[60px] max-sm:gap-10">
          <header className="flex w-full flex-col items-center gap-6 relative" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-white text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative text-center max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
              {t('doYourDueDiligence')}
            </h1>
            <p className="w-full max-w-[754px] text-[#A5A5A5] text-center text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px]">
              {t('takeTimeToReadThroughTheDetailsAndThenReadThemAgainSomeThingsToFocusOn')}
            </p>
          </header>

          <div
            className="flex w-full justify-center items-center gap-20 relative max-md:flex-col max-md:gap-[60px] max-sm:gap-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ImageDisplay src="/images/due-diligence.png" alt="Investment analysis and due diligence visualization" />

            <div className="flex flex-col items-start gap-8 flex-[1_0_0] relative">
              {cardData.map(card => (
                <DueDiligenceCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  isExpanded={expandedCard === card.id}
                  onClick={() => handleCardClick(card.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
