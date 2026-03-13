// ? Global styles
import 'aos/dist/aos.css';
import '@/styles/globals.css';

import AOS from 'aos';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import React from 'react';

import Loader from '@/components/layout/Loader';
import ConsentGTM from '@/components/misc/ConsentGTM';
import CookiePopup from '@/components/misc/Cookie.popup';

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
