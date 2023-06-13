// tools
import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import { locales, localeDefault } from 'tools/loca';


/* ----------------------------------------
  Infer the locale
---------------------------------------- */
const getLocale = (request) => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return matchLocale(languages, locales, localeDefault);
}

/* ----------------------------------------
  Redirect if there is no locale in the path
---------------------------------------- */
export const middleware = (request) => {
  // get the pathname
  const pathname = request.nextUrl.pathname
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // get the working one
    const locale = getLocale(request)
    // ignore path if root page (assuming 1 char path is the root)
    const path = (pathname.length > 1) ? pathname : '';
    // then redirect
    return NextResponse.redirect(new URL(`/${locale}/${path}`, request.url))
  }
};

/* ----------------------------------------
  Matcher for ignored path
---------------------------------------- */
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|icons|images|backs|anim|favicon.ico).*)'],
};
