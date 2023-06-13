import './globals.css'
import SelectLang from '/components/SelectLang';
import IntercomMessenger from '/components/IntercomMessenger';


/* ------------------------------------------------
  Try 4) Using this layout only, without a layout.js in the /app folder root
  Uses a custom intercom widget component

  => DOES NOT WORK

  The intercom widget shows up, but when switching language,
  the IntercomClientProvider is unable to re-attach its context and the Intercom widget disappears
------------------------------------------------ */
const RootLayout = ({
  params: { lang },
  children
}) => (
  <html lang={lang}>
    <body>
      <SelectLang />
      {children}
      <IntercomMessenger />
    </body>
  </html>
);

export default RootLayout;