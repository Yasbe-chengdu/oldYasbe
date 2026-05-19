import { useParams } from 'next/navigation';
import React from 'react';
import { useTranslation } from '@/i18n/client';

interface Step {
  title: string;
  description: string;
  image?: string;
}

interface TabContentProps {
  activeTab: string;
  tabData: {
    id: string;
    title: string;
    image: string;
    steps: Step[];
  }[];
}

export const TabContent: React.FC<TabContentProps> = ({ activeTab, tabData }) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'select-projects');
  const tabDescriptions: Record<string, string> = {
    '1': t('weStartByScanningForStrongEarlySignalsUsingAFrameworkWeCallFPTMFoundersProductTractionAndMission'),
    '2': t(
      'ifAStartupShowsEarlyPromiseWeMoveIntoAMoreThoroughReviewThisIncludesGoingOverPitchDecksTalkingDirectlyWithFoundersAndConductingIndependentResearchWeAlsoLeanOnOurNetworkWhenNeededToEvaluate',
    ),
    '3': t(
      'onceDueDiligenceIsWrappedOurTeamDecidesWhetherTheStartupEarnsASpotOnYASBeIfApprovedWeMoveForwardWithDocumentationGetTheCampaignReadyForLaunchAndContinueSupportingTheCompanyDuringAndAfterTheRaise',
    ),
  };
  const currentTab = tabData.find(tab => tab.id === activeTab);
  if (!currentTab) return null;

  return (
    <>
      <p className="text-[#777] text-base font-normal leading-[28.8px] tracking-[-0.36px] mb-6">
        {tabDescriptions[activeTab]}
      </p>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {currentTab.steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-start p-6 rounded-xl bg-white border border-[#ECECEC]">
            <div className="flex items-center gap-3 mb-2">
              {step.image ? (
                <img src={step.image} alt="" className="w-10 h-10 p-2.5 rounded-full bg-[#FFCA00] object-contain" />
              ) : (
                <span className="flex items-center justify-center w-8 h-8 bg-[#FFCA00] rounded-full"></span>
              )}
              <h3 className="text-[#1C1C1C] text-base font-bold">{step.title}</h3>
            </div>
            <p className="text-[#777] text-base font-normal leading-[1.5]">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
