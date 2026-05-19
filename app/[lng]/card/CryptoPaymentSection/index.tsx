import React from 'react';
import { FeatureCard } from './FeatureCard';
import { SectionContainer } from '@/components/SectionContainer';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import Image from 'next/image';

const Bitcoin: React.FC = () => (
  <Image
    src="/icons/bitcoin.svg"
    alt="Bitcoin Icon"
    width={300}
    height={300}
    className="bitcoin-icon w-[300px] h-[300px]"
  />
);

const Ethereum: React.FC = () => (
  <Image
    src="/icons/ethereum.svg"
    alt="Ethereum Icon"
    width={300}
    height={300}
    className="ethereum-icon w-[300px] h-[300px]"
  />
);

const USDC: React.FC = () => (
  <Image src="/icons/usdc.svg" alt="USDC Icon" width={300} height={300} className="usdc-icon w-[300px] h-[300px]" />
);

const USDT: React.FC = () => (
  <Image src="/icons/usdt.svg" alt="USDT Icon" width={300} height={300} className="usdt-icon w-[300px] h-[300px]" />
);

const Solana: React.FC = () => (
  <Image
    src="/icons/solana.svg"
    alt="Solana Icon"
    width={300}
    height={300}
    className="solana-icon w-[300px] h-[300px]"
  />
);

const Polygon: React.FC = () => (
  <Image
    src="/icons/polygon.svg"
    alt="Polygon Icon"
    width={300}
    height={300}
    className="polygon-icon w-[300px] h-[300px]"
  />
);

const BSC: React.FC = () => (
  <Image src="/icons/bsc.svg" alt="BSC Icon" width={300} height={300} className="bsc-icon w-[300px] h-[300px]" />
);

const Tron: React.FC = () => (
  <Image src="/icons/tron.svg" alt="Tron Icon" width={300} height={300} className="tron-icon w-[300px] h-[300px]" />
);

export const CryptoPaymentSection: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'card');
  const cryptoPaymentIcons = [
    {
      icon: <Bitcoin />,
      alt: 'Bitcoin',
    },
    {
      icon: <Ethereum />,
      alt: 'Ethereum',
    },
    {
      icon: <USDC />,
      alt: 'USDC',
    },
    {
      icon: <USDT />,
      alt: 'USDT',
    },
  ];

  const blockchainIcons = [
    {
      icon: <Bitcoin />,
      alt: 'Bitcoin',
    },
    {
      icon: <Ethereum />,
      alt: 'Ethereum',
    },
    {
      icon: <Solana />,
      alt: 'Solana',
    },
    {
      icon: <Polygon />,
      alt: 'Polygon',
    },
    {
      icon: <BSC />,
      alt: 'BSC',
    },
    {
      icon: <Tron />,
      alt: 'Tron',
    },
  ];

  return (
    <SectionContainer>
      <div className="flex flex-col justify-center items-start gap-20 w-full max-w-screen-xl relative mx-auto my-0 max-md:gap-[60px] max-sm:gap-10">
        <header className="flex justify-between items-end w-full relative max-md:flex-col max-md:items-start max-md:gap-[30px] max-sm:gap-5">
          <h1 className="w-[569px] text-[#1C1C1C] text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative max-md:w-full max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-4xl max-sm:tracking-[-1.44px]">
            {t('launchSeamlessCryptoPayments')}
          </h1>
          <p className="w-[480px] text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:w-full max-md:text-base max-sm:text-sm">
            {t('kickstartYourCryptoPaymentJourney')}
          </p>
        </header>

        <div className="flex w-full items-start gap-6 relative max-md:flex-col max-md:gap-10 max-sm:gap-[30px]">
          <FeatureCard
            index={1}
            title={t('payWithCryptoEasily')}
            description={t('payWithCryptoEasilyDesc')}
            highlightedText={t('BTC, ETH, USDC, USDT, ')}
            trailingText={t('andMore')}
            icons={cryptoPaymentIcons}
            iconLayout="square"
          />
          <FeatureCard
            index={2}
            title={t('depositViaTopBlockchains')}
            description={t('depositViaTopBlockchainsDesc')}
            highlightedText={t('Bitcoin, Ethereum, Solana, BSC, Polygon, Tron, ')}
            trailingText={t('andMore')}
            icons={blockchainIcons}
            iconLayout="horizontal"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
