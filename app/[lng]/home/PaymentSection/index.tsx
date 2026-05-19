import React from 'react';
import { FeatureCard } from './FeatureCard';
import { SecurityIcon } from './SecurityIcon';
import { StablecoinIcon } from './StablecoinIcon';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const PaymentSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  return (
    <section className="flex w-full flex-col items-start gap-2.5 bg-white p-20 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex w-full max-w-screen-xl justify-center items-start gap-20 mx-auto my-0 max-md:flex-col max-md:gap-[60px] max-sm:gap-10">
        <div
          className="flex flex-col justify-center items-start gap-6 flex-[1_0_0] self-stretch max-md:items-center max-md:text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1 className="self-stretch text-[#1C1C1C] text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
            {t('globalPaymentTitle')}
          </h1>
          <p className="w-[35rem] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] max-md:w-full max-md:max-w-[600px] max-sm:text-base max-sm:tracking-[-0.32px]">
            {t('globalPaymentDesc2')}
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 flex-[1_0_0] self-stretch max-md:w-full">
          <FeatureCard icon={<SecurityIcon />} title={t('globalPaymentTitle3')} description={t('globalPaymentDesc3')} />
          <FeatureCard
            icon={<StablecoinIcon />}
            title={t('globalPaymentTitle4')}
            description={t('globalPaymentDesc4')}
          />
        </div>
      </div>
    </section>
  );
};
