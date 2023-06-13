import './globals.css'
import SelectLang from '/components/SelectLang';
import IntercomClientProvider from '/components/IntercomClientProvider';


/* ------------------------------------------------
  Try 1) Using this layout only, without a layout.js in the /app folder root

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
      <IntercomClientProvider>
        <SelectLang />
        {children}
      </IntercomClientProvider>
    </body>
  </html>
);

export default RootLayout;