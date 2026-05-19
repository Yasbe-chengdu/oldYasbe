import React from 'react';

interface ClockHandProps {
  angle: number;
  length: number;
  width: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ClockHand: React.FC<ClockHandProps> = ({
  angle,
  length,
  width,
  color = '#1C1C1C',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: `${width}px`,
        height: `${length}px`,
        backgroundColor: color,
        borderRadius: `${width}px`,
        transform: `translate(-50%, -100%) rotate(${angle}deg)`,
        left: '50%',
        top: '50%',
        ...style,
      }}
    />
  );
};
