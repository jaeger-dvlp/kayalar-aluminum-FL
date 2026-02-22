import { useTranslation } from 'next-i18next';
import React from 'react';

// import BannerImg from '@/public/assets/img/banner.webp';

function Banner() {
  const {
    i18n: { language: lang },
  } = useTranslation();

  const getHeadingByLang = () => {
    if (lang === 'tr') {
      return (
        <>
          Kalitede <span className="text-[#F39200]">Öncü</span> Kuruluş.
        </>
      );
    }

    return (
      <>
        Leading Company in <span className="text-[#F39200]">Quality</span>.
      </>
    );
  };

  return (
    <section className="font-theme relative m-0 flex h-screen w-full items-center justify-center overflow-hidden p-0">
      {/* <img
        className="absolute left-0 top-0 z-[1] m-0 h-full w-full object-cover p-0"
        src={BannerImg.src}
        alt="Kayalar Alüminyum"
      /> */}
      <video
        className="absolute top-0 left-0 z-[1] m-0 h-full w-full object-cover p-0"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src="/assets/img/bg-vid.mp4" type="video/mp4" />
      </video>
      <section className="absolute top-0 left-0 z-[2] h-full w-full bg-black/70" />
      <section className="max-w-theme relative z-[3] flex w-full items-center justify-center p-5">
        <h2 className="w-full max-w-[440px] text-center text-4xl font-light text-white lg:text-5xl">
          {getHeadingByLang()}
        </h2>
      </section>
    </section>
  );
}

export default Banner;
