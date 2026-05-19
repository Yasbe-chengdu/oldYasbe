import React from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { TransactionFlowBox } from '../virtual-account/Branded Accounts/TransactionFlowBox';
import { ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const YasbeSolution: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'stablecoin-checkout');
  return (
    <SectionContainer className="!max-w-[1440px] overflow-x-hidden">
      <div
        data-aos="flip-up"
        data-aos-duration="1000"
        className="flex flex-col items-start bg-black gap-2.5 relative w-full max-w-[1408px] mx-auto my-0 p-16 rounded-2xl max-md:px-4 max-md:py-8 max-sm:px-4 max-sm:py-10"
      >
        <div className="flex w-full max-w-screen-xl flex-col relative max-md:gap-[60px] max-sm:gap-10">
          <header className="flex flex-col items-center gap-6 self-stretch relative">
            <h1 className="text-white text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative text-center max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
              {t('yasbeSolution')}
            </h1>
          </header>

          <div className="flex items-center gap-6 self-stretch relative max-md:flex-col max-md:gap-8 max-sm:gap-6">
            <div className="flex max-md:flex-col items-center w-full mt-20 mb-10 max-md:max-w-full max-md:mt-10 gap-8 max-sm:gap-0">
              <TransactionFlowBox
                title={t('legacyProblem')}
                content={t('legacyProblemDesc')}
                backgroundColor="#F7F7F7"
                className="w-1/2 h-[290px] !text-lg max-md:w-full max-md:h-auto"
              />
              <div className="-mx-14 -my-14 z-10 max-md:mx-0 max-md:my-0 max-md:mb-4 max-sm:-my-6">
                <ArrowRight className="text-yellow-500 max-md:rotate-90 justify-center items-center aspect-[1/1] z-10 flex w-20 h-20 bg-[#1C1C1C] rounded-full px-2 border-[1rem] border-solid border-white" />
              </div>
              <TransactionFlowBox
                title={t('yasbeSolution')}
                content={t('yasbeSolutionDesc')}
                backgroundColor="#FFCA00"
                className="w-1/2 h-[290px] !text-lg max-md:w-full max-md:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
