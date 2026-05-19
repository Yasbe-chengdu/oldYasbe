'use client';

import React from 'react';
import { JobCard } from './JobCard';
import { SectionContainer } from '@/components/SectionContainer';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const JobListingsSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'careers');
  const jobPositions = [
    { title: t('paymentsComplianceManager'), hasContent: true, isInitiallyExpanded: true },
    { title: t('fullStackEngineer'), hasContent: true },
    { title: t('frontEndWebEngineer'), hasContent: true },
    { title: t('headOfEngineering'), hasContent: true },
  ];

  return (
    <SectionContainer>
      <header className="flex flex-col justify-center items-center gap-6 w-full">
        <h1 className="w-[650px] text-[#1C1C1C] text-center text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] max-md:w-full max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
          {t('openPositions')}
        </h1>
      </header>

      <div className="flex w-full mt-16 max-w-screen-xl flex-col items-start gap-6 max-md:max-w-full">
        {jobPositions.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            hasContent={job.hasContent}
            isInitiallyExpanded={job.isInitiallyExpanded}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
