// ? Global styles
import 'aos/dist/aos.css';
import '@/styles/globals.css';

import AOS from 'aos';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import React from 'react';

import Loader from '@/components/layout/Loader';
import CookiePopup from '@/components/misc/Cookie.popup';
import ConsentGTM from '@/components/misc/ConsentGTM';

// * Local font implementation with @next/font/local - #1
//
// import localFont from '@next/font/local';
//
// const Inter = localFont({
//   src: [
//     {
//       path: '../../public/assets/fonts/Inter-Thin.otf',
//       weight: '100',
//     },
//    ...
//   ],
//   variable: '--font-inter',
//   fallback: ['ui-sans-serif'],
// });

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({
      once: true,
      offset: 250,
      delay: 200,
      duration: 750,
    });
  }, []);
  return (
    <>
      <Loader />
      <CookiePopup />
      <ConsentGTM />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
