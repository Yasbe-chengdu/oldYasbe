'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface InvestmentDetails {
  capitalization?: string;
  raised?: string;
  investors?: string;
  minInvestment?: string;
}

interface InvestmentCardProps {
  title: string;
  imageUrl: string;
  overlayImageUrl?: string;
  tags: string[];
  details?: InvestmentDetails;
  aspectRatio?: 'square' | 'wide';
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({
  title,
  imageUrl,
  overlayImageUrl,
  tags,
  details,
  aspectRatio = 'square',
}) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'investment-opportunities');
  const [hovered, setHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const aspectClass = aspectRatio === 'wide' ? 'aspect-[1.316]' : 'aspect-[0.95]';
  const paddingClass = aspectRatio === 'wide' ? 'pb-[215px]' : 'pb-[322px]';

  return (
    <article
      className="justify-center items-stretch shadow-[0_4px_64px_-20px_rgba(0,0,0,0.20)] flex min-w-60 min-h-[520px] flex-col overflow-hidden w-[411px] bg-white p-6 rounded-2xl max-md:px-5 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex z-0 flex-col relative w-full overflow-hidden text-sm text-white font-medium tracking-[-0.28px] leading-[1.6] flex-1 rounded-2xl transition-all duration-300 ${
          hovered ? 'h-[65%] min-h-[200px]' : 'h-full'
        } `}
        style={{ height: hovered ? '65%' : '100%' }}
      >
        <img
          src={'/images/' + imageUrl}
          className="absolute  h-full w-full object-cover inset-0 transition-all duration-300"
          alt={title}
        />
        <div className={`flex flex-col relative w-full pt-6 px-6 max-md:pb-[100px] max-md:px-5 h-full`}>
          {overlayImageUrl && (
            <img src={'/images/' + overlayImageUrl} className="absolute h-full w-full object-cover inset-0" alt="" />
          )}
          <div
            className={`relative flex items-center gap-3 ${
              aspectRatio === 'wide' ? 'mb-[-43px]' : '-mb-16'
            } max-md:mb-2.5`}
          >
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-[rgba(28,28,28,0.2)] flex min-h-9 items-center gap-2.5 justify-center px-4 py-[7px] rounded-[99px]"
              >
                <span className="whitespace-nowrap">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <h3 className="text-[#1C1C1C] text-2xl font-semibold leading-[1.2] tracking-[-0.48px]">{title}</h3>

        <div
          className={`w-full text-base tracking-[-0.32px] leading-[1.6] mt-5 transition-all duration-300 ${
            hovered || isMobile
              ? 'opacity-100 max-h-[500px] pointer-events-auto'
              : 'opacity-0 max-h-0 pointer-events-none'
          } overflow-hidden`}
        >
          {details?.capitalization && (
            <div className="flex w-full gap-[40px_100px] justify-between">
              <span className="text-[#777] font-normal">{t('capitalization')}</span>
              <span className="text-[#1C1C1C] font-semibold">{details.capitalization}</span>
            </div>
          )}
          {details?.raised && (
            <div className="flex w-full gap-[40px_100px] justify-between mt-1">
              <span className="text-[#777] font-normal">{t('raised')}</span>
              <span className="text-[#1C1C1C] font-semibold">{details.raised}</span>
            </div>
          )}
          {details?.investors && (
            <div className="flex w-full gap-[40px_100px] justify-between mt-1">
              <span className="text-[#777] font-normal">{t('investors')}</span>
              <span className="text-[#1C1C1C] font-semibold">{details.investors}</span>
            </div>
          )}
          {details?.minInvestment && (
            <div className="flex w-full gap-[40px_100px] justify-between mt-1">
              <span className="text-[#777] font-normal">{t('minInvestment')}</span>
              <span className="text-[#1C1C1C] font-semibold">{details.minInvestment}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
