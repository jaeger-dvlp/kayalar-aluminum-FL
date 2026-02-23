import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { RequestQuoteButton } from '../misc/RequestQuote.button';

function Hero() {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();

  const getHeadingByLang = () => {
    if (lang === 'tr') {
      return (
        <span>
          <span className="text-white">KALİTEDE</span>
          <br />
          <span className="hero-gradient-text">ÖNCÜ KURULUŞ.</span>
        </span>
      );
    }

    return (
      <>
        <span className="text-white">A LEADING COMPANY</span>
        <br />
        <span className="hero-gradient-text">IN QUALITY.</span>
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
        className="absolute top-0 left-0 z-1 m-0 h-full w-full object-cover p-0"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src="/assets/img/bg-vid.mp4" type="video/mp4" />
      </video>
      <section className="absolute top-0 left-0 z-2 h-full w-full bg-black/85" />
      <section className="max-w-theme hero-anim relative z-3 flex w-full flex-col items-start justify-center gap-5 p-5 text-left!">
        <h2
          style={{
            lineHeight: '1.2em',
          }}
          className="flex w-fit flex-col gap-2 text-4xl font-black whitespace-pre-wrap uppercase lg:text-6xl"
        >
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-primary flex items-center justify-start gap-2 text-xs font-normal"
          >
            <span className="bg-primary h-px w-8" />
            <span>SINCE 1978</span>
          </span>
          {getHeadingByLang()}
        </h2>
        <p className="lg:text-md max-w-lg text-sm text-slate-300">
          {t('home.hero.paragraph')}
        </p>
        <section className="flex w-fit flex-wrap items-start justify-start gap-5">
          <RequestQuoteButton />
          <Link
            href="/#products"
            style={{
              letterSpacing: '0.1em',
            }}
            className="lg:text-md border border-zinc-400 bg-black/10 px-5 py-3 text-sm font-normal text-zinc-300 uppercase transition-all duration-200 hover:bg-zinc-200/20"
          >
            {t('buttons.inspect-products')}
          </Link>
        </section>
      </section>
      <div
        style={{
          letterSpacing: '0.2em',
        }}
        className="font-theme absolute bottom-4 left-1/2 z-3 flex -translate-x-1/2 flex-col items-center justify-center gap-4 text-sm font-light text-stone-500 opacity-50"
      >
        <span>{t('misc.scroll-down')}</span>
        <BsChevronDown className="animate-bounce" />
      </div>
    </section>
  );
}

export default Hero;
