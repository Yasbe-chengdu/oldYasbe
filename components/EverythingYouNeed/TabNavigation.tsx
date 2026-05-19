import React, { useState } from 'react';

export interface Tab {
  id: string;
  title: string;
  isActive?: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
  onTabClick: (tabId: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, onTabClick }) => {
  const [open, setOpen] = useState(false);
  const selectedOption = tabs.find(tab => tab.isActive);

  return (
    <div className="w-full">
      <div className="w-full sm:hidden mb-6 relative">
        <div className="relative w-full">
          <button
            onClick={() => setOpen(!open)}
            className="w-full bg-black text-white rounded-md p-3 text-base pr-10 relative text-left"
          >
            {selectedOption?.title}
            <img
              src="/icons/caret-down.png"
              alt="Dropdown Icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </button>

          {open && (
            <ul className="absolute left-0 top-full mt-1 w-full bg-black text-white border border-gray-700 rounded-md z-50">
              {tabs.map(tab => (
                <li
                  key={tab.id}
                  onClick={() => {
                    onTabClick(tab.id);
                    setOpen(false);
                  }}
                  className="p-3 hover:bg-gray-800 cursor-pointer"
                >
                  {tab.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="absolute left-0 right-0 h-1 bg-yellow-400 rounded-sm" style={{ bottom: '-8px' }} />
      </div>

      <nav
        className="w-full flex justify-between gap-4 relative max-sm:hidden"
        role="tablist"
        aria-label="Payment services navigation"
      >
        {tabs.map((tab, idx) => (
          <div
            key={tab.id}
            className="flex flex-col justify-center items-center gap-2 relative mb-6"
            role="presentation"
          >
            <button
              className={`flex justify-center items-center gap-4 w-full max-sm:max-w-[90vw] relative px-6 py-0 max-sm:px-3 max-sm:py-0 rounded-md transition-colors duration-200 ${
                tab.isActive ? 'text-white' : 'text-[#A5A5A5]'
              }`}
              onClick={() => onTabClick(tab.id)}
              role="tab"
              aria-selected={tab.isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
            >
              <span
                className={`text-2xl font-bold leading-[28.8px] tracking-[-0.48px] relative text-center break-words
                max-md:text-xl max-md:leading-[24px] max-md:tracking-[-0.4px]
                max-sm:text-base max-sm:leading-[20px] max-sm:tracking-[-0.32px]
                max-[360px]:text-sm max-[360px]:leading-[18px] max-[360px]:tracking-[-0.28px]`}
              >
                {tab.title}
              </span>
            </button>
          </div>
        ))}

        <div className="absolute left-0 right-0 bottom-0 h-1 w-full flex z-10">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`flex-1 h-full transition-all duration-200 ${tab.isActive ? 'bg-yellow-400' : 'bg-white'}`}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};
