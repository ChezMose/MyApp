import './globals.css'
import SelectLang from '/components/SelectLang';


/* ------------------------------------------------
  Try 5) Using this layout with a parent layout.js in the /app folder root containing the IntercomClientProvider
  Uses a custom intercom widget component

  => DOES ALMOST WORK
  
  The intercom widget shows up
  Switching language works
  But there is no way to add the lang attribute to the html tag
------------------------------------------------ */
const RootLayout = ({
  params: { lang },
  children
}) => (
  <>
    <SelectLang />
    {children}
  </>
);


export default RootLayout;