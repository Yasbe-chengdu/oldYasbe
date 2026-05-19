'use client';
import React, { useState } from 'react';
import { TabNavigation } from './TabNavigation';
import { TabContent } from './TabContent';

export interface Tab {
  id: string;
  title: string;
  isActive?: boolean;
}

export interface TabContentData {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface SingleContent {
  image: string;
  title?: string;
  description?: string;
}

interface EverythingYouNeedProps {
  sectionTitle?: string;
  tabs?: Tab[];
  tabData?: TabContentData[];
  initialTabId?: string;
  singleContent?: SingleContent;
  children?: React.ReactNode;
}

export const EverythingYouNeed: React.FC<EverythingYouNeedProps> = ({
  sectionTitle = 'Everything You Need, in One Place',
  tabs,
  tabData,
  initialTabId,
  singleContent,
  children,
}) => {
  const [activeTabId, setActiveTabId] = React.useState(initialTabId || (tabs && tabs[0]?.id) || '');

  const computedTabs =
    tabs?.map(tab => ({
      ...tab,
      isActive: tab.id === activeTabId,
    })) || [];

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  return (
    <section
      className="flex flex-col gap-2.5 self-stretch relative px-4 py-20 max-md:px-4 max-md:py-[60px] max-sm:px-4 max-sm:py-10 bg-black"
      aria-labelledby="section-heading"
    >
      <div className="flex w-[1408px] flex-col justify-center items-center gap-20 relative max-w-full mx-auto my-0 px-16 py-20 rounded-2xl max-md:w-full max-md:gap-[60px] max-md:px-8 max-md:py-[60px] max-sm:gap-10 max-sm:px-0 max-sm:py-0">
        <header data-aos="zoom-in" data-aos-delay="100">
          <h1
            id="section-heading"
            className="text-white text-[56px] font-bold leading-[72.8px] tracking-[-2.24px] relative text-center max-md:text-[42px] max-md:tracking-[-1.68px] max-sm:text-[32px] max-sm:tracking-[-1.28px]"
          >
            {sectionTitle}
          </h1>
        </header>

        <main className="flex flex-col gap-[60px] self-stretch relative rounded-2xl max-md:gap-10 max-sm:gap-8">
          {computedTabs.length > 0 && (
            <div data-aos="zoom-in" data-aos-delay="200">
              <TabNavigation tabs={computedTabs} onTabClick={handleTabClick} />
            </div>
          )}
          {tabData && activeTabId && (
            <div data-aos="zoom-in" data-aos-delay="300">
              <TabContent activeTab={activeTabId} tabData={tabData} />
            </div>
          )}
          {singleContent && !tabs && !tabData && (
            <div
              className="flex flex-col items-start gap-[60px] self-stretch relative rounded-2xl "
              role="tabpanel"
              aria-labelledby="section-heading"
            >
              <div className="relative w-full rounded-2xl p-8 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0.00)_219.4%)] flex justify-center">
                <img src={singleContent.image} alt={singleContent.title || sectionTitle} />
              </div>
              {(singleContent.title || singleContent.description) && (
                <section className="flex items-start gap-20 self-stretch relative max-md:flex-col max-md:gap-6 max-sm:gap-5">
                  {singleContent.title && (
                    <header className="flex-[1_0_0]">
                      <h2 className="text-white text-[32px] font-bold leading-[38.4px] tracking-[-0.64px] relative max-md:text-[28px] max-md:tracking-[-0.56px] max-sm:text-2xl max-sm:tracking-[-0.48px]">
                        {singleContent.title}
                      </h2>
                    </header>
                  )}
                  {singleContent.description && (
                    <article className="w-[706px] max-md:w-full">
                      <p className="text-[#A5A5A5] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px] max-sm:leading-[21px]">
                        {singleContent.description}
                      </p>
                    </article>
                  )}
                </section>
              )}
            </div>
          )}
          {!tabs && !tabData && !singleContent && children}
        </main>
      </div>
    </section>
  );
};
