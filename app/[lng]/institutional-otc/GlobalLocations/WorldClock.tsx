'use client';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ClockFace } from './ClockFace';

dayjs.extend(utc);
dayjs.extend(timezone);

interface WorldClockProps {
  index?: number;
  city: string;
  timezone: string;
  className?: string;
}

export const WorldClock: React.FC<WorldClockProps> = ({ index = 0, city, timezone, className = '' }) => {
  const [currentTime, setCurrentTime] = useState<dayjs.Dayjs | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = dayjs().tz(timezone);
      setCurrentTime(now);
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [timezone]);

  if (!currentTime) {
    return (
      <article
        data-aos="zoom-in"
        data-aos-delay={(index + 1) * 200}
        className={`flex items-center gap-2.5 relative ${className}`}
      >
        <div className="flex flex-col items-start gap-8 relative">
          <div className="w-60 h-60 max-md:w-[200px] max-md:h-[200px] max-sm:w-[180px] max-sm:h-[180px] bg-gray-200 rounded-full animate-pulse" />
          <div className="self-stretch text-[#1C1C1C] text-center text-2xl font-bold leading-[28.8px] tracking-[-0.48px] relative max-md:text-xl max-md:tracking-[-0.4px] max-sm:text-lg max-sm:tracking-[-0.36px]">
            {city}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      data-aos="zoom-in"
      data-aos-delay={(index + 1) * 200}
      className={`flex items-center gap-2.5 relative ${className}`}
    >
      <div className="flex flex-col items-start gap-8 relative">
        <ClockFace time={currentTime} />
        <time className="self-stretch text-[#1C1C1C] text-center text-2xl font-bold leading-[28.8px] tracking-[-0.48px] relative max-md:text-xl max-md:tracking-[-0.4px] max-sm:text-lg max-sm:tracking-[-0.36px]">
          {city}
        </time>
        <div className="hidden self-stretch text-[#666] text-center text-sm space-y-1">
          <div>Digital: {currentTime.format('HH:mm:ss')}</div>
          <div className="text-xs">
            H:{currentTime.hour() % 12} M:{currentTime.minute()} S:{currentTime.second()}
          </div>
          <div className="text-xs">
            H°:{(currentTime.hour() % 12) * 30 + currentTime.minute() * 0.5}° M°:
            {currentTime.minute() * 6 + currentTime.second() * 0.1}°
          </div>
        </div>
      </div>
    </article>
  );
};
