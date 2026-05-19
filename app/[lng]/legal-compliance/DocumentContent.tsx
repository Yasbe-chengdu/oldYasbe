import React from 'react';
import { ContentSection } from '../../../components/LegalDoc/yasbe-platform-agreement/ContentSection';
import { RestrictedJurisdictions } from '@/components/LegalDoc/restricted-jurisdictions/RestrictedJurisdictions';
import WebsiteTerms from '@/components/LegalDoc/website-terms-of-use/Index';
import YasbePlatform from '@/components/LegalDoc/yasbe-platform-agreement/YasbePlatform';
import { Container } from '@/components/LegalDoc/prohibited-businesses/Container';
import { CookiesPolicy } from '@/components/LegalDoc/cookies-policy/CookiesPolicy';
import { RequestionForInformation } from '@/components/LegalDoc/requestion-for-Information/requestion-for-Information';
import PrivacyPolicyContent from '@/components/LegalDoc/privacy-policy/PrivacyPolicyContent';

interface DocumentContentProps {
  activeTab: string;
}

export const DocumentContent: React.FC<DocumentContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'platform-agreement':
      return <YasbePlatform />;

    case 'website-terms':
      return <WebsiteTerms />;

    case 'restricted-jurisdictions':
      return (
        <main className="w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full">
          <RestrictedJurisdictions />
        </main>
      );

    case 'prohibited-businesses':
      return (
        <main className="w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full">
          <Container />
        </main>
      );

    case 'rfi':
      return (
        <main className="w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full">
          <RequestionForInformation />
        </main>
      );

    case 'privacy-policy':
      return (
        <main className="w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full">
          <PrivacyPolicyContent />
        </main>
      );

    case 'cookies-policy':
      return (
        <main className="w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full">
          <CookiesPolicy />
        </main>
      );

    default:
      return (
        <main className="flex w-[847px] flex-col items-start gap-12 shrink-0 max-md:w-full">
          <ContentSection title="Select a Tab">
            <p className="text-[#777]">Please select a section from the menu.</p>
          </ContentSection>
        </main>
      );
  }
};
