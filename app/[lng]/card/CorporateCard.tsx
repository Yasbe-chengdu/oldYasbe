import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';
import React from 'react';

export const CorporateCard = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'card');
  return (
    <main className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800`} data-aos="fade-up">
      <div className="flex flex-col items-start gap-2.5 self-stretch relative px-4 py-20 max-md:px-4 max-md:py-[60px] max-sm:px-4 max-sm:py-10">
        <div className="flex w-full max-w-[1408px] flex-col items-start gap-2.5 relative mx-auto my-0 p-16 rounded-2xl max-md:max-w-full max-md:px-8 max-md:py-12 max-sm:px-4 max-sm:py-8">
          <header className="flex w-full max-w-screen-xl flex-col items-center gap-6 relative mb-20 max-md:mb-[60px] max-sm:gap-4 max-sm:mb-10">
            <h1 className="text-white text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative text-center max-md:text-[42px] max-md:tracking-[-1.68px] max-sm:text-[32px] max-sm:tracking-[-1.28px] max-sm:leading-[38.4px]">
              {t('theCorporateCardForGlobalTeamsOfAnySize')}
            </h1>
            <p className="w-full max-w-[754px] text-[#A5A5A5] text-center text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px] max-sm:leading-[21px]">
              {t('designedToMeetTheNeedsOfBusinessesEverywhere')}
              {t('ourCorporateCardOffersSeamlessAccessWithNoBankAccountOrComplexRequirements')}
            </p>
          </header>
          <figure
            className={`flex flex-col items-start gap-8 self-stretch relative p-8 rounded-2xl max-md:p-6 max-sm:p-4 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0.00)_219.4%)]`}
          >
            <img
              src="/images/corporate-card.png"
              alt={t('corporateCardPlatformInterfaceShowingDashboardAndCardManagementFeatures')}
              className="w-full h-auto max-sm:h-[500px] aspect-[16/9] relative object-cover rounded-2xl"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </main>
  );
};
