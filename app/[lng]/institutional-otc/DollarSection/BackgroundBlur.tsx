import React from 'react';

export const BackgroundBlur: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[393px] h-[391px] rotate-[111.844deg] left-[831px] top-[428px] max-md:w-[250px] max-md:h-[250px] max-md:left-[400px] max-md:top-[300px] max-sm:w-[150px] max-sm:h-[150px] max-sm:left-[200px] max-sm:top-[200px]"
        style={{
          background: '#FFCA00',
          filter: 'blur(172px)',
          flexShrink: 0,
        }}
      />
    </div>
  );
};
