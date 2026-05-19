'use client';
import React, { useState } from 'react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Thank you for subscribing!');
      setEmail('');
      const subject = encodeURIComponent('');
      const body = encodeURIComponent(`Email: ${email}`);
      window.location.href = `mailto:business@beeznis.com?subject=${subject}&body=${body}`;
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-[534px] flex-col items-start gap-6 max-md:w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex justify-between items-center self-stretch bg-[#F4F4F4] pl-8 pr-1.5 py-1.5 rounded-[70px] max-sm:flex-col max-sm:gap-4 max-sm:p-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="flex-1 bg-transparent text-[rgba(28,28,28,0.20)] text-lg font-normal leading-[32.4px] tracking-[-0.36px] capitalize outline-none placeholder:text-[rgba(28,28,28,0.20)] focus:text-[#1C1C1C] max-sm:w-full"
            disabled={isSubmitting}
            aria-label="Email address for newsletter"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-14 justify-center items-center cursor-pointer bg-[#FFCA00] px-8 py-1 rounded-[60px] max-sm:w-full max-sm:h-12 hover:bg-[#E6B600] transition-colors disabled:opacity-50 disabled:cursor-not-allowed max-sm:hidden"
          >
            <span className="text-[#1C1C1C] text-lg font-bold leading-[28.8px] tracking-[-0.36px]">
              {isSubmitting ? 'Submitting...' : 'Get Started'}
            </span>
          </button>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-14 justify-center items-center cursor-pointer bg-[#FFCA00] px-8 py-1 rounded-[60px] w-full max-sm:h-12 hover:bg-[#E6B600] transition-colors disabled:opacity-50 disabled:cursor-not-allowed sm:hidden mt-4"
        >
          <span className="text-[#1C1C1C] text-lg font-bold leading-[28.8px] tracking-[-0.36px]">
            {isSubmitting ? 'Submitting...' : 'Get Started'}
          </span>
        </button>
      </form>
      {message && (
        <p className={`text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
      )}
    </div>
  );
};
