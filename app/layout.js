import IntercomClientProvider from '/components/IntercomClientProvider';


/* ------------------------------------------------
  Try 3) Using this layout with a child layout.js in the [lang] folder
  
  => DOES ALMOST WORK
  
  The intercom widget shows up
  Switching language works
  But there is no way to add the lang attribute to the html tag
------------------------------------------------ */
const RootLayout = ({
  params: { lang },
  children
}) => (
  <html lang={lang}>
    <body>
      <IntercomClientProvider>
        {children}
      </IntercomClientProvider>
    </body>
  </html>
);

export default RootLayout;
