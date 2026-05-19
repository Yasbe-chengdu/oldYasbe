'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'legal-compliance');

  const tabs: Tab[] = [
    { id: 'platform-agreement', label: t('yasbePlatformAgreement') },
    { id: 'website-terms', label: t('websiteTermsOfUse') },
    { id: 'restricted-jurisdictions', label: t('restrictedJurisdictions') },
    { id: 'prohibited-businesses', label: t('prohibitedBusinesses') },
    { id: 'rfi', label: t('requestionForInformation') },
    { id: 'privacy-policy', label: t('privacyPolicy') },
    { id: 'cookies-policy', label: t('cookiesPolicy') },
  ];
  return (
    <>
      <nav className="hidden md:flex w-[305px] flex-col items-start gap-5 shrink-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex justify-center items-center gap-2.5 w-full px-4 py-3 transition-colors rounded-md
              ${activeTab === tab.id ? 'bg-yellow-400 text-black' : 'hover:bg-gray-100 text-[#777]'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <nav className="flex md:hidden w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 min-w-max px-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id ? 'bg-yellow-400 text-black' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};
