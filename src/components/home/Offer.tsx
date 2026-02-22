import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

function Offer() {
  const { t } = useTranslation();
  return (
    <section className="font-theme m-0 flex w-full items-center justify-center bg-[#1B1A18] p-0">
      <section className="max-w-theme flex w-full flex-col items-center justify-start gap-16 p-5 py-24 text-center">
        <h2
          style={{
            letterSpacing: '10px',
          }}
          className="border-b border-b-[#CB7A01] px-3 pb-5 text-center text-4xl font-light text-[#E6DFD2] lg:text-5xl"
        >
          {t('home.offer.title')}
        </h2>
        <p className="text-sm whitespace-pre-wrap text-[#E6DFD2] lg:text-base">
          {t('home.offer.description')}
        </p>
        <Link
          href="/contact"
          className="ls-navbar relative border-2 border-[#ED8E01] px-10 py-1.5 text-sm text-white transition-all duration-200 hover:bg-white/20 lg:text-base"
        >
          {t('home.offer.button')}
          <span className="absolute top-0 right-0 flex h-4 w-4 translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full border bg-white" />
          </span>
        </Link>
      </section>
    </section>
  );
}

export default Offer;
