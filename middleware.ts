import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, cookieName } from '@/i18n/settings';
import { languages } from './constants';

acceptLanguage.languages(languages);

export const config: any = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|images|public).*)'],
};

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: any): any {
  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1)
    return NextResponse.next();
  if (PUBLIC_FILE.test(req.nextUrl.pathname)) return NextResponse.next();

  let lng: any;
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = req.headers.get('accept-language');
  if (!lng) lng = fallbackLng;
  if (
    !languages.some((loc: any) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    const url = new URL(req.url);
    url.pathname = `/${lng}${req.nextUrl.pathname}`;
    url.search = req.nextUrl.search;
    return NextResponse.redirect(url);
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'));
    const lngInReferer = languages.find((l: any) => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
