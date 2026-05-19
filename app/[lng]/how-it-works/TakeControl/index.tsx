import React from 'react';
import { DueDiligenceCard } from './DueDiligenceCard';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const TakeControl: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'how-it-works');
  const dueDiligenceData = [
    {
      number: t('1'),
      title: t('understandTheRisks'),
      description: t('privateInvestmentsCarryRiskEspeciallyStartupsNeverInvestMoreThanYouCanAffordToLose'),
    },
    {
      number: t('2'),
      title: t('stickToWhatYouKnow'),
      description: t(
        'ifItIsTooComplexToExplainItMayNotBeTheRightFitFocusOnWhatYouUnderstandOrLearnMoreInOurInvestorAcademy',
      ),
    },
    {
      number: t('3'),
      title: t('lookIntoThePeopleBehindTheDeal'),
      description: t('aGreatIdeaNeedsGreatExecutionResearchTheFoundersExperienceAndTrackRecord'),
    },
  ];

  return (
    <section className="flex w-full max-w-[1440px] flex-col items-start gap-20 relative box-border mx-auto my-0 p-20 max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:gap-10 max-sm:px-5 max-sm:py-10">
      <header className="flex flex-col justify-center items-center gap-6 self-stretch relative">
        <h1 className="w-[650px] text-[#1C1C1C] text-center text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative max-md:w-full max-md:max-w-[650px] max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px] max-sm:leading-[43.2px]">
          <div
            className="font-bold max-md:text-[56px] max-sm:text-[36px] max-sm:leading-[40px] max-sm:tracking-[-0.6px]  text-[#1C1C1C]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t('takeControlOfYouOwnDueDiligence')}
          </div>
        </h1>
        <p className="w-[580px] text-[#777] text-center text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:w-full max-md:max-w-[580px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-base max-sm:tracking-[-0.32px]">
          <span className="font-normal text-lg text-[#777]">
            {t('beforeYouInvestTakeTimeToUnderstandTheRisksRewardsAndPotentialThisQuickChecklistWillHelp')}
            {t('guideYourDecisions')}
          </span>
        </p>
      </header>
      <div className="flex items-start gap-6 self-stretch relative max-md:flex-col max-md:gap-5 max-sm:gap-4">
        {dueDiligenceData.map((item, index) => (
          <DueDiligenceCard key={index} number={item.number} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};
