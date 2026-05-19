import React from 'react';
import { UseCaseItem } from './UseCaseItem';
import { SectionContainer } from '../SectionContainer';
import { SectionHeader } from '../SectionHeader';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

interface UseCaseProp {
  data: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export const UseCase = ({ data }: UseCaseProp) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'use-case');
  return (
    <SectionContainer>
      <SectionHeader
        title={t('useCasesAcrossIndustries')}
        desc={t('seeHowOrganizationsAcrossSectorsBenefitFromYasbesPlatform')}
      />
      <section className="flex w-full gap-6 flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
        {data.map((useCase, index) => (
          <UseCaseItem
            key={useCase.title}
            index={index}
            icon={useCase.icon}
            title={useCase.title}
            description={useCase.description}
            isLast={index === data.length - 1}
          />
        ))}
      </section>
    </SectionContainer>
  );
};
