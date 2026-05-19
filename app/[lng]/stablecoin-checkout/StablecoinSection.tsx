import React from 'react';
import { SectionContainer } from '@/components/SectionContainer';
import { ContentBlock } from '@/components/ui/content-block';
import { ImageCard } from './ImageCard';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

export const StablecoinSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'stablecoin-checkout');
  return (
    <SectionContainer>
      <div className="flex justify-center items-center gap-20 w-full max-md:flex-col max-md:gap-[60px] max-md:items-center max-sm:gap-10">
        <article className="flex flex-col items-start gap-12 flex-1 max-w-[570px] max-md:max-w-full max-md:items-center max-md:text-center max-sm:gap-8">
          <div data-aos="fade-up" data-aos-delay="100">
            <ContentBlock
              title={t('breakingFreeFromLegacyBankingLimits')}
              description={t('breakingFreeFromLegacyBankingLimitsDesc')}
            />
          </div>
          <hr className="border-1 w-full" />
          <div data-aos="fade-up" data-aos-delay="200">
            <ContentBlock
              title={t('fasterPaymentsWithStableValue')}
              description={t('fasterPaymentsWithStableValueDesc')}
            />
          </div>
        </article>
        <aside data-aos="zoom-in">
          <ImageCard src="/images/handle-payment.png" alt={t('modernBankingInterface')} />
        </aside>
      </div>
    </SectionContainer>
  );
};
