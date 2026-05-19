import React from 'react';

export const ResponseTimeTable: React.FC = () => {
  const severityLevels = [
    { level: 'Critical', availability: '24/7', responseTime: '1 hour', bgColor: 'bg-[#F7F7F7]' },
    {
      level: 'Medium',
      availability: 'During Regular Business Hours',
      responseTime: '8 hours',
      bgColor: 'bg-[#EFEFEF]',
    },
    { level: 'Low', availability: 'During Regular Business Hours', responseTime: '24 hours', bgColor: 'bg-[#F7F7F7]' },
  ];

  return (
    <div className="flex md:ml-32 items-start flex-1 w-full max-sm:overflow-x-auto">
      <div className="flex flex-col items-start flex-1 max-sm:min-w-[120px]">
        <header className="flex h-[76px] items-center gap-3 w-full bg-[#1C1C1C] px-5 py-3 border-r-[#C2C2C2] border-r border-solid max-md:h-auto max-md:min-h-[76px] max-sm:px-3 max-sm:py-2">
          <h4 className="text-white text-base font-bold leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
            Severity Levels
          </h4>
        </header>
        {severityLevels.map((item, index) => (
          <div
            key={index}
            className={`flex h-[60px] flex-col justify-center items-start gap-2 w-full ${item.bgColor} px-5 py-3 border-r-[#C2C2C2] border-r border-solid max-md:h-auto max-md:min-h-[60px] max-sm:px-3 max-sm:py-2`}
          >
            <div className="w-full text-[#1C1C1C] text-base font-normal leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
              {item.level}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start flex-1 max-sm:min-w-[120px]">
        <header className="flex h-[76px] items-center gap-3 w-full bg-[#1C1C1C] px-5 py-3 border-r-[#C2C2C2] border-r border-solid max-md:h-auto max-md:min-h-[76px] max-sm:px-3 max-sm:py-2">
          <h4 className="text-white text-base font-bold leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
            Availability
          </h4>
        </header>
        {severityLevels.map((item, index) => (
          <div
            key={index}
            className={`flex h-[60px] flex-col justify-center items-start gap-2 w-full ${item.bgColor} px-5 py-3 border-r-[#C2C2C2] border-r border-solid max-md:h-auto max-md:min-h-[60px] max-sm:px-3 max-sm:py-2`}
          >
            <div className="w-full text-[#1C1C1C] text-base font-normal leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
              {item.availability}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center flex-1 max-sm:min-w-[120px]">
        <header className="flex items-center h-[76px] gap-3 w-full bg-[#1C1C1C] px-5 py-3 max-sm:px-3 max-sm:py-2">
          <h4 className="text-white text-base font-bold leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
            Response Time (Calculated in Regular Business Hours)
          </h4>
        </header>
        {severityLevels.map((item, index) => (
          <div
            key={index}
            className={`flex h-[60px] flex-col justify-center items-start gap-2 w-full ${item.bgColor} px-5 py-3 border-r-[#C2C2C2] border-r border-solid max-md:h-auto max-md:min-h-[60px] max-sm:px-3 max-sm:py-2`}
          >
            <div className="w-full text-[#1C1C1C] text-base font-normal leading-[25.6px] tracking-[-0.32px] max-md:text-sm max-md:leading-[21px] max-sm:text-xs max-sm:leading-[16.8px]">
              {item.responseTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
