import React from 'react';
import { AccountTypeCard } from './AccountTypeCard';
import { CentralClientHub } from './CentralClientHub';
import { TransactionFlowBox } from './TransactionFlowBox';
import { ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeader } from '@/components/SectionHeader';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const BrandedAccountsSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'branded-accounts');
  return (
    <SectionContainer>
      <div data-aos="fade-up" className="w-full max-md:max-w-full">
        <SectionHeader title={t('title')} desc={t('desc')} />
        <div className="flex w-full flex-col mt-20 ">
          <img src="/images/branded-accounts.svg" alt="Branded Accounts" />
        </div>

        <div className="flex max-md:flex-col items-center w-full mt-20 max-md:max-w-full max-md:mt-10 gap-8">
          <TransactionFlowBox content={t('content1')} backgroundColor="#F7F7F7" />
          <div className="-mx-14 -my-14 z-10">
            <ArrowRight className="text-yellow-500 max-md:rotate-90 justify-center items-center aspect-[1/1] z-10 flex w-20 h-20 bg-[#1C1C1C] rounded-full px-2 border-[1rem] border-solid border-white" />
          </div>
          <TransactionFlowBox content={t('content2')} backgroundColor="#FFCA00" />
        </div>
      </div>
    </SectionContainer>
  );
};
