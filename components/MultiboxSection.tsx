import React from 'react';
import { MultiboxCard } from './MultiboxCard';
import { ActionButton } from '@/components/ActionButton';
import { SectionContainer } from './SectionContainer';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface MultiboxSectionProps {
  title: string;
  data: any[];
  onCTAClick?: () => void;
}

export const MultiboxSection: React.FC<MultiboxSectionProps> = ({ title, data }) => {
  const router = useRouter();
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'multibox');
  return (
    <SectionContainer className="max-w-[1440px]">
      <div className="flex justify-center items-center gap-10 w-full max-w-7xl mx-auto my-0 md:flex-row md:gap-10 flex-col  sm:gap-8 px-4">
        <div className="flex flex-col justify-center items-start gap-6 max-sm:gap-0 w-[450px] max-md:w-full max-sm:w-full">
          <h1 className="self-stretch text-[#1C1C1C] text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-3xl max-sm:tracking-[-1.2px] max-sm:leading-[40px]">
            {title}
          </h1>
          <div>
            <ActionButton
              onClick={() => {
                router.push('https://trade.beeznis.com/auth/register');
              }}
              label={t('findOutMore')}
              black
            />
          </div>
        </div>
        {!!data?.length && (
          <div className="flex flex-col items-start gap-4 flex-1 w-full">
            <div className="flex items-start self-stretch md:flex-row md:gap-4 flex-col gap-4 w-full">
              <MultiboxCard
                index={1}
                icon={data[0].icon}
                title={data[0].title}
                description={data[0].description}
                className="w-full"
              />
              <MultiboxCard
                index={2}
                icon={data[1].icon}
                title={data[1].title}
                description={data[1].description}
                className="w-full"
              />
            </div>
            <div className="flex items-start self-stretch md:flex-row md:gap-4 flex-col gap-4 w-full">
              <MultiboxCard
                index={3}
                icon={data[2].icon}
                title={data[2].title}
                description={data[2].description}
                className="w-full"
              />
              <MultiboxCard
                index={4}
                icon={data[3].icon}
                title={data[3].title}
                description={data[3].description}
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};
