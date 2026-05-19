'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField } from './FormField';
import { TextareaField } from './TextareaField';
import { toast } from 'sonner';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

export const ContactForm: React.FC = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'contact');
  const contactSchema = z.object({
    fullName: z.string().min(1, t('fullNameIsRequired')),
    companyName: z.string().min(1, t('companyNameIsRequired')),
    companyWebsite: z.string().url(t('pleaseEnterAValidWebsiteURL')),
    businessEmail: z.string().email(t('pleaseEnterAValidEmailAddress')),
    contact: z.string().min(1, t('contactInformationIsRequired')),
    message: z.string().min(10, t('messageMustBeAtLeast10CharactersLong')),
  });

  type ContactFormData = {
    name: string;
    email: string;
    message: string;
  } & z.infer<typeof contactSchema>;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(t('thankYouYourMessageHasBeenSentSuccessfully'));
      reset();
      const subject = encodeURIComponent(t('newContactMessage'));
      const body = encodeURIComponent(
        `${t('fullName')}: ${data.fullName}\n` +
          `${t('companyName')}: ${data.companyName}\n` +
          `${t('companyWebsite')}: ${data.companyWebsite}\n` +
          `${t('businessEmail')}: ${data.businessEmail}\n` +
          `${t('contact')}: ${data.contact}\n` +
          `${t('message')}: ${data.message}`,
      );
      window.location.href = `mailto:business@beeznis.com?subject=${subject}&body=${body}`;
    } catch (error) {
      toast.error(t('somethingWentWrongPleaseTryAgain'));
    }
  };

  return (
    <section className="flex flex-col justify-center items-center gap-10 self-stretch p-10 rounded-2xl max-md:p-6 max-sm:p-6 bg-[linear-gradient(180deg,rgba(96,96,96,0.16)_106.78%,rgba(28,28,28,0)_219.4%)]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-6 self-stretch">
        <fieldset className="flex flex-col items-start gap-6 self-stretch border-none p-0 m-0">
          <legend className="sr-only">Contact Information Form</legend>

          <FormField
            label={t('fullName')}
            name="fullName"
            placeholder={t('enterYourFullName')}
            required
            register={register}
            error={errors.fullName?.message}
            className="self-stretch"
          />

          <div className="flex items-start gap-6 self-stretch max-md:flex-col max-md:gap-6">
            <FormField
              label={t('companyName')}
              name="companyName"
              placeholder={t('enterYourCompanyName')}
              required
              register={register}
              error={errors.companyName?.message}
              className="flex-[1_0_0] max-md:self-stretch"
            />
            <FormField
              label={t('companyWebsite')}
              name="companyWebsite"
              type="url"
              placeholder={t('enterYourCompanyWebsite')}
              required
              register={register}
              error={errors.companyWebsite?.message}
              className="flex-[1_0_0] max-md:self-stretch"
            />
          </div>
          <div className="flex items-start gap-6 self-stretch max-md:flex-col max-md:gap-6">
            <FormField
              label={t('businessEmail')}
              name="businessEmail"
              type="email"
              placeholder={t('enterYourBusinessEmail')}
              required
              register={register}
              error={errors.businessEmail?.message}
              className="flex-[1_0_0] max-md:self-stretch"
            />
            <FormField
              label={t('whatsAppOrTelegram')}
              name="contact"
              placeholder={t('enterYourContact')}
              required
              register={register}
              error={errors.contact?.message}
              className="flex-[1_0_0] max-md:self-stretch"
            />
          </div>

          <TextareaField
            label={t('message')}
            name="message"
            placeholder={t('enterYourMessage')}
            required
            register={register}
            error={errors.message?.message}
            className="self-stretch"
          />
        </fieldset>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#FFCA00] text-black px-8 py-1 rounded-[60px] font-medium text-sm leading-[22.4px] tracking-[-0.28px] hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full h-[56px]"
        >
          {isSubmitting ? t('sending') : t('submit')}
        </button>
      </form>
    </section>
  );
};
