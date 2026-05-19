import React from 'react';
import { ActionButton } from '../ActionButton';
import Image from 'next/image';
import { useTranslation } from '@/i18n/client';
import { useParams, useRouter } from 'next/navigation';

interface CallToActionSectionProps {
  title?: any;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  iconSrc?: string;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  const router = useRouter();
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'get-started');
  const handleContactClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      console.log('Contact button clicked');
    }
  };

  return (
    <section
      className="bg-[rgba(28,28,28,1)] relative flex w-full flex-col overflow-hidden items-center justify-center p-16 rounded-2xl max-md:max-w-full max-md:px-5"
      aria-labelledby="cta-heading"
      role="banner"
    >
      <img
        src="/images/get-started-image.png"
        alt={t('getStartedNow')}
        className="absolute w-auto max-w-full h-auto"
        data-aos="zoom-out"
        data-aos-delay="100"
      />
      <header className="text-center">
        <h1
          id="cta-heading"
          className="text-white text-center text-[56px] font-bold leading-[1.3] tracking-[-2.24px] bg-clip-text z-0 max-md:max-w-full max-md:text-[40px]"
        >
          {title || t('getStartedNow')}
        </h1>
        <p className="text-white text-center text-lg font-normal leading-[1.6] tracking-[-0.36px] self-center z-0 mt-8">
          {subtitle || t('createAccountToday')}
        </p>
      </header>
      <ActionButton
        onClick={() => {
          router.push('https://trade.beeznis.com/auth/register');
        }}
        className="relative z-10"
        label={buttonText || t('getStarted')}
      />
    </section>
  );
};
