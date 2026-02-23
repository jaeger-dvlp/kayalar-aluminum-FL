import { useRouter } from 'next/router';
import React from 'react';

import Wait from '@/common/utils/Wait.util';

function Loader(): React.JSX.Element | null {
  const Router = useRouter();
  const [loader, setLoader] = React.useState({
    inHTML: true,
    isActive: true,
  });

  const HideLoader = async () => {
    await Wait(500);
    setLoader({
      inHTML: true,
      isActive: false,
    });
    await Wait(500);
    setLoader({
      inHTML: false,
      isActive: false,
    });
  };

  const ShowLoader = async () => {
    setLoader({
      inHTML: true,
      isActive: true,
    });
  };

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => void ShowLoader());
    Router.events.on('routeChangeComplete', () => void HideLoader());
    Router.events.on('routeChangeError', () => void HideLoader());

    return () => {
      Router.events.off('routeChangeStart', () => void ShowLoader());
      Router.events.off('routeChangeComplete', () => void HideLoader());
      Router.events.off('routeChangeError', () => void HideLoader());
    };
  }, [Router.events]);

  React.useEffect(() => {
    void HideLoader();
  }, []);

  return (
    (loader.inHTML && (
      <div
        style={{
          transition: loader.isActive ? 'none' : 'all 0.5s',
        }}
        className={` ${loader.isActive ? 'visible opacity-100' : 'invisible opacity-0'} fixed top-0 left-0 z-999999! flex h-full w-full items-center justify-center bg-stone-950`}
      />
    )) ||
    null
  );
}

export default Loader;
