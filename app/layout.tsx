import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import React from 'react';
import Providers from './providers';
import { languages } from '@/constants';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import CookieProviderClient from './components/CookieProviderClient';

dayjs.extend(relativeTime);

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Beeznis',
  description: 'Connect you with the world economy',
  generator: 'Plainthing',
};

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function RootLayout(props: any) {
  return (
    <html className={plusJakartaSans.variable} lang={props?.params?.lng} dir="ltr">
      <head>
        <link rel="icon" href="/images/logo-only.png" type="image/png" />
      </head>
      <body>
        <CookieProviderClient>
          <Providers {...props} />
        </CookieProviderClient>
      </body>
    </html>
  );
}
