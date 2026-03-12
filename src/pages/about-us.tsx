import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { BiLeaf, BiShield, BiWorld } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';

import Sectors from '@/components/home/Sectors';
import BreadCrumbs from '@/components/layout/BreadCrumbs';
import Footer from '@/components/layout/Footer';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Counts from '@/components/misc/Counts';
import CTA from '@/components/misc/CTA';
import { RequestQuoteButton } from '@/components/misc/RequestQuote.button';
import FurnaceBanner from '@/public/assets/img/furnace-banner.webp';
import IngotsBanner from '@/public/assets/img/ingots-banner.webp';
import QualityBanner from '@/public/assets/img/quality-guy.webp';

export default function Home(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('about-us.meta.title')}
        description={t('about-us.meta.description')}
      />
      <Navbar />
      <main className="font-theme m-0 flex flex-col items-start justify-start gap-0 p-0">
        <section
          style={{
            backgroundImage: `url(${FurnaceBanner.src})`,
          }}
          className="relative grid min-h-[70vh] w-full grid-cols-1 place-content-stretch place-items-stretch overflow-hidden border-y border-y-stone-800 bg-stone-950 bg-cover bg-center"
        >
          <section className="flex h-full w-full flex-col items-center justify-center bg-black/80 py-20">
            <BreadCrumbs
              title="products.scrap-purchasing.title"
              path={[
                {
                  name: 'about-us.title',
                  href: '/about-us',
                },
              ]}
            />
            <section className="max-w-theme flex w-full flex-col items-start justify-start gap-5 px-5">
              <h2 className="flex flex-col items-start justify-start gap-1 text-3xl font-extrabold text-white italic lg:text-5xl">
                KAYALAR
                <span className="text-primary">ALÜMİNYUM</span>
              </h2>
              <p className="max-w-xl text-xs text-neutral-400 lg:text-lg">
                {t('about-us.content.description')}
              </p>
              <section className="flex w-fit flex-wrap items-start justify-start gap-5">
                <RequestQuoteButton />
              </section>
            </section>
          </section>
        </section>
        <Counts fadeIn={false} />

        <section
          style={{
            backgroundImage: `url(${IngotsBanner.src})`,
          }}
          className="font-theme relative flex w-full items-start justify-center border-y border-y-stone-800 bg-cover bg-center py-20"
        >
          <span className="absolute top-0 left-0 z-1 h-full w-full bg-linear-to-r from-stone-950 to-stone-950/80" />
          <section
            data-aos="fade-in"
            className="lg:max-w-theme z-2 grid w-full max-w-2xl grid-cols-1 place-content-center place-items-start gap-10 px-5 lg:grid-cols-2"
          >
            <section className="order-2 flex max-w-xl flex-col items-start justify-center gap-8">
              <h2 className="flex flex-col items-start justify-start gap-2">
                <span
                  style={{
                    letterSpacing: '0.2em',
                  }}
                  className="text-primary text-xs font-semibold"
                >
                  <span className="flex flex-row items-center justify-center gap-2">
                    <span className="bg-primary h-px w-5" />
                    {t('about-us.content.vision.mini')}
                  </span>
                </span>
                <span className="text-2xl font-black text-white uppercase lg:text-4xl">
                  {t('about-us.content.vision.title')}
                </span>
              </h2>
              <p className="text-sm whitespace-pre-wrap text-neutral-400">
                {t('about-us.content.vision.description')}
              </p>
              <blockquote className="border-l-primary max-w-xs border-l-2 pl-5 text-xs text-neutral-500 italic">
                {t('about-us.content.vision.quote')}
              </blockquote>
            </section>
          </section>
        </section>
        <section className="font-theme relative flex w-full items-start justify-center border-y border-y-stone-800 bg-stone-900 bg-cover bg-center py-20">
          <section
            data-aos="fade-in"
            className="lg:max-w-theme z-2 grid w-full max-w-2xl grid-cols-1 place-content-center place-items-start gap-10 px-5 lg:grid-cols-2"
          >
            <section className="order-2 flex flex-col items-start justify-center gap-8">
              <h2 className="flex flex-col items-start justify-start gap-2">
                <span
                  style={{
                    letterSpacing: '0.2em',
                  }}
                  className="text-primary text-xs font-semibold"
                >
                  <span className="flex flex-row items-center justify-center gap-2">
                    <span className="bg-primary h-px w-5" />
                    {t('about-us.content.corporate.mini')}
                  </span>
                </span>
                <span className="text-2xl font-black text-white uppercase lg:text-4xl">
                  {t('about-us.content.corporate.title')}
                </span>
              </h2>
              <p className="max-w-2xl text-sm whitespace-pre-wrap text-neutral-400">
                {t('about-us.content.corporate.description')}
              </p>
              <ul className="flex flex-wrap items-start justify-start gap-8">
                <li className="flex items-start justify-start gap-2">
                  <BiShield className="text-primary h-5 w-5" />
                  <section className="flex flex-col items-start justify-start gap-0">
                    <span className="text-sm text-neutral-400">
                      {t('about-us.content.corporate.list.1.title')}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {t('about-us.content.corporate.list.1.description')}
                    </span>
                  </section>
                </li>
                <li className="flex items-start justify-start gap-2">
                  <BiWorld className="text-primary h-5 w-5" />
                  <section className="flex flex-col items-start justify-start gap-0">
                    <span className="text-sm text-neutral-400">
                      {t('about-us.content.corporate.list.2.title')}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {t('about-us.content.corporate.list.2.description')}
                    </span>
                  </section>
                </li>
                <li className="flex items-start justify-start gap-2">
                  <BiLeaf className="text-primary h-5 w-5" />
                  <section className="flex flex-col items-start justify-start gap-0">
                    <span className="text-sm text-neutral-400">
                      {t('about-us.content.corporate.list.0.title')}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {t('about-us.content.corporate.list.0.description')}
                    </span>
                  </section>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section
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
            <section className="order-2 flex max-w-xl flex-col items-start justify-center gap-8">
              <h2 className="flex flex-col items-start justify-start gap-2">
                <span
                  style={{
                    letterSpacing: '0.2em',
                  }}
                  className="text-primary text-xs font-semibold"
                >
                  <span className="flex flex-row items-center justify-center gap-2">
                    <span className="bg-primary h-px w-5" />
                    {t('about-us.content.production.mini')}
                  </span>
                </span>
                <span className="text-2xl font-black text-white uppercase lg:text-4xl">
                  {t('about-us.content.production.title')}
                </span>
              </h2>
              <p className="text-sm whitespace-pre-wrap text-neutral-400">
                {t('about-us.content.production.description')}
              </p>
              <ul className="m-0 flex flex-col items-start justify-start gap-3 p-0">
                <li className="flex items-start justify-start gap-2">
                  <BsCheckCircleFill className="text-primary h-5 w-5" />
                  <span className="mt-1 text-xs text-neutral-400">
                    {t('about-us.content.production.list.0')}
                  </span>
                </li>
                <li className="flex items-start justify-start gap-2">
                  <BsCheckCircleFill className="text-primary h-5 w-5" />
                  <span className="mt-1 text-xs text-neutral-400">
                    {t('about-us.content.production.list.1')}
                  </span>
                </li>
                <li className="flex items-start justify-start gap-2">
                  <BsCheckCircleFill className="text-primary h-5 w-5" />
                  <span className="mt-1 text-xs text-neutral-400">
                    {t('about-us.content.production.list.2')}
                  </span>
                </li>
              </ul>
            </section>
          </section>
        </section>

        <Sectors />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
