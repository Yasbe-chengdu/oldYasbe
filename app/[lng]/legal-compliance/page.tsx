'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

import { LegalDocumentViewer } from './LegalDocumentViewer';
import HeaderMenu from '@/components/HeaderMenu';
import { Footer } from '@/components/Footer';

export default function Index() {
  const navigationItems = [
    {
      label: 'Legal Compliance',
      href: '/legal-compliance',
    },
  ];
  return (
    <>
      <HeaderMenu className="!text-black !bg-white/20" bgColor="bg-white/70" textColor="!text-black" />
      <LegalDocumentViewer />
      <Footer />
    </>
  );
}
