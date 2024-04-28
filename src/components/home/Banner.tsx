import React from 'react';
import { useTranslation } from 'next-i18next';

import BannerImg from '@/public/assets/img/banner.webp';

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
    <section className="relative m-0 flex h-screen w-full items-center justify-center overflow-hidden p-0 font-theme">
      <img
        className="absolute left-0 top-0 z-[1] m-0 h-full w-full object-cover p-0"
        src={BannerImg.src}
        alt="Kayalar Alüminyum"
      />
      <section
        style={{
          backgroundImage: 'linear-gradient(90deg, #603A00 0%, #000000 38%)',
        }}
        className="absolute left-0 top-0 z-[2] h-full w-full opacity-60"
      />
      <section className="relative z-[3] flex w-full max-w-theme items-center justify-start p-5">
        <h2 className="w-full max-w-[440px] text-4xl font-light text-white lg:text-5xl">
          {getHeadingByLang()}
        </h2>
      </section>
    </section>
  );
}

export default Banner;
