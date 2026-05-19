'use client';
import React from 'react';

interface ServiceCardProps {
  index?: number;
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ index = 0, icon, title, description, onClick }) => {
  return (
    <article
      className="justify-center items-center border backdrop-blur-[6px] self-stretch flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] bg-white my-auto p-8 rounded-2xl border-solid border-[#D6D6D6] max-md:px-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      data-aos="zoom-in"
      data-aos-delay={(index + 1) * 100}
    >
      <header className="flex flex-col items-center justify-center">
        <div className="justify-center items-center flex w-10 gap-1.5 h-10 bg-[#FFCA00] px-2.5 rounded-[37.5px]">
          <img src={icon} alt={`${title} icon`} className="aspect-[1] object-contain w-5 self-stretch my-auto" />
        </div>
        <h3 className="text-[#1C1C1C] text-center text-lg font-semibold leading-[1.6] tracking-[-0.36px] mt-4">
          {title}
        </h3>
      </header>
      <p className="text-[#777] text-center text-lg font-normal leading-[29px] tracking-[-0.36px] mt-4">
        {description}
      </p>
    </article>
  );
};
