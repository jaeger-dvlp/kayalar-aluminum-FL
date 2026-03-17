import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function Title({ lang }: { lang: string }) {
  if (lang === 'tr') {
    return (
      <>
        ÜRÜNLERİNİZ İÇİN <span className="text-white">GÜÇLÜ ÇÖZÜMLER</span>
      </>
    );
  }

  return (
    <>
      POWERFUL SOLUTIONS <span className="text-white">FOR YOUR PRODUCTS</span>
    </>
  );
}

function CTA() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <section className="font-theme from-primary relative flex w-full items-center justify-center border-y border-y-stone-800 bg-linear-to-r to-yellow-800 py-20">
      <section className="max-w-theme relative z-2 flex w-full flex-col items-start justify-start gap-5 px-5">
        <h2 className="flex flex-col items-start justify-start gap-2">
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-xs font-semibold text-black"
          >
            <span className="flex flex-row items-center justify-center gap-2">
              <span className="h-px w-5 bg-black" />
              {t('misc.cta.heading.mini')}
            </span>
          </span>
          <span className="text-2xl font-black text-black italic lg:text-4xl">
            <Title lang={language} />
          </span>
        </h2>
        <p className="font-poppins max-w-xl text-sm text-zinc-900">
          {t('misc.cta.description')}
        </p>
        <Link
          href="/request-quote"
          style={{
            letterSpacing: '0.1em',
          }}
          className="lg:text-md flex items-center gap-2 border border-white bg-white px-5 py-3 text-sm font-bold text-black uppercase shadow-xl shadow-white/30 transition-all duration-200 hover:bg-white/20"
        >
          <span>{t('buttons.rn-request-quote')}</span>
          <BsArrowRight className="transition-all duration-150 group-hover:ml-2" />
        </Link>
      </section>
    </section>
  );
}

export default CTA;
