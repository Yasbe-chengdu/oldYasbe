'use client';

import { CookiesProvider } from 'react-cookie';

export default function CookieProviderClient({ children }: { children: React.ReactNode }) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
