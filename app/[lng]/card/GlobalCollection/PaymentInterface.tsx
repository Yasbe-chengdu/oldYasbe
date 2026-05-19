'use client';
import React, { useState } from 'react';
import { BalanceDisplay } from './BalanceDisplay';
import { PaymentMethod } from './PaymentMethod';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const PaymentInterface: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'card');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('bank-transfer');
  const paymentMethods = [
    {
      id: 'bank-transfer',
      icon: '/icons/bank-transfer.svg',
      title: t('bankTransfer'),
      description: t('transferFromYourBankAccountOrUseYourBalanceWithYASBe'),
    },
    {
      id: 'stablecoin',
      icon: '/icons/stablecoin.svg',
      title: t('stablecoin'),
      description: t('useYourStablecoinBalanceWithYASBe'),
    },
  ];

  return (
    <article className="bg-white shadow-[0px_4px_64px_-20px_rgba(0,0,0,0.2)] flex min-w-60 flex-col overflow-hidden items-center justify-center flex-1 shrink basis-[0%] px-[25px] py-10 rounded-2xl max-md:max-w-full max-md:px-5">
      <div className="border flex max-w-full w-[550px] flex-col items-stretch justify-center p-8 rounded-2xl border-[rgba(223,225,231,1)] border-solid max-md:px-5">
        <div className="w-full max-md:max-w-full">
          <section className="w-full max-md:max-w-full">
            <h3 className="text-[rgba(28,28,28,1)] text-2xl font-semibold leading-[1.2] tracking-[-0.96px]">
              {t('makeARepayment')}
            </h3>
            <BalanceDisplay outstandingBalance="USD 5,264.59" minimumPayment="USD 500.00" />
          </section>
          <section className="w-full mt-6 max-md:max-w-full">
            <h3 className="text-[rgba(28,28,28,1)] text-2xl font-semibold leading-[1.2] tracking-[-0.96px]">
              {t('selectPaymentMethod')}
            </h3>
            <div className="space-y-5">
              {paymentMethods.map(method => (
                <PaymentMethod
                  key={method.id}
                  icon={method.icon}
                  title={method.title}
                  description={method.description}
                  isSelected={selectedPaymentMethod === method.id}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
