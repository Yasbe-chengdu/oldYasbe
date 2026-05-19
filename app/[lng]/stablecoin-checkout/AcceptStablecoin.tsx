import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeader } from '@/components/SectionHeader';
import React from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const AcceptStablecoin: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'stablecoin-checkout');
  const features = [
    {
      iconSrc: '/icons/covered-box.svg',
      description: t('institutionalGradeTradingExperience'),
      hasDoubleIcon: true,
    },
    {
      iconSrc: '/icons/covered-shield.svg',
      description: t('spotDeliveryAtTheMostCompetitivePricing'),
      hasDoubleIcon: false,
    },
    {
      iconSrc: '/icons/user-exchange.svg',
      description: t('ensuringTheEcosystemGrowsCompliantly'),
      hasDoubleIcon: true,
    },
  ];

  return (
    <SectionContainer>
      <div data-aos="fade-up" className="flex w-full max-w-screen-xl flex-col items-stretch max-md:max-w-full">
        <SectionHeader
          title={t('acceptStablecoinPaymentsGlobally')}
          desc={t('enableStablecoinPaymentsToReachGlobalCustomers')}
        />
        <div className="self-center flex w-full items-center gap-6 flex-wrap mt-20 max-md:mt-10">
          {features.map((feature, index) => (
            <article
              key={index}
              data-aos="flip-up"
              data-aos-delay={(index + 1) * 150}
              className="border self-stretch min-w-60 min-h-60 overflow-hidden flex-1 shrink basis-[0%] my-auto p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:px-5"
            >
              {feature.hasDoubleIcon ? (
                <div className="justify-center items-center flex w-16 flex-col h-16 bg-[#FFCA00] rounded-[60px]">
                  <div className="justify-center items-center flex w-full gap-2.5 h-16 bg-[#FFCA00] px-4 rounded-[60px]">
                    <img src={feature.iconSrc} alt="" className="aspect-[1] object-contain w-8 self-stretch my-auto" />
                  </div>
                </div>
              ) : (
                <div className="justify-center items-center flex w-16 gap-2.5 h-16 bg-[#FFCA00] px-4 rounded-[60px]">
                  <img src={feature.iconSrc} alt="" className="aspect-[1] object-contain w-8 self-stretch my-auto" />
                </div>
              )}
              <p className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] mt-6">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
