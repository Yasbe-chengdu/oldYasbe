import React from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  register: any;
  error?: string;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  register,
  error,
  className = '',
}) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'contact');
  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <label htmlFor={name} className="flex items-center gap-2 self-stretch">
        <div className="flex-[1_0_0] text-white text-sm font-medium leading-[22.4px] tracking-[-0.28px]">
          <span className="font-normal text-sm text-white">{label}</span>
          {required && <span className="font-normal text-sm text-[rgba(255,75,85,1)]">*</span>}
        </div>
      </label>
      <div className="flex h-12 items-center gap-2 self-stretch border bg-[#202020] px-4 py-2 rounded-lg border-solid border-[#4C4C4C]">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, { required: required ? `${t('isRequired')} ${label}` : false })}
          className="flex-[1_0_0] text-[#777] text-sm font-normal leading-[22.4px] tracking-[-0.28px] border-none bg-transparent outline-none placeholder:text-[#777]"
        />
      </div>
      {error && <span className="text-[rgba(255,75,85,1)] text-xs">{error}</span>}
    </div>
  );
};
