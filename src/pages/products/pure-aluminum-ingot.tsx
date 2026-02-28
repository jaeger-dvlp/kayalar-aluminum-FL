import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import BreadCrumbs from '@/components/layout/BreadCrumbs';
import Footer from '@/components/layout/Footer';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import CTA from '@/components/misc/CTA';
import PureIngotTable from '@/components/tables/PureIngot.Table';
import PureIngots from '@/public/assets/img/products/pure-ingot.webp';

export default function PureAluminumIngot(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('products.pure-aluminum-ingot.meta.title')}
        description={t('products.pure-aluminum-ingot.meta.description')}
      />
      <Navbar />
      <main className="font-theme m-0 flex flex-col items-start justify-start gap-0 p-0">
        <BreadCrumbs
          title="products.pure-aluminum-ingot.title"
          path={[
            { name: 'navbar.products', href: '/#products' },
            {
              name: 'products.pure-aluminum-ingot.title',
              href: '/products/pure-aluminum-ingot',
            },
          ]}
        />
        <section className="m-0 flex w-full flex-col items-center justify-start bg-stone-950 pb-20">
          <section className="max-w-theme grid w-full grid-cols-1 place-content-start place-items-start gap-14 px-5 md:grid-cols-1 lg:grid-cols-2">
            <section className="h-full w-full">
              <img
                src={PureIngots.src}
                alt="Pure Aluminum Ingots"
                className="aspect-video h-full max-h-125 w-full border border-stone-700 bg-stone-900 object-cover object-center p-2"
              />
            </section>
            <section className="grid h-full w-full grid-cols-1 place-content-between place-items-start">
              <section className="flex w-full flex-col items-start justify-start gap-10">
                <h2 className="flex flex-col items-start justify-start gap-1 text-3xl font-extrabold text-white lg:text-6xl">
                  <span
                    style={{
                      letterSpacing: '0.2em',
                    }}
                    className="text-primary flex flex-row items-center justify-center gap-2 text-xs font-normal"
                  >
                    <span className="bg-primary h-px w-5" />
                    {t('misc.product')}
                  </span>
                  {t('products.pure-aluminum-ingot.title')}
                </h2>
                <p className="text-sm text-zinc-400">
                  {t('products.pure-aluminum-ingot.content.description')}
                </p>
              </section>
              <span className="my-10 h-px w-full bg-stone-700" />
              <ul className="m-0 grid w-full grid-cols-1 place-content-start place-items-start gap-5 p-0 md:grid-cols-2 lg:grid-cols-2">
                <li className="flex w-full flex-col items-start justify-start gap-1">
                  <h3 className="text-xs font-bold text-zinc-500 uppercase">
                    {t('products.pure-aluminum-ingot.content.specs.0.title')}
                  </h3>
                  <p className="text-lg font-normal text-zinc-100">
                    {t(
                      'products.pure-aluminum-ingot.content.specs.0.description',
                    )}
                  </p>
                </li>
                <li className="flex w-full flex-col items-start justify-start gap-1">
                  <h3 className="text-xs font-bold text-zinc-500 uppercase">
                    {t('products.pure-aluminum-ingot.content.specs.1.title')}
                  </h3>
                  <p className="text-lg font-normal text-zinc-100">
                    {t(
                      'products.pure-aluminum-ingot.content.specs.1.description',
                    )}
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section className="bg flex w-full flex-col items-center justify-start border-y border-y-stone-700 bg-neutral-900 py-20">
          <ul className="max-w-theme gird-cols-1 m-0 grid w-full place-content-start place-items-center gap-20 px-5 md:grid-cols-2 lg:grid-cols-2">
            <li className="flex h-full w-full flex-col items-start justify-start gap-4">
              <h3
                style={{
                  letterSpacing: '0.2em',
                }}
                className="flex flex-row items-center justify-start gap-2 text-xs font-semibold text-zinc-200"
              >
                <span className="bg-primary h-px w-5" />
                <span>
                  {t(
                    'products.pure-aluminum-ingot.content.production-process.title',
                  )}
                </span>
              </h3>
              <p className="text-xs text-neutral-500">
                {t(
                  'products.pure-aluminum-ingot.content.production-process.description',
                )}
              </p>
            </li>
            <li className="flex h-full w-full flex-col items-start justify-start gap-4">
              <h3
                style={{
                  letterSpacing: '0.2em',
                }}
                className="flex flex-row items-center justify-start gap-2 text-xs font-semibold text-zinc-200"
              >
                <span className="bg-primary h-px w-5" />
                <span>
                  {t(
                    'products.pure-aluminum-ingot.content.application-areas.title',
                  )}
                </span>
              </h3>
              <p className="text-xs text-neutral-500">
                {t(
                  'products.pure-aluminum-ingot.content.application-areas.description',
                )}
              </p>
            </li>
          </ul>
        </section>
        <section className="font-theme flex w-full flex-col items-center justify-start py-20">
          <section className="max-w-theme flex w-full flex-col items-center justify-start gap-5 px-5">
            <section className="w-full overflow-auto">
              <PureIngotTable />
            </section>
          </section>
        </section>
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
