'use client';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslation } from '@/i18n/client';
interface ToggleButtonsProps {
  onToggle: (tab: 'collection' | 'payout') => void;
}

export const ToggleButtons: React.FC<ToggleButtonsProps> = ({ onToggle }) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'collection-payout');
  const [activeTab, setActiveTab] = useState<'collection' | 'payout'>('collection');
  const handleToggle = (tab: 'collection' | 'payout') => {
    setActiveTab(tab);
    onToggle(tab);
  };

  return (
    <div className="flex h-[71px] items-center relative bg-[#EFEFEF] p-1.5 rounded-[70px] max-md:h-[65px] max-md:p-[5px] max-sm:h-[59px] max-sm:p-1">
      <button
        onClick={() => handleToggle('collection')}
        className={`flex w-40 h-[59px] justify-center items-center gap-2.5 relative box-border px-8 py-5 rounded-[60px] max-md:w-[140px] max-md:h-[55px] max-md:px-7 max-md:py-[18px] max-sm:w-[120px] max-sm:h-[51px] max-sm:px-6 max-sm:py-4 transition-colors duration-200 ${
          activeTab === 'collection' ? 'bg-[#FFCA00]' : 'bg-transparent'
        }`}
        aria-pressed={activeTab === 'collection'}
        role="tab"
        aria-selected={activeTab === 'collection'}
      >
        <span
          className={`text-lg font-semibold leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-sm:text-sm ${
            activeTab === 'collection' ? 'text-[#1C1C1C]' : 'text-[#777]'
          }`}
        >
          {t('collection')}
        </span>
      </button>
      <button
        onClick={() => handleToggle('payout')}
        className={`flex w-40 h-[59px] justify-center items-center gap-2.5 relative box-border px-8 py-5 rounded-[60px] max-md:w-[140px] max-md:px-7 max-md:py-[18px] max-sm:w-[120px] max-sm:px-6 max-sm:py-4 transition-colors duration-200 ${
          activeTab === 'payout' ? 'bg-[#FFCA00]' : 'bg-transparent'
        }`}
        aria-pressed={activeTab === 'payout'}
        role="tab"
        aria-selected={activeTab === 'payout'}
      >
        <span
          className={`text-lg font-semibold leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-sm:text-sm ${
            activeTab === 'payout' ? 'text-[#1C1C1C]' : 'text-[#777]'
          }`}
        >
          {t('payout')}
        </span>
      </button>
    </div>
  );
};
