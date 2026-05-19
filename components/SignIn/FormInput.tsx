import React from 'react';

interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type = 'text',
  required = false,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch relative">
      <label className="flex items-center gap-2 self-stretch relative">
        <span className="flex-[1_0_0] text-[#1c1c1c] text-sm font-normal leading-[22.4px] tracking-[-0.28px] relative">
          {label}
          {required && (
            <span className="text-[#FF4B55] text-sm font-normal leading-[22.4px] tracking-[-0.28px]">*</span>
          )}
        </span>
      </label>
      <div className="flex h-12 items-center gap-2 self-stretch border relative bg-[#F7F7F7] px-4 py-2 rounded-lg border-solid border-[#EFEFEF]">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          className="flex-[1_0_0] text-[#777] text-sm font-normal leading-[22.4px] tracking-[-0.28px] relative bg-transparent border-none outline-none placeholder:text-[#777]"
          required={required}
        />
      </div>
      {error && <span className="text-[#FF4B55] text-xs font-normal leading-[19.2px] tracking-[-0.24px]">{error}</span>}
    </div>
  );
};
