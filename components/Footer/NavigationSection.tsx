import React from 'react';

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationSectionProps {
  title: string;
  items: NavigationItem[];
}

export const NavigationSection: React.FC<NavigationSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col items-start gap-5 max-md:min-w-[200px]">
      <h3 className="text-[#1C1C1C] text-lg font-bold leading-[28.8px] tracking-[-0.36px]">{title}</h3>
      <nav>
        <ul className="flex flex-col items-start gap-4">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-[#777] text-lg font-normal leading-[28.8px] tracking-[-0.36px] cursor-pointer hover:text-[#1C1C1C] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
