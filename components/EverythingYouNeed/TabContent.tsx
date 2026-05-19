import React from 'react';
import { TabContentData } from './index';

interface TabContentProps {
  activeTab: string;
  tabData: TabContentData[];
}

export const TabContent: React.FC<TabContentProps> = ({ activeTab, tabData }) => {
  const currentTab = tabData.find(tab => tab.id === activeTab);
  if (!currentTab) {
    return null;
  }

  return (
    <div
      className="flex flex-col items-start gap-[60px] self-stretch relative rounded-2xl "
      role="tabpanel"
      id={`tabpanel-${activeTab}`}
      aria-labelledby={`tab-${activeTab}`}
    >
      <div className="relative w-full rounded-2xl p-8 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0.00)_219.4%)]">
        <img src={'/images/' + currentTab?.image} alt="" />
      </div>
      <section className="flex items-start gap-20 self-stretch relative max-md:flex-col max-md:gap-6 max-sm:gap-5">
        <header className="flex-[1_0_0]">
          <h2 className="text-white text-[32px] font-bold leading-[38.4px] tracking-[-0.64px] relative max-md:text-[28px] max-md:tracking-[-0.56px] max-sm:text-2xl max-sm:tracking-[-0.48px]">
            {currentTab.title}
          </h2>
        </header>
        <article className="w-[706px] max-md:w-full">
          <p className="text-[#A5A5A5] text-lg font-normal leading-[28.8px] tracking-[-0.36px] relative max-md:text-base max-md:tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px] max-sm:leading-[21px]">
            {currentTab.description}
          </p>
        </article>
      </section>
    </div>
  );
};
