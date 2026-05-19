import React from 'react';
import { DropdownTriggerProps } from './types';
import { useParams, usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ isOpen, onClick, className = '' }) => {
  const { lng } = useParams();
  const pathname = usePathname();
  const { t } = useTranslation(lng as string, 'header-menu');

  const textColor = pathname.includes('/legal-compliance') ? 'text-black' : 'text-[#FFCA00]';

  return (
    <button
      type="button"
      className={`flex items-center gap-1 relative focus:outline-none focus:ring-2 focus:ring-[#FFCA00] focus:ring-opacity-50 rounded ${className}`}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label={t('globalistLanguage')}
    >
      <span
        className={`text-lg font-bold leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm ${textColor}`}
      >
        {t('globalistLanguage')}
      </span>

      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      >
        <path
          d="M10.6494 7.10207L6.89941 3.35207C6.84716 3.29963 6.78506 3.25802 6.71669 3.22963C6.64831 3.20124 6.57501 3.18663 6.50098 3.18663C6.42694 3.18663 6.35364 3.20124 6.28526 3.22963C6.21689 3.25802 6.1548 3.29963 6.10254 3.35207L2.35254 7.10207C2.24687 7.20774 2.1875 7.35107 2.1875 7.50051C2.1875 7.64995 2.24687 7.79327 2.35254 7.89895C2.45821 8.00462 2.60153 8.06398 2.75098 8.06398C2.90042 8.06398 3.04374 8.00462 3.14941 7.89895L6.50144 4.54692L9.85348 7.89941C9.95915 8.00509 10.1025 8.06445 10.2519 8.06445C10.4014 8.06445 10.5447 8.00509 10.6504 7.89941C10.756 7.79374 10.8154 7.65042 10.8154 7.50098C10.8154 7.35153 10.756 7.20821 10.6504 7.10254L10.6494 7.10207Z"
          fill="#FFCA00"
        />
      </svg>
    </button>
  );
};

export default DropdownTrigger;
