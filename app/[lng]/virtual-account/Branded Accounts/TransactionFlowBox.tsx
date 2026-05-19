import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface TransactionFlowBoxProps {
  title?: string;
  content: string;
  backgroundColor: string;
  textColor?: string;
  className?: string;
}

export const TransactionFlowBox: React.FC<TransactionFlowBoxProps> = ({
  title,
  content,
  backgroundColor,
  textColor = '#777',
  className = '',
}) => {
  const [animation, setAnimation] = useState('flip-up');

  useEffect(() => {
    setAnimation(Math.round(Math.random()) ? 'flip-up' : 'flip-down');
  }, []);

  return (
    <article
      data-aos={animation}
      className={cn(
        'justify-center items-stretch flex min-h-[280px] flex-col overflow-hidden text-2xl font-normal tracking-[-0.48px] leading-[38px] px-12 py-12 rounded-2xl max-md:max-w-full max-md:px-5',
        className,
      )}
      style={{ backgroundColor }}
    >
      <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full gap-6">
        {!!title && (
          <h2 className="text-[#1C1C1C] text-2xl font-bold leading-[28.8px] tracking-[-0.48px] max-sm:text-xl max-sm:leading-6 max-sm:tracking-[-0.4px]">
            {title}
          </h2>
        )}
        <p className="max-md:max-w-full" style={{ color: textColor }}>
          {content}
        </p>
      </div>
    </article>
  );
};
