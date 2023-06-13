'use client';

import { IntercomProvider } from 'react-use-intercom';
import IntercomUpdater from './IntercomUpdater';


/* --------------------------------------------------
  Wraps the IntercomProvider of react-use-intercom as a client components
  + adds settings

  Note: adding this component into the layout.js file of the [lang] folder
  does not fix the issue, it even makes things worst:
  it triggers an error page if you double-switch language
-------------------------------------------------- */
const IntercomClientProvider = ({ children }) => (
  <IntercomProvider appId="ugrxoiig" autoBoot>
    {children}
    <IntercomUpdater />
  </IntercomProvider>
);

export default IntercomClientProvider;
