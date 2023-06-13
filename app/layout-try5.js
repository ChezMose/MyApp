import IntercomMessenger from '/components/IntercomMessenger';


/* ------------------------------------------------
  Try 5) Using this layout with a child layout.js in the [lang] folder
  Uses a custom intercom widget component

  => DOES NOT WORK
  
  The intercom widget shows up, but when switching language,
  the IntercomClientProvider is unable to re-attach its context and the Intercom widget disappears
------------------------------------------------ */
const RootLayout = ({
  params: { lang },
  children
}) => (
  <>
    <IntercomMessenger />
    {children}
  </>
);

export default RootLayout;
