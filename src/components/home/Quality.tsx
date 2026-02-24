import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BiSolidBadgeCheck, BiSolidLeaf } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

import QualityBanner from '@/public/assets/img/quality-guy.webp';

function Quality() {
  const { t } = useTranslation();
  return (
    <section
      id="quality"
      style={{
        backgroundImage: `url(${QualityBanner.src})`,
      }}
      className="font-theme relative flex w-full items-start justify-center border-y border-y-stone-800 bg-cover bg-center py-20"
    >
      <span className="absolute top-0 left-0 z-1 h-full w-full bg-linear-to-r from-stone-950 to-stone-950/70" />
      <section
        data-aos="fade-in"
        className="lg:max-w-theme z-2 grid w-full max-w-2xl grid-cols-1 place-content-center place-items-start gap-10 px-5 lg:grid-cols-2"
      >
        <section className="flex flex-col items-start justify-center gap-8">
          <h2 className="flex flex-col items-start justify-start gap-2">
            <span
              style={{
                letterSpacing: '0.2em',
              }}
              className="text-primary text-xs font-semibold"
            >
              <span className="flex flex-row items-center justify-center gap-2">
                <span className="bg-primary h-px w-5" />
                {t('home.quality.heading.mini')}
              </span>
            </span>
            <span className="text-xl font-black text-white lg:text-4xl">
              {t('home.quality.heading.title')}
            </span>
          </h2>
          <p className="font-theme max-w-xl text-sm text-zinc-400">
            {t('home.quality.description')}
          </p>
          <ul className="flex list-none flex-wrap items-center justify-start gap-5">
            <li className="flex flex-row items-center justify-start gap-6 border border-stone-800 bg-zinc-900 px-6 py-4">
              <BiSolidBadgeCheck className="text-primary h-6 w-6" />
              <section className="flex flex-col items-start justify-start gap-0">
                <p className="text-sm font-semibold text-white uppercase">
                  ISO 9001:2015
                </p>
                <p className="text-xs text-zinc-400">
                  Kalite Yönetim Sertifikası
                </p>
              </section>
            </li>
            <li className="flex flex-row items-center justify-start gap-6 border border-stone-800 bg-zinc-900 px-6 py-4">
              <BiSolidLeaf className="text-primary h-6 w-6" />
              <section className="flex flex-col items-start justify-start gap-0">
                <p className="text-sm font-semibold text-white uppercase">
                  ISO 14001:2015
                </p>
                <p className="text-xs text-zinc-400">
                  Çevre Yönetim Sertifikası
                </p>
              </section>
            </li>
          </ul>
          <Link
            className="border-b-primary group font-poppins flex items-center justify-start gap-2 border-b pb-2 text-sm text-white"
            href="/quality"
          >
            <span>{t('home.quality.link')}</span>
            <BsArrowRight className="transition-all duration-150 group-hover:ml-2" />
          </Link>
        </section>
      </section>
    </section>
  );
}

export default Quality;
