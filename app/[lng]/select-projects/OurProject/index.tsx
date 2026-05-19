import React, { useState } from 'react';
import { TabNavigation } from './TabNavigation';
import { TabContent } from './TabContent';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const OurProject: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'select-projects');
  const tabs = [
    { id: '1', title: t('firstPass') },
    { id: '2', title: t('deepDive') },
    { id: '3', title: t('finalCall') },
  ];

  const processTabData = [
    {
      id: '1',
      title: t('firstPass'),
      image: '',
      steps: [
        {
          title: t('founders'),
          image: '/icons/mp-user.svg',
          description: t(
            'weLookForFoundersWithGritCharismaRelevantExperienceClearVisionAndExecutionSkillsPlusBonusPointsForDiversityStrongNetworksAndLongTermThinking',
          ),
        },
        {
          title: t('product'),
          image: '/icons/mp-package.svg',
          description: t(
            'isTheIdeaSolvingARealProblemWeEvaluateHowWellItsExecutedHowRefinedTheProductIsAndHowMuchThoughtHasGoneIntoTheTechnologyAndUserExperience',
          ),
        },
        {
          title: t('traction'),
          image: '/icons/mp-chart-line.svg',
          description: t(
            'weLookForMomentumThatCouldMeanRevenueGrowthStrongUserAdoptionPressCoverageOrBackingFromCredibleInvestorsEssentiallyIsThereProofThatTheMarketCares',
          ),
        },
        {
          title: t('mission'),
          image: '/icons/mp-blub.svg',
          description: t(
            'weWantToBackFoundersWhoAreBuildingForImpactWhatsTheDeeperPurposeBehindTheBusinessHowWillThisVentureMakeTheWorldBetter',
          ),
        },
      ],
    },
    {
      id: '2',
      title: t('deepDive'),
      image: '',
      steps: [
        {
          title: t('businessModel'),
          image: '/icons/mp-chart-pie.svg',
          description: t('howDoesTheCompanyGenerateRevenueAndHowScalableIsThatModel'),
        },
        {
          title: t('market'),
          image: '/icons/mp-globe.svg',
          description: t('isThisTargetingABigMarketCanItBeDisruptive'),
        },
        {
          title: t('technology'),
          image: '/icons/mp-cpu.svg',
          description: t('whatsUniqueAboutTheirTechIsItDefensible'),
        },
        {
          title: t('team'),
          image: '/icons/mp-users.svg',
          description: t('howMeaningfulIsTheMissionAndHowIsItBeingPutIntoAction'),
        },
        {
          title: t('factChecking'),
          image: '/icons/mp-list-check.svg',
          description: t('weVerifyKeyClaimsCustomerContractsPreviousFundingPartnershipsEtc'),
        },
        {
          title: t('terms'),
          image: '/icons/mp-note.svg',
          description: t('areTheDealTermsFairAndRealisticBasedOnTheStageAndTraction'),
        },
        {
          title: t('runway'),
          image: '/icons/mp-hour-glass.svg',
          description: t('doesTheCompanyHaveEnoughFundingToOperateEvenWithoutHittingItsFundraisingGoals'),
        },
        {
          title: t('eligibility'),
          image: '/icons/mp-sheild.svg',
          description: t(
            'weVerifyThatStartupsMeetLegalAndRegulatoryStandardsThroughFinancialReviewsAndBackgroundChecksOnKeyTeamMembers',
          ),
        },
      ],
    },
    {
      id: '3',
      title: t('finalCall'),
      image: '',
      steps: [],
    },
  ];
  const [activeTab, setActiveTab] = useState('1');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section
      className="flex w-full max-w-[1440px] flex-col items-start gap-20 box-border mx-auto my-0 p-20 max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10"
      data-aos="fade-up"
    >
      <header
        className="flex flex-col justify-center items-center gap-6 w-full"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className=" max-w-full text-[#1C1C1C] text-center text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] max-md:text-5xl max-md:tracking-[-1.92px] max-md:w-full max-sm:text-[36px] max-sm:tracking-[-1.28px] max-sm:leading-[38.4px]">
          {t('ourProjectVettingProcess')}
        </h1>
        <p className="w-[604px] max-w-full text-[#777] text-center text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:text-base max-md:tracking-[-0.32px] max-md:w-full max-sm:text-sm max-sm:tracking-[-0.28px]">
          {t(
            'outOfThousandsOfApplicationsWeCarefullySelectTheFewThatMeetOurHighStandardsHereIsHowTheSelectionProcessWorks',
          )}
          {t('selectionProcessWorks')}
        </p>
      </header>

      <main
        className="flex flex-col gap-[60px] self-stretch relative rounded-2xl max-md:gap-10 max-sm:gap-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div data-aos="zoom-in" data-aos-delay="200">
          <TabNavigation
            tabs={tabs.map(tab => ({ ...tab, isActive: tab.id === activeTab }))}
            onTabClick={handleTabChange}
          />
        </div>
        <div>
          <TabContent activeTab={activeTab} tabData={processTabData} />
        </div>
      </main>
    </section>
  );
};
