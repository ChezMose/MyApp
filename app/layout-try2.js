import IntercomClientProvider from '/components/IntercomClientProvider';


/* ------------------------------------------------
  Try 2) Using this layout with a child layout.js in the [lang] folder
  
  => DOES NOT WORK
  
  The intercom widget shows up, but when switching language,
  the IntercomClientProvider is unable to re-attach its context and the Intercom widget disappears
------------------------------------------------ */
const RootLayout = ({
  params: { lang },
  children
}) => (
  <>
    <IntercomClientProvider>
      {children}
    </IntercomClientProvider>
  </>
);

export default RootLayout;
