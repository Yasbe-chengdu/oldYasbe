'use client';
import React, { useState } from 'react';
import { toast as toastSonner } from 'sonner';
import { CallToActionSection } from './CallToActionSection';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n/client';

interface GetStartedProps {
  variant?: 'default' | 'investment';
}

export const GetStarted = ({ variant = 'default' }: GetStartedProps) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'get-started');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleContactClick = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
    setName('');
    setEmail('');
    setMessage('');
    setErrors({ name: false, email: false, message: false });
  };

  const handleSendEmail = () => {
    const isEmailValid = email.includes('@');
    const newErrors = {
      name: name.trim() === '',
      email: !isEmailValid,
      message: message.trim() === '',
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      toast.error(t('contactFormError'), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const subject = encodeURIComponent(`${t('contactFormSubmission')} ${name}`);
    const body = encodeURIComponent(`${t('name')}: ${name}\n${t('email')}: ${email}\n${t('message')}: ${message}`);

    window.location.href = `mailto:business@beeznis.com?subject=${subject}&body=${body}`;

    toast.success(t('contactFormSuccess'), {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
    });

    setIsContactFormOpen(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main className="max-w-[1440px] mx-auto">
      <div className="flex justify-center p-4">
        <CallToActionSection
          title={
            variant === 'investment' ? (
              <div className="max-w-[768px]">{t('beAPartOfTheHighPotentialRealWorldProjects')}</div>
            ) : (
              <div>
                {t('get')}&nbsp;
                <span className="bg-[linear-gradient(180deg,_#FFCA00_59.59%,_#FFF_100%)] bg-clip-text text-transparent">
                  {t('started')}
                </span>
                &nbsp;{t('now')}
              </div>
            )
          }
          subtitle={variant === 'investment' ? t('investmentDescription') : t('createAccountDescription')}
          buttonText={variant === 'investment' ? t('contactUs') : t('getStarted')}
          onButtonClick={handleContactClick}
        />

        {isContactFormOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-labelledby="contact-form-title"
            aria-modal="true"
          >
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <header className="flex justify-between items-center mb-4">
                <h2 id="contact-form-title" className="text-xl font-bold text-gray-900">
                  {t('contactUs')}
                </h2>
                <button
                  onClick={handleCloseContactForm}
                  className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                  aria-label="Close contact form"
                >
                  ×
                </button>
              </header>

              <form
                onSubmit={e => {
                  e.preventDefault();
                  toast.success(t('contactFormSuccess'));
                  handleCloseContactForm();
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCA00] focus:border-transparent"
                    placeholder={t('namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className={`w-full px-3 py-2 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCA00] focus:border-transparent`}
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFCA00] focus:border-transparent resize-vertical"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseContactForm}
                    className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    {t('cancel')}
                  </button>
                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="flex-1 px-4 py-2 text-[#1C1C1C] bg-[#FFCA00] rounded-md hover:bg-[#E6B600] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFCA00] focus:ring-offset-2 font-medium"
                  >
                    {t('sendMessage')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
