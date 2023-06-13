/* ------------------------------------------------
  Try 4) This is a pass-through layout as I tried using only the layou.js in the [lang] folder
  Uses a custom intercom widget component

  => DOES NOT WORK

  The intercom widget shows up, but when switching language,
  the IntercomClientProvider is unable to re-attach its context and the Intercom widget disappears.

  If you switch langage AGAIN, then a client errors shows up
------------------------------------------------ */
const RootLayout = ({
  children
}) => (
  <>
    {children}
  </>
);

export default RootLayout;