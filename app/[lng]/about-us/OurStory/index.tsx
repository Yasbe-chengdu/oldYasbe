import React from 'react';
import { FeatureCard } from './FeatureCard';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeader } from '@/components/SectionHeader';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const OurStory: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'about-us');
  const features = [
    {
      icon: '/icons/mail.png',
      title: t('essentialBankingNeeds'),
      description: t(
        'smbsAndStartupsDontAskForMuchJustAFunctionalAccountToReceivePaymentsAndPaySuppliersOrEmployeesOnTime',
      ),
    },
    {
      icon: '/icons/bank.png',
      title: t('brokenBankSupport'),
      description: t(
        'whenBanksFailOrLimitServicesTheseEssentialFunctionsAreDisruptedPuttingEverydayBusinessOperationsAtRisk',
      ),
    },
    {
      icon: '/icons/card-mail.png',
      title: t('purposeBuiltForSmbs'),
      description: t(
        'weBuiltYasbeToMakeCrossBorderPaymentsMoreAffordableSecureAndAccessibleForSmallAndMediumBusinessesWorldwide',
      ),
    },
  ];

  return (
    <SectionContainer>
      <SectionHeader
        title={t('ourStoryAndPurpose')}
        desc={t('connectSmallAndMediumBusinessesSmbsWithTheWorldEconomy')}
      />
      <div className="bg-white shadow-[0px_8px_40px_-20px_rgba(0,0,0,2.1)] w-full mt-20 p-16 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full items-center gap-[40px_53px] text-xl text-[#777] font-normal tracking-[-0.4px] leading-8 justify-between max-md:max-w-full max-md:flex-col max-md:gap-8">
          <div className="self-stretch min-w-60 w-[700px] my-auto max-md:max-w-full max-md:w-full">
            <div className="text-[#777] max-md:max-w-full">
              <span className="font-bold text-lg leading-[29px] tracking-[-0.36px] text-[#777]">
                {t('sinceMarch2023')}
              </span>{' '}
              <span className="text-lg leading-[29px] tracking-[-0.36px] text-[#777]">
                {t(
                  'manySmbsStartupCompaniesAreLeftUnservedDueToTheCollapseOfSilvergateSiliconValleyBankAndSignatureBank',
                )}
              </span>
            </div>
            <div className="text-[#777] mt-6 max-md:max-w-full">
              <span className="font-bold text-lg leading-[29px] tracking-[-0.36px] text-[#777]">
                {t('whenBanksCollapse')}
              </span>
              <span className="text-lg leading-[29px] tracking-[-0.36px] text-[#777]">
                {t(
                  'depositsMightBeRecoveredButOperationsAlmostComeToAHaltThereIsNoNewAccountOpeningOrOnboardingNewCustomersPaymentAndCollectionServicesAreInterruptedAndDelayedAndCustomerServiceIsNonexistent',
                )}
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 max-md:w-full max-md:flex max-md:justify-center">
            <img
              src="/images/banking-services-illustration.png"
              alt={t('bankingServicesIllustration')}
              className="w-full max-w-[516px] h-auto aspect-[1.19] object-contain rounded-2xl max-md:max-w-full max-md:w-auto max-md:h-auto"
            />
          </div>
        </div>
        <div className="flex w-full gap-6 flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
