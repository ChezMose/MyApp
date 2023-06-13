import IntercomClientProvider from '/components/IntercomClientProvider';


/* ------------------------------------------------
  Using that sub-layout will not work
  
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
