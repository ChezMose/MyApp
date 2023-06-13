'use client';

import React from 'react';
import { usePathname } from 'next/navigation';


/* --------------------------------------------------
  Triggers an intercom update on path change
-------------------------------------------------- */
const IntercomUpdater = () => {
  // get the current url
  const pathname = usePathname();
  
  React.useEffect(() => {
    try {
      // if window is available
      if (window !== 'undefined') {
        console.log('.. updating intercom ..');
        // update intercom
        window.Intercom('update');
      }
      else
        console.error('xx cannot update intercom xx');

    }
    catch (e) {
      console.error('** error updating Intercom **', e);
    }
  },
  [pathname]);

  return null;
}

export default IntercomUpdater;
