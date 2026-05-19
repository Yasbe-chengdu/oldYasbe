'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { useIsMobile } from '@/components/ui/use-mobile';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LoginPopup } from '@/components/SignIn/LoginPopup';
import { SignupForm } from '@/components/SignUp/SignupForm';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import LanguageSelector from './LanguageSelector';
import { DropdownMenu } from './ui/dropdown-menu';
import Image from 'next/image';

interface NavigationItem {
  href?: string;
  label: string;
  sub?: any[];
  hidden?: boolean;
  className?: string;
}

type HeaderMenuProps = {
  bgColor?: string;
  className?: string;
  textColor?: string;
  navigationItemsData?: NavigationItem[];
  languageSelectorClassName?: string;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  bgColor,
  className,
  textColor,
  navigationItemsData,
  languageSelectorClassName,
}) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, 'header-menu');
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [expandedDesktop, setExpandedDesktop] = useState<string | null>(null);
  const router = useRouter();
  const navigationItems: NavigationItem[] = navigationItemsData || [
    {
      label: t('globalistLanguage'),
      sub: [
        { href: `/en/`, label: t('English'), icon: '/flags/uk.svg' },
        { href: `/cn/`, label: t('中文'), icon: '/flags/china.svg' },
        { href: `/hk/`, label: t('香港'), icon: '/flags/hong-kong.svg' },
      ],
      hidden: true,
    },
    {
      label: t('globalPayment'),
      sub: [
        { href: `/${lng}/virtual-account`, label: t('virtualAccount') },
        { href: `/${lng}/collection-payout`, label: t('globalCollectionPayout') },
        { href: `/${lng}/stablecoin-checkout`, label: t('stablecoinCheckout') },
        { href: `/${lng}/card`, label: t('card') },
      ],
    },
    { href: `/${lng}/institutional-otc`, label: t('institutionalOTC') },
    {
      label: t('marketplace'),
      sub: [
        { href: `/${lng}/investment-opportunities`, label: t('investmentOpportunities') },
        { href: `/${lng}/how-it-works`, label: t('howItWorks') },
        { href: `/${lng}/select-projects`, label: t('selectProjects') },
      ],
    },
    {
      label: t('useCases'),
      sub: [
        { href: `/${lng}/corporate-treasury`, label: t('corporateTreasury') },
        { href: `/${lng}/import-export`, label: t('importExport') },
        { href: `/${lng}/professional-services`, label: t('professionalServices') },
        { href: `/${lng}/venture-capital`, label: t('ventureCapital') },
        { href: `/${lng}/crypto-native`, label: t('cryptoNative') },
      ],
      hidden: true,
    },
    { href: `/${lng}/contact`, label: t('contact') },
  ];
  React.useEffect(() => {
    if (!expandedDesktop) return;
    function handleClick(e: MouseEvent) {
      const dropdowns = document.querySelectorAll('.desktop-dropdown-parent');
      let inside = false;
      dropdowns.forEach(el => {
        if (el.contains(e.target as Node)) inside = true;
      });
      if (!inside) setExpandedDesktop(null);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [expandedDesktop]);

  const MobileOverlay = () => (
    <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-70">
      <div className="absolute inset-0" onClick={() => setMenuOpen(false)} aria-label="Close menu background" />
      <div className="relative bg-white w-full h-full max-w-full shadow-lg overflow-y-auto">
        <div className="flex items-center justify-between px-8 pt-12 pb-2">
          <Link href="/">
            <Logo className="h-8 w-auto ml-8" />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={32} className="text-gray-700" />
          </button>
        </div>
        <div className="p-8 pt-4">
          <nav>
            <ul className="space-y-6">
              {navigationItems.map((item, idx) => (
                <li key={item.label + idx}>
                  {item.sub ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100/10 rounded-lg focus:outline-none"
                        onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                        aria-expanded={expandedMobile === item.label}
                        aria-controls={`mobile-submenu-${idx}`}
                      >
                        <span className="flex items-center gap-2">
                          {item.label === 'Global' && (
                            <Image
                              src="/flags/globe-blue.svg"
                              alt="Global"
                              width={20}
                              height={20}
                              className="w-5 h-5"
                            />
                          )}
                          {item.label}
                        </span>
                        <ChevronDown
                          size={20}
                          className={expandedMobile === item.label ? 'transform rotate-180' : ''}
                        />
                      </button>

                      {expandedMobile === item.label && (
                        <ul id={`mobile-submenu-${idx}`} className="pl-6 mt-2 space-y-2">
                          {item.sub.map((subItem, subIdx) => (
                            <li key={subItem.label + subIdx}>
                              <Link
                                href={subItem.href || '#'}
                                className="flex items-center max-md:-ml-6 gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                onClick={() => setMenuOpen(false)}
                              >
                                {subItem.icon && (
                                  <Image
                                    src={subItem.icon}
                                    alt={subItem.label}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 rounded-sm object-cover"
                                  />
                                )}
                                <span>{subItem.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="block px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 border-t border-gray-200 pt-4">
            <Button
              variant="yellow"
              size="hero"
              className={`w-full text-lg mt-2 ${textColor || ''}`}
              onClick={handleOpenLogin}
            >
              {t('login')}
            </Button>
            <Button
              variant="yellow"
              size="hero"
              className={`w-full text-lg mt-2 ${textColor || ''}`}
              onClick={handleOpenSignup}
            >
              {t('signup')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const handleOpenLogin = () => {
    router.push('https://trade.beeznis.com');
  };

  const handleOpenSignup = () => {
    router.push('https://trade.beeznis.com/auth/register');
  };

  const handleCloseLogin = () => setShowLoginPopup(false);
  const handleCloseSignup = () => setShowSignupPopup(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = bgColor || textColor || '' ? bgColor : scrolled ? 'bg-black shadow-md' : 'bg-black/30';

  return (
    <header
      className={`w-full md:max-w-[1400px] max-md:max-w-[398px] mx-auto fixed top-4 left-0 right-0 z-50 p-4 rounded-2xl ${headerBg}`}
    >
      <nav
        className="w-full max-w-7xl mx-auto flex min-h-[80px] items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex min-w-60 w-[1280px] items-center gap-[40px_100px] justify-between flex-wrap h-full max-md:max-w-full">
          <Link href={`/${lng}/`}>
            <Logo className={`text-white ${textColor || ''}`} />
          </Link>
          {!isMobile && (
            <div
              className={`self-stretch md:w-[640px] md:-ml-[10px] flex min-w-60 items-center gap-10 text-lg text-white font-semibold tracking-[-0.36px] leading-[1.6] flex-wrap my-auto max-md:max-w-full ${
                className || ''
              }`}
            >
              {navigationItems.map((item, index) =>
                !item.hidden ? (
                  <div key={item.label + index} className={'relative desktop-dropdown-parent hover:text-yellow-500'}>
                    {item.sub ? (
                      <>
                        <button
                          className="flex items-center gap-1 my-auto focus:outline-none"
                          aria-haspopup="true"
                          aria-expanded={expandedDesktop === item.label}
                          onClick={() => setExpandedDesktop(expandedDesktop === item.label ? null : item.label)}
                          type="button"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={18}
                            className={expandedDesktop === item.label ? 'ml-1 rotate-180' : 'ml-1'}
                          />
                        </button>
                        {expandedDesktop === item.label && (
                          <div
                            className={`absolute left-0 top-full mt-2 w-[256px] border-neutral-900 bg-neutral-800 text-white rounded-lg shadow-lg z-50 ${
                              className || textColor || headerBg || ''
                            }`}
                          >
                            <ul className={`py-2 ${className}`}>
                              {item.sub.map((subItem, subIdx) => (
                                <li key={subItem.label + subIdx} className="hover:text-yellow-500">
                                  <Link href={subItem.href || '#'} className="block px-4 py-2 rounded-lg font-normal">
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link href={item.href || '#'} className="self-stretch flex items-center gap-1 my-auto">
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                ) : (
                  ''
                ),
              )}
            </div>
          )}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors ml-auto"
              aria-label="Open menu"
            >
              <Menu size={28} className={`text-white ${textColor || ''}`} />
            </button>
          )}
          {!isMobile && (
            <div className="self-stretch md:-ml-[90px] flex items-stretch h-full">
              <div className="md:mt-[15px] hidden md:block">
                <LanguageSelector className="w-full max-w-[200px]" />
              </div>
              <Button
                variant="remove"
                size="hero"
                className={`text-lg mr-2 ${textColor || ''}`}
                onClick={handleOpenSignup}
              >
                {t('signup')}
              </Button>
              <Button variant="yellow" size="hero" className={`text-lg ${textColor || ''}`} onClick={handleOpenLogin}>
                {t('login')}
              </Button>
            </div>
          )}

          {showLoginPopup && (
            <div className="fixed inset-0 z-[999] bg-black bg-opacity-50 flex items-center justify-center">
              <LoginPopup onClose={handleCloseLogin} onSwitchToSignUp={handleOpenSignup} />
            </div>
          )}

          {showSignupPopup && (
            <div className="fixed inset-0 z-[999] bg-black bg-opacity-50 flex items-center justify-center">
              <SignupForm onClose={handleCloseSignup} onSwitchToLogin={handleOpenLogin} />
            </div>
          )}
        </div>
      </nav>
      {menuOpen && isMobile && <MobileOverlay />}
    </header>
  );
};

export default HeaderMenu;
