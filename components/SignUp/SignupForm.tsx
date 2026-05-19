import React, { useState } from 'react';
import { FormInput } from './ui/form-input';
import { CloseIcon } from '../SignIn/icons/CloseIcon';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

type SignupFormProps = {
  onClose: () => void;
  onSwitchToLogin: () => void;
};

type Props = {
  onClose: () => void;
  onSwitchToLogin: () => void;
};

export const SignupForm: React.FC<SignupFormProps> = ({ onClose, onSwitchToLogin }) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'sign-up');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      alert('Account created successfully!');

      setFormData({ name: '', email: '', password: '' });
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="flex w-[640px] h-[720px] max-w-screen-sm flex-col items-center gap-10 box-border bg-white mx-auto my-0 p-10 rounded-2xl max-md:w-full max-md:max-w-[560px] max-md:h-auto max-md:min-h-[640px] max-md:p-8 max-sm:w-full max-sm:max-w-full max-sm:h-screen max-sm:min-h-screen max-sm:m-0 max-sm:p-6">
        <header className="flex justify-end self-stretch">
          <CloseIcon onClick={onClose} />
        </header>

        <main className="max-w-[480px] flex flex-col items-center flex-[1_0_0] self-stretch relative mx-auto max-md:max-w-[991px] max-sm:max-w-full">
          <div className="flex flex-col items-center gap-8 self-stretch relative">
            <header className="flex flex-col items-center gap-3 self-stretch relative">
              <h1 className="self-stretch text-[#101828] text-center text-[32px] font-bold leading-[38.4px] tracking-[-0.64px] relative max-md:text-[28px] max-md:leading-[33.6px] max-sm:text-2xl max-sm:leading-[28.8px]">
                {t('welcome')}
              </h1>
              <p className="self-stretch text-[#475467] text-center text-base font-normal leading-[25.6px] tracking-[-0.32px] relative max-md:text-[15px] max-sm:text-sm max-sm:w-[280px] max-sm:text-center max-sm:mx-auto">
                {t('description')}
              </p>
            </header>

            <section className="flex flex-col items-center gap-6 relative rounded-xl w-full px-4 md:w-[480px] md:px-0 max-sm:w-[360px]">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start gap-5 self-stretch relative max-md:gap-[18px] max-sm:gap-4"
                noValidate
              >
                <div className="flex flex-col items-start gap-5 self-stretch relative max-md:gap-[18px] max-sm:gap-4">
                  <FormInput
                    label={t('name')}
                    type="text"
                    placeholder={t('namePlaceholder')}
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    error={errors.name}
                    required
                    autoComplete="given-name"
                  />

                  <FormInput
                    label={t('email')}
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    error={errors.email}
                    required
                    autoComplete="email"
                  />

                  <FormInput
                    label={t('password')}
                    type="password"
                    placeholder={t('passwordPlaceholder')}
                    value={formData.password}
                    onChange={handleInputChange('password')}
                    error={errors.password}
                    required
                    autoComplete="new-password"
                  />
                </div>

                <div className="flex flex-col items-start gap-4 self-stretch relative max-md:gap-3.5 max-sm:gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-12 justify-center items-center self-stretch relative cursor-pointer box-border bg-[#FFCA00] px-6 py-1 rounded-[60px] max-sm:h-11 hover:bg-[#E6B600] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-[#1c1c1c] text-lg font-bold leading-[28.8px] tracking-[-0.36px] relative max-sm:text-base">
                      {isSubmitting ? t('creatingAccount') : t('signUp')}
                    </span>
                  </button>

                </div>
              </form>
            </section>

            <footer className="flex justify-center items-start gap-1 self-stretch relative">
              <span className="text-[#475467] text-sm font-normal leading-[22.4px] tracking-[-0.28px] relative">
                {t('alreadyHaveAccount')}
              </span>
              <button
                className="text-[#1769AA] hover:underline text-sm font-medium bg-transparent border-none"
                onClick={onSwitchToLogin}
              >
                {t('login')}
              </button>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
};
