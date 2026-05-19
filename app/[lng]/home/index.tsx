'use client';
import { PaymentSection } from './PaymentSection';
import { SpeedOfMoney } from './SpeedOfMoney';
import { CurrencyExchange } from './CurrencyExchange';
import { UnlockSecurity } from './UnlockSecurity';
import { InstitutionalOTC } from './InstitutionalOTC';
import { DualAsset } from './DualAsset';
import { EverythingYouNeed } from '@/components/EverythingYouNeed';
import { GetStarted } from '@/components/GetStarted';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export default function Home() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'home');
  const paymentSection = [
    {
      id: 'global-payment',
      title: t('globalPayment'),
      image: 'tab-global-payment-second.png',
      description: t('globalPaymentDesc'),
    },
    {
      id: 'institutional-otc',
      title: t('institutionalOTC'),
      image: 'homepage-institutional-otc.svg',
      description: t('institutionalOTCDesc'),
    },
    {
      id: 'traditional-crypto',
      title: t('traditionalCrypto'),
      image: 'tab-traditional-crypto-market-second.png',
      description: t('traditionalCryptoDesc'),
    },
  ];
  return (
    <>
      <HeroSection
        title1={t('hero.title1')}
        title2={t('hero.title2')}
        desc={t('hero.desc')}
        image="/banner/world-economy.png"
      />
      <PaymentSection />
      <SpeedOfMoney />
      <CurrencyExchange />
      <UnlockSecurity />
      <InstitutionalOTC />
      <DualAsset />
      <EverythingYouNeed
        sectionTitle={t('sectionTitle')}
        tabs={paymentSection}
        tabData={paymentSection}
        initialTabId="global-payment"
      />
      <GetStarted />
      <Footer />
    </>
  );
}
