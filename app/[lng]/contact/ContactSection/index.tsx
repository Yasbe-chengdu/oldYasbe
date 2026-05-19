import React from 'react';
import { ContactForm } from './ContactForm';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const ContactSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'contact');
  return (
    <main className="flex flex-col items-start gap-2.5 self-stretch  px-4 py-20">
      <div className="flex w-full max-w-[1408px] bg-[radial-gradient(54.62%_69.07%_at_54.62%_50.05%,#292619_0%,#141414_100%)] flex-col items-start gap-2.5 mx-auto my-0 p-16 rounded-2xl max-md:max-w-full max-md:px-8 max-md:py-12 max-sm:px-6 max-sm:py-8">
        <div className="flex w-full max-w-screen-xl flex-col items-start gap-20 mx-auto my-0 max-md:max-w-full max-md:gap-[60px] max-sm:gap-10">
          <header className="flex flex-col items-center gap-6 self-stretch text-center">
            <h1 className="text-white text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] max-md:text-[40px] max-md:leading-[52px] max-sm:text-[32px] max-sm:leading-[41.6px]">
              {t('letsGrowYourBusinessTogether')}
            </h1>
            <p className="text-[#A5A5A5] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-sm:text-base max-sm:leading-[25.6px]">
              {t('tellUsAboutYourGoalsWeWillHelpYouUnlockNewGrowthThroughSmarterFunding')}
            </p>
          </header>
          <ContactForm />
        </div>
      </div>
    </main>
  );
};
