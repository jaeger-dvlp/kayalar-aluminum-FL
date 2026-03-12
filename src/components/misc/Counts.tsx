import { useTranslation } from 'next-i18next';
import React from 'react';

function Counts({
  isBlack = false,

  fadeIn = true,
}: {
  isBlack?: boolean;
  fadeIn?: boolean;
}): React.JSX.Element {
  const { t } = useTranslation('common');
  return (
    <section
      className={`font-theme flex w-full flex-wrap items-center justify-center ${isBlack ? 'bg-stone-950' : 'bg-primary'}`}
    >
      <ul
        data-aos={fadeIn ? 'fade-in' : undefined}
        className={`${isBlack ? 'text-primary' : 'text-black'} max-w-theme m-0 flex w-full flex-col flex-wrap items-center justify-center gap-10 px-5 py-20 lg:flex-row lg:items-start lg:justify-between`}
      >
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p
            className={`text-3xl font-black italic lg:text-5xl ${isBlack && 'text-white'}`}
          >
            25+
          </p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className={`text-xs font-bold lg:text-sm`}
          >
            {t('misc.counts.global-partner').toUpperCase()}
          </p>
        </li>

        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p
            className={`text-3xl font-black italic lg:text-5xl ${isBlack && 'text-white'}`}
          >
            100k+
          </p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-bold lg:text-sm"
          >
            {t('misc.counts.annual-tonnage').toUpperCase()}
          </p>
        </li>
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p
            className={`text-3xl font-black italic lg:text-5xl ${isBlack && 'text-white'}`}
          >
            45+
          </p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-bold lg:text-sm"
          >
            {t('misc.counts.experience').toUpperCase()}
          </p>
        </li>
        <li className="flex flex-col items-center justify-center gap-0 lg:items-start">
          <p
            className={`text-3xl font-black italic lg:text-5xl ${isBlack && 'text-white'}`}
          >
            TSE/ISO
          </p>
          <p
            style={{ letterSpacing: '0.2em' }}
            className="text-xs font-bold lg:text-sm"
          >
            {t('misc.counts.quality').toUpperCase()}
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Counts;
