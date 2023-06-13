'use client';

import React from 'react';
// tools
import { useParams } from 'next/navigation';
import styles from './ShowLang.module.css';

/* ------------------------------------------
  Language selection
------------------------------------------ */
const ShowLang = () => {
  // get the current lang
  const { lang } = useParams();

  return (
    <div className={styles.show}>
      You are in {lang}
    </div>
  );
};

export default ShowLang;
