'use client';

import React from 'react';
// tools
import {
  useRouter,
  usePathname,
  useParams,
} from 'next/navigation';
import { locales } from 'tools/loca';
import styles from './SelectLang.module.css';

/* ------------------------------------------
  Redirect to given pathname with given locale
------------------------------------------ */
const toLocalPath = (pathname, locale) => {
  // if no locale, keep as-is
  if (!locale)
    return pathname;
  // if no pathname, go home
  if (!pathname || pathname === '')
    return '/' + locale;

  // split the pathname
  const segments = pathname.split('/');
  // if we already have a locale
  if (locales.includes(segments[1]))
    // update the locale
    segments[1] = locale;
  // if no locales yet
  else
    // insert the given one
    segments.splice(1, 0, locale);

  // make it a pathname again
  return segments.join('/');
};

/* ------------------------------------------
  Language selection
------------------------------------------ */
const SelectLang = () => {
  // get the nextJs router
  const router = useRouter();
  // get the current url
  const pathname = usePathname();
  // get the current lang
  const { lang } = useParams();

  // click handler
  const onSwitchLang = (locale) => () => {
    // if the lang changed
    if (locale !== lang) {
      // switch lang
      router.push(toLocalPath(pathname, locale));
    }
  };

  return (
    <ul className={styles.list}>
      {locales.map((locale) => (
        <li key={locale}>
          <button
            onClick={onSwitchLang(locale)}
          >
            {locale}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SelectLang;
