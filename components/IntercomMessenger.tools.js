
'use client';

import React from 'react';
// tools
//import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


/* ----------------------------------------------------
  Initialize and start the intercom widget
  Update on page changes
---------------------------------------------------- */
export const useIntercom = (appId) => {
  // initialize the widget
  React.useEffect(() => {
    initializeAndBoot(appId);
  },
  // only change if appId changes
  [appId]);

  // get the current path
  const pathname = usePathname();

  // update on navigation
  React.useEffect(() => {
    try {
      // if window is ready
      if (window !== 'undefined')
        // update intercom
        window.Intercom('update');
    }
    catch (e) {
      console.error('** intercom update error **', e);
    }
  },
  // do it once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [pathname])
};

/* ----------------------------------------------------
  Initialize and boot the intercom widget script
---------------------------------------------------- */
export const initializeAndBoot = (appId, timeout = 0) => {
  try {
    console.log('initializing...');
    const w = window;
    const ic = w.Intercom;
    if (typeof ic === 'function') {
      console.log('Intercom already initialized, reattaching...', w.intercomSettings);
      ic('reattach_activator');
      ic('update', w.intercomSettings);
      console.log('...reattaching done');
    }
    else {
      console.log('new script...');
      const d = document;
      const i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Intercom = i;
      const l = function () {
        setTimeout(function () {
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/' + appId;
          const x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        }, timeout);
      };

      console.log('ready ? ' + document.readyState );

      if (document.readyState === 'complete')
        l();
      else if (w.attachEvent)
        w.attachEvent('onload', l);
      else
        w.addEventListener('load', l, false);
    }
  }
  catch (e) {
    console.error('** intercom init error **', e);
  }

  try {
    setTimeout(() => {
      console.log('booting...');
      window.Intercom("boot", {
        api_base: "https://api-iam.intercom.io",
        app_id: appId,
      });
    }, 2000);
  }
  catch (e) {
    console.error('** intercom boot error **', e);
  }
};
