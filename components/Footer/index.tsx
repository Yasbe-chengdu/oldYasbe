'use client';
import React from 'react';
import { Logo } from '../Logo';
import { SocialMediaIcons } from './SocialMediaIcons';
import { NavigationSection } from './NavigationSection';
import { BottomBar } from './BottomBar';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const Footer: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'footer');
  const navigationData = {
    company: {
      title: t('company'),
      items: [
        { label: t('aboutUs'), href: `/${lng}/about-us` },
        { label: t('careers'), href: `/${lng}/careers` },
        { label: t('contactUs'), href: `/${lng}/contact` },
      ],
    },
    products: {
      title: t('products'),
      items: [
        { label: t('virtualAccounts'), href: `/${lng}/virtual-account` },
        { label: t('globalCollectionPayout'), href: `/${lng}/collection-payout` },
        { label: t('stablecoinCheckout'), href: `/${lng}/stablecoin-checkout` },
        { label: t('institutionalOTC'), href: `/${lng}/institutional-otc` },
        { label: t('investmentOpportunities'), href: `/${lng}/investment-opportunities` },
        { label: t('card'), href: `/${lng}/card` },
      ],
    },
    useCases: {
      title: t('useCases'),
      items: [
        { label: t('corporateTreasuryManagement'), href: `/${lng}/corporate-treasury` },
        { label: t('importExportCompanies'), href: `/${lng}/import-export` },
        { label: t('professionalServices'), href: `/${lng}/professional-services` },
        { label: t('ventureCapitalInvestmentFunds'), href: `/${lng}/venture-capital` },
        { label: t('cryptoNative'), href: `/${lng}/crypto-native` },
      ],
    },
    resources: {
      title: t('resources'),
      items: [{ label: t('legalAndCompliance'), href: `/${lng}/legal-compliance` }],
    },
  };
  return (
    <footer className="flex w-full flex-col items-start gap-2.5 box-border bg-white px-20 py-10 max-md:px-10 max-md:py-8 max-sm:px-5 max-sm:py-6">
      <div className="max-w-screen-xl flex w-full flex-col justify-center items-center gap-20 mx-auto my-0 max-md:max-w-[991px] max-md:gap-[60px] max-sm:max-w-screen-sm max-sm:gap-10">
        <section className="flex flex-col items-start gap-20 self-stretch">
          <div className="flex justify-between items-start self-stretch max-sm:flex-col max-sm:gap-10">
            <div className="flex flex-col items-start gap-4 mt-10">
              <Logo />
              <div className="mt-16 md:mt-14">
                <SocialMediaIcons />
              </div>
            </div>
            <div className="flex items-start gap-[60px] max-md:gap-10 max-md:flex-wrap max-sm:flex-col max-sm:gap-8">
              <NavigationSection title={navigationData.company.title} items={navigationData.company.items} />
              <NavigationSection title={navigationData.products.title} items={navigationData.products.items} />
              <NavigationSection title={navigationData.useCases.title} items={navigationData.useCases.items} />
              <NavigationSection title={navigationData.resources.title} items={navigationData.resources.items} />
            </div>
          </div>
        </section>
        <BottomBar />
      </div>
    </footer>
  );
};
