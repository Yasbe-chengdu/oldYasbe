import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeader } from '@/components/SectionHeader';
import * as React from 'react';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const StreamlineTransactions: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'streamline-transactions');
  const features = ['streamline-1.png', 'streamline-2.png', 'streamline-3.png'];

  return (
    <SectionContainer>
      <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
        <SectionHeader title={t('title')} desc={t('desc')} />
        <div className="flex w-full gap-6 mt-20 max-md:max-w-full max-md:mt-10 max-md:flex-wrap max-md:px-2">
          {features.map((feature, index) => (
            <div key={index} className="py-2" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <article className="justify-center items-stretch shadow-[0px_4px_64px_-20px_rgba(0,0,0,0.20)] flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] bg-white p-10 rounded-2xl max-md:px-5 transition-transform duration-300 hover:scale-105">
                <img src={'/images/' + feature} alt={feature} />
              </article>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
