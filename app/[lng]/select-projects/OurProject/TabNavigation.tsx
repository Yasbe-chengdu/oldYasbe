import React from 'react';

interface Tab {
  id: string;
  title: string;
  isActive: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
  onTabClick: (tabId: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, onTabClick }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const activeTab = tabs.find(tab => tab.isActive) || tabs[0];

  return (
    <div className="w-full relative">
      <nav className="flex w-full relative max-sm:hidden" role="tablist">
        {tabs.map((tab, index) => (
          <div key={tab.id} className="flex-1 flex flex-col items-center">
            <button
              className={`flex justify-center items-center gap-4 px-6 py-2 bg-transparent transition-all duration-200 border-none outline-none shadow-none w-full ${
                tab.isActive ? 'text-[#FFCA00] font-bold' : 'text-[#777] hover:text-[#FFCA00]'
              } max-md:px-4 max-md:py-2 max-sm:px-3 max-sm:py-2`}
              onClick={() => onTabClick(tab.id)}
              role="tab"
              aria-selected={tab.isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
            >
              <span
                className={`flex justify-center items-center w-8 h-8 rounded-full text-sm font-bold max-sm:w-6 max-sm:h-6 max-sm:text-xs transition-all duration-200 ${
                  tab.isActive ? 'bg-[#FFCA00] text-[#1C1C1C]' : 'bg-[#ECECEC] text-[#777]'
                }`}
              >
                {index + 1}
              </span>
              <span className="text-lg font-bold leading-[28.8px] tracking-[-0.36px] max-md:text-base max-sm:text-sm max-sm:hidden">
                {tab.title}
              </span>
            </button>
            <div
              className={`w-full h-1 mt-1 transition-all duration-200 ${
                tab.isActive ? 'bg-[#FFCA00]' : 'bg-[#ECECEC]'
              }`}
            ></div>
          </div>
        ))}
      </nav>

      <div className="sm:hidden w-full relative">
        <button
          className="flex items-center w-full gap-4 px-4 py-3 bg-white rounded-lg shadow-sm border-none"
          onClick={() => setDropdownOpen(v => !v)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
        >
          <span className="flex justify-center items-center w-10 h-10 rounded-full bg-[#FFCA00] text-[#1C1C1C] font-bold text-lg">
            {tabs.findIndex(tab => tab.id === activeTab.id) + 1}
          </span>
          <span className="flex-1 text-left text-lg font-bold text-[#1C1C1C] leading-[28.8px] tracking-[-0.36px]">
            {activeTab.title}
          </span>
          <svg
            className={`w-6 h-6 ml-auto transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {!dropdownOpen && <div className="w-full h-1 bg-[#FFCA00] mb-1"></div>}
        {dropdownOpen && (
          <div
            className="absolute left-0 top-full z-20 mt-2 w-full bg-white rounded-lg shadow-lg overflow-visible"
            style={{ background: '#fff' }}
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`flex items-center w-full gap-4 px-4 py-3 text-left transition-all duration-200 ${
                  tab.isActive ? 'bg-[#FFF8E1] font-bold text-[#FFCA00]' : 'hover:bg-[#F7F7F7] text-[#1C1C1C]'
                }`}
                onClick={() => {
                  setDropdownOpen(false);
                  onTabClick(tab.id);
                }}
                role="option"
                aria-selected={tab.isActive}
                tabIndex={0}
              >
                <span
                  className={`flex justify-center items-center w-8 h-8 rounded-full text-sm font-bold ${
                    tab.isActive ? 'bg-[#FFCA00] text-[#1C1C1C]' : 'bg-[#ECECEC] text-[#777]'
                  }`}
                >
                  {index + 1}
                </span>
                <span className="flex-1 text-left text-base font-bold">{tab.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
