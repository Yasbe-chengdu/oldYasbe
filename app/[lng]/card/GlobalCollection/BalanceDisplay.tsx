import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';
import React from 'react';

interface BalanceDisplayProps {
  outstandingBalance: string;
  minimumPayment: string;
}

export const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ outstandingBalance, minimumPayment }) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'card');
  return (
    <div className="bg-white border flex w-full flex-col  overflow-hidden items-stretch text-lg max-sm:text-[10px] text-[#1c1c1c] font-normal tracking-[-0.36px] leading-[1.6] justify-center mt-4 p-8 rounded-2xl border-[rgba(223,225,231,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between max-md:max-w-full">
        <div className="self-stretch my-auto">{t('outstandingBalance')}</div>
        <div className="self-stretch my-auto">{outstandingBalance}</div>
      </div>
      <div className="flex w-full items-center gap-[40px_100px] justify-between mt-4 max-md:max-w-full">
        <div className="self-stretch my-auto">{t('minimumPayment')}</div>
        <div className="self-stretch my-auto">{minimumPayment}</div>
      </div>
    </div>
  );
};
