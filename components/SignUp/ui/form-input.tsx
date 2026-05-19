import React, { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, required = false, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col items-start gap-2 self-stretch relative max-md:gap-1.5 max-sm:gap-1.5">
        <label className="flex items-center gap-2 self-stretch relative">
          <span className="flex-[1_0_0] text-[#1c1c1c] text-sm font-normal leading-[22.4px] tracking-[-0.28px] relative">
            {label}
            {required && <span className="text-[#FF4B55]">*</span>}
          </span>
        </label>
        <div className="flex h-12 items-center gap-2 self-stretch border relative box-border bg-[#F7F7F7] px-4 py-2 rounded-lg border-solid border-[#EFEFEF]">
          <input
            ref={ref}
            className={`flex-[1_0_0] text-[#777] text-sm font-normal leading-[22.4px] tracking-[-0.28px] bg-transparent border-none outline-none placeholder:text-[#777] ${className}`}
            {...props}
          />
        </div>
        {error && (
          <span className="text-[#FF4B55] text-xs font-normal leading-[19.2px] tracking-[-0.24px]">{error}</span>
        )}
      </div>
    );
  },
);

FormInput.displayName = 'FormInput';
