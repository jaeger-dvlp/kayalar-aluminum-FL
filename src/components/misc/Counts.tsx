import { useTranslation } from 'next-i18next';
import React from 'react';

function Counts() {
  const { t } = useTranslation('common');
  return (
    <section className="font-theme bg-primary flex w-full flex-wrap items-center justify-center">
      <ul
        data-aos="fade-in"
        className="max-w-theme m-0 flex w-full flex-col flex-wrap items-center justify-center gap-10 px-5 py-20 lg:flex-row lg:items-start lg:justify-between"
      >
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p className="text-3xl font-black text-black italic lg:text-5xl">
            25+
          </p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-bold text-black lg:text-sm"
          >
            {t('misc.counts.global-partner').toUpperCase()}
          </p>
        </li>

        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p className="text-3xl font-black text-black italic lg:text-5xl">
            100k+
          </p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-bold text-black lg:text-sm"
          >
            {t('misc.counts.annual-tonage').toUpperCase()}
          </p>
        </li>
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p className="text-3xl font-black text-black italic lg:text-5xl">
            45+
          </p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-bold text-black lg:text-sm"
          >
            {t('misc.counts.experience').toUpperCase()}
          </p>
        </li>
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p className="text-3xl font-black text-black italic lg:text-5xl">
            TSE/ISO
          </p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-bold text-black lg:text-sm"
          >
            {t('misc.counts.quality').toUpperCase()}
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Counts;
