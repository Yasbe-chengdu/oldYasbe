'use client';
import React from 'react';
import dayjs from 'dayjs';
import { ClockHand } from './ClockHand';

interface ClockFaceProps {
  time: dayjs.Dayjs;
  className?: string;
}

export const ClockFace: React.FC<ClockFaceProps> = ({ time, className = '' }) => {
  const hours = time.hour() % 12;
  const minutes = time.minute();
  const seconds = time.second();

  const hourAngle = hours * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const secondAngle = seconds * 6;

  return (
    <div
      className={
        `w-60 h-60 relative ${className} max-md:w-[200px] max-md:h-[200px] max-sm:w-[180px] max-sm:h-[180px]` +
        ' [--clock-marker-radius:102px] max-md:[--clock-marker-radius:84px] max-sm:[--clock-marker-radius:76px]' +
        ' [--hour-hand:60px] [--minute-hand:85px] [--second-hand:95px]' +
        ' max-md:[--hour-hand:45px] max-md:[--minute-hand:65px] max-md:[--second-hand:75px]' +
        ' max-sm:[--hour-hand:40px] max-sm:[--minute-hand:58px] max-sm:[--second-hand:68px]'
      }
    >
      <div className="absolute inset-0 w-60 h-60 max-md:w-[200px] max-md:h-[200px] max-sm:w-[180px] max-sm:h-[180px] max-md:top-1 max-md:left-1">
        <div
          className="w-full h-full rounded-full bg-[#FAF5E9]"
          style={{
            filter: 'drop-shadow(10px 10px 20px rgba(0,0,0,0.25)) drop-shadow(-10px -10px 20px #FFF)',
          }}
        />
      </div>

      <div className="text-[#1C1C1C] text-lg font-normal absolute w-[21px] h-[21px] left-[109px] top-0.5 max-md:left-[91px] max-md:top-[88px] max-sm:left-[82px] max-sm:top-0.5">
        12
      </div>
      <div className="text-[#1C1C1C] text-lg font-normal absolute w-[11px] h-[21px] left-[219px] top-[105px] max-md:left-[183px] max-md:top-[88px] max-sm:left-[164px] max-sm:top-[79px]">
        3
      </div>
      <div className="text-[#1C1C1C] text-lg font-normal absolute w-[11px] h-[21px] left-[13px] top-[105px] max-md:left-[11px] max-md:top-[88px] max-sm:left-2.5 max-sm:top-[79px]">
        9
      </div>
      <div className="text-[#1C1C1C] text-lg font-normal absolute w-[11px] h-[21px] left-[111px] top-[215px] max-md:left-[93px] max-md:top-[179px] max-sm:left-[84px] max-sm:top-[161px]">
        6
      </div>

      {[...Array(12)].map((_, i) => {
        if (i % 3 === 0) return null;
        const angle = i * 30 - 90;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              width: 10,
              height: 2,
              background: '#1C1C1C',
              borderRadius: 2,
              transform: `rotate(${angle}deg) translateX(var(--clock-marker-radius)) translateY(-1px)`,
            }}
          />
        );
      })}

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ClockHand
          angle={hourAngle}
          length={60}
          width={4}
          color="#1C1C1C"
          style={{
            height: 'var(--hour-hand)',
            transformOrigin: `2px var(--hour-hand)`,
          }}
        />

        <ClockHand
          angle={minuteAngle}
          length={85}
          width={3}
          color="rgba(252, 62, 85, 0.84)"
          style={{
            height: 'var(--minute-hand)',
            transformOrigin: `1.5px var(--minute-hand)`,
          }}
        />

        <ClockHand
          angle={secondAngle}
          length={95}
          width={1}
          color="#FF0000"
          className="transition-transform duration-75 ease-out"
          style={{
            height: 'var(--second-hand)',
            transformOrigin: `0.5px var(--second-hand)`,
          }}
        />
      </div>

      <div className="absolute w-2 h-2 bg-[#1C1C1C] rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};
