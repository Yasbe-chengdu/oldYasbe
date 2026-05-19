import React from 'react';
import { ContentBlock } from './ContentBlock';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const AboutSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'about-us');
  return (
    <section className="flex w-full max-w-[1440px] flex-col items-start gap-2.5 box-border mx-auto my-0 p-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex justify-center items-center gap-20 w-full max-md:flex-col max-md:gap-[60px] max-md:items-center max-sm:gap-10">
        <div className="flex h-[804px] flex-col justify-center items-center gap-10 shadow-[0px_4px_64px_-20px_rgba(0,0,0,0.20)] box-border bg-white p-10 rounded-2xl max-md:w-full max-md:max-w-[600px] max-md:h-auto max-md:p-[30px] max-sm:h-auto max-sm:p-5">
          <img
            src="/images/shared-vision.png"
            alt={t('teamCollaborationAndModernBusinessEnvironment')}
            className="w-[550px] h-[724px] shrink-0  object-cover rounded-2xl max-md:w-full max-md:max-w-[500px] max-md:h-auto max-md:aspect-[550/724] max-sm:w-full max-sm:h-auto"
          />
        </div>
        <div className="flex flex-col items-start gap-12 flex-[1_0_0] max-md:w-full max-md:max-w-[600px] max-md:items-center max-md:text-center max-sm:gap-8">
          <ContentBlock
            data-aos="fade-up"
            data-aos-delay="100"
            title={t('unitedByASharedVision')}
            description={t(
              'weAreATeamOfExpertsInBankingTechAndEntrepreneurshipBroughtTogetherByTheMissionToTransformHowBusinessesManagePaymentsInADigitalFirstWorld',
            )}
          />
          <hr className="w-full border-1" />
          <ContentBlock
            data-aos="fade-up"
            data-aos-delay="200"
            title={t('builtForModernSmbs')}
            description={t(
              'frustratedByOutdatedBankingSystemsWeCreatedASecureAndIntuitivePlatformThatEmpowersSmbsToTakeControlOfGlobalPaymentsSimplyAndEfficiently',
            )}
          />
        </div>
      </div>
    </section>
  );
};
