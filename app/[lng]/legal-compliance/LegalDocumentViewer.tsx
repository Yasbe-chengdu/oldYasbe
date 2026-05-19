'use client';

import React, { useState } from 'react';
import { TabNavigation } from './TabNavigation';
import { DocumentContent } from './DocumentContent';

export const LegalDocumentViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('platform-agreement');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex w-full md:mt-20 flex-col items-start gap-2.5 box-border bg-white p-20 max-md:mt-28 max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex items-start gap-32 w-full max-md:flex-col max-md:gap-[60px] max-sm:gap-10">
        <div className="order-1 w-full md:w-auto">
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
        <div className="order-2 w-full">
          <DocumentContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};
