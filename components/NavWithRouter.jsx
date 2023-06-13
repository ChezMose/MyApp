'use client';

import React from 'react';
// tools
import { useRouter } from 'next/navigation';
import styles from './Nav.module.css';

/* ------------------------------------------
  Language selection
------------------------------------------ */
const NavWithRouter = ({
  href,
  children
}) => {
  // get the nextJs router
  const router = useRouter();

  return (
    <button
      className={styles.nav}
      onClick={() => router.push(href)}
    >
      {children}
    </button>
  );
};

export default NavWithRouter;
