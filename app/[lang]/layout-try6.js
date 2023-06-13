import './globals.css'
import SelectLang from '/components/SelectLang';


/* ------------------------------------------------
  Try 6) Using this layout with a parent layout.js in the /app folder root containing the IntercomClientProvider
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
      </body>
  </html>
);


export default RootLayout;