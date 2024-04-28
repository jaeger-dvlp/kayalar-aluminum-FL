import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import QualityBanner from '@/public/assets/img/quality-banner.webp';

function Quality() {
  const { t } = useTranslation();
  return (
    <section
      id="quality"
      className="grid w-full grid-cols-1 place-content-start bg-white lg:grid-cols-2"
    >
      <img
        alt="Kayalar Alüminyum"
        src={QualityBanner.src}
        className="h-full max-h-[400px] w-full object-cover lg:max-h-[600px]"
      />
      <section className="relative h-full w-full max-w-xl items-center justify-center place-self-center bg-white p-5 py-10 lg:max-w-[700px] lg:place-self-auto lg:p-20">
        <section className="flex h-full w-full flex-col items-start justify-center gap-5 bg-white font-theme text-[#7B776F]">
          <h2 className="text-2xl font-semibold lg:text-3xl">
            {t('home.quality.title')}
          </h2>
          <p className="text-sm lg:text-base">
            {t('home.quality.description')}
          </p>
          <Link
            href="/quality"
            className="ls-navbar border-2 border-[#ED8E01] py-1.5 px-10 text-sm text-[#000000] transition-all duration-200 hover:bg-black/20 lg:text-base"
          >
            {t('read-more')}
          </Link>
        </section>
      </section>
    </section>
  );
}

export default Quality;
