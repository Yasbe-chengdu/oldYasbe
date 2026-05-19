import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';
import React from 'react';

interface ContentSectionProps {
  index?: number;
  title: string;
  description: string;
}

const ContentBlock: React.FC<ContentSectionProps> = ({ index = 0, title, description }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={(index + 1) * 150} className="w-full max-md:max-w-full">
      <h3 className="text-[#1C1C1C] text-[40px] font-bold leading-[1.3] tracking-[-0.8px] max-md:max-w-full">
        {title}
      </h3>
      <p className="text-[#777] text-lg font-normal leading-[29px] tracking-[-0.36px] mt-6 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export const ContentSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'card');
  return (
    <aside className="min-w-60 flex-1 shrink basis-[50px] my-auto max-md:max-w-full space-y-10">
      <ContentBlock index={1} title={t('flexibleRepaymentOptions')} description={t('flexibleBalanceRepayment')} />
      <hr className="border-1 w-full" />
      <ContentBlock
        index={2}
        title={t('settleCorporateExpensesYourWay')}
        description={t('settleCorporateExpensesYourWayDesc')}
      />
    </aside>
  );
};
