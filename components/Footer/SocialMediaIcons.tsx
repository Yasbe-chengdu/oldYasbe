import Image from 'next/image';
import React from 'react';

export const SocialMediaIcons: React.FC = () => {
  const socialLinks = [
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/@YASBe-u9j',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="youtube-icon"
        >
          <path
            d="M23.498 6.186a2.894 2.894 0 00-2.037-2.047C19.739 3.5 12 3.5 12 3.5s-7.739 0-9.461.639A2.894 2.894 0 00.502 6.186 30.153 30.153 0 000 12a30.153 30.153 0 00.502 5.814 2.894 2.894 0 002.037 2.047C4.261 20.5 12 20.5 12 20.5s7.739 0 9.461-.639a2.894 2.894 0 002.037-2.047A30.153 30.153 0 0024 12a30.153 30.153 0 00-.502-5.814zM9.75 15.023V8.977l6.5 3.023-6.5 3.023z"
            fill="#1C1C1C"
            fillOpacity="0.6"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: 'https://x.com/YASBeGlobal',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="x-icon"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 4H8.586L12 9.172 15.414 4H20L14.828 11.242 20.5 20H16.086L12 14.828 7.914 20H3.5L9.172 11.242 4 4ZM10.414 11.242L6.343 16.5H8.586L12 11.828 15.414 16.5H17.657L13.586 11.242 17.657 6H15.414L12 10.414 8.586 6H6.343L10.414 11.242Z"
            fill="#1C1C1C"
            fillOpacity="0.6"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/yasbe/',
      icon: <Image src="/icons/LinkedIn.svg" alt="LinkedIn Icon" width={20} height={20} />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/yasbe_global/#',
      icon: <Image src="/icons/Instagram.svg" alt="Instagram Icon" width={20} height={20} />,
    },
  ];

  return (
    <div className="flex justify-center items-start gap-6 max-sm:justify-center">
      {socialLinks.map(social => (
        <a
          key={social.name}
          href={social.href}
          className="flex items-start gap-2.5 cursor-pointer bg-[rgba(28,28,28,0.05)] p-2 rounded-[23.309px] hover:bg-[rgba(28,28,28,0.1)] transition-colors"
          aria-label={`Follow us on ${social.name}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
