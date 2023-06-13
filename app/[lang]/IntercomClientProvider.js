'use client';

import { IntercomProvider } from 'react-use-intercom';

const IntercomClientProvider = ({ children }) => {
  return (
    <IntercomProvider appId="ugrxoiig" autoBoot>
      {children}
    </IntercomProvider>
  )
}

export default IntercomClientProvider;
