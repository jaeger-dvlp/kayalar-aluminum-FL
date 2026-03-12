import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import Sectors from '@/components/home/Sectors';
import BreadCrumbs from '@/components/layout/BreadCrumbs';
import Footer from '@/components/layout/Footer';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import CTA from '@/components/misc/CTA';
import { RequestQuoteButton } from '@/components/misc/RequestQuote.button';
import PureIngotTable from '@/components/tables/PureIngot.Table';
import PureIngots from '@/public/assets/img/products/pure-ingot.webp';

export default function PureAluminumIngot(): React.JSX.Element {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: t('products.pure-aluminum-ingot.title'),
    description: t('products.pure-aluminum-ingot.content.description'),
    image: `${process.env.NEXT_PUBLIC_APP_URL}/assets/img/products/pure-ingot.webp`,
    url: `${process.env.NEXT_PUBLIC_APP_URL}${language === 'tr' ? '' : `/${language}`}/products/pure-aluminum-ingot`,
    brand: {
      '@type': 'Brand',
      name: 'Kayalar Alüminyum',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Kayalar Alüminyum',
    },
    category: t('products.pure-aluminum-ingot.title'),
    material: t('products.pure-aluminum-ingot.meta.material'),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: t('products.pure-aluminum-ingot.meta.production-standards.title'),
        value: t(
          'products.pure-aluminum-ingot.meta.production-standards.description',
        ),
      },
      {
        '@type': 'PropertyValue',
        name: t('products.pure-aluminum-ingot.meta.delivery-form.title'),
        value: t('products.pure-aluminum-ingot.meta.delivery-form.description'),
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>
      <Meta
        title={t('products.pure-aluminum-ingot.meta.title')}
        description={t('products.pure-aluminum-ingot.meta.description')}
      />
      <Navbar />
      <main className="font-theme m-0 flex flex-col items-start justify-start gap-0 p-0">
        <section className="m-0 flex w-full flex-col items-center justify-start bg-stone-950 py-20 pt-30">
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
          <section className="max-w-theme flex w-full flex-wrap items-start justify-start gap-14 px-5 md:flex-nowrap lg:flex-nowrap">
            <img
              src={PureIngots.src}
              alt="Pure Aluminum Ingots"
              className="aspect-square w-full rounded-xl border border-stone-700 bg-stone-900 object-cover object-center md:max-w-100 lg:max-w-100"
            />
            <section className="grid h-full w-full grid-cols-1 place-content-between place-items-start gap-5">
              <section className="flex w-full flex-col items-start justify-start gap-10">
                <h1 className="flex flex-col items-start justify-start gap-1 text-xl font-bold text-white lg:text-4xl">
                  <span
                    style={{
                      letterSpacing: '0.2em',
                    }}
                    className="text-primary flex flex-row items-center justify-center gap-2 text-xs font-normal"
                  >
                    <span className="bg-primary h-px w-5" />
                    {t('misc.product-mini')}
                  </span>
                  {t('products.pure-aluminum-ingot.title')}
                </h1>
                <p className="text-sm text-zinc-400">
                  {t('products.pure-aluminum-ingot.content.description')}
                </p>
              </section>
              <ul className="my-2 grid w-full grid-cols-2 place-content-stretch place-items-start gap-5 lg:grid-cols-4">
                <li className="grid h-full w-full grid-cols-1 place-content-start place-items-start gap-2 border border-stone-800 bg-stone-900/50 p-5">
                  <h3 className="text-xs text-neutral-500">
                    {t('products.pure-aluminum-ingot.content.specs.0.title')}
                  </h3>
                  <p className="text-sm font-bold text-neutral-200">
                    {t(
                      'products.pure-aluminum-ingot.content.specs.0.description',
                    )}
                  </p>
                </li>
                <li className="grid h-full w-full grid-cols-1 place-content-start place-items-start gap-2 border border-stone-800 bg-stone-900/50 p-5">
                  <h3 className="text-xs text-neutral-500">
                    {t('products.pure-aluminum-ingot.content.specs.1.title')}
                  </h3>
                  <p className="text-sm font-bold text-neutral-200">
                    {t(
                      'products.pure-aluminum-ingot.content.specs.1.description',
                    )}
                  </p>
                </li>
                <li className="grid h-full w-full grid-cols-1 place-content-start place-items-start gap-2 border border-stone-800 bg-stone-900/50 p-5">
                  <h3 className="text-xs text-neutral-500">
                    {t('products.pure-aluminum-ingot.content.specs.2.title')}
                  </h3>
                  <p className="text-sm font-bold text-neutral-200">
                    {t(
                      'products.pure-aluminum-ingot.content.specs.2.description',
                    )}
                  </p>
                </li>
                <li className="grid h-full w-full grid-cols-1 place-content-start place-items-start gap-2 border border-stone-800 bg-stone-900/50 p-5">
                  <h3 className="text-xs text-neutral-500">
                    {t('products.pure-aluminum-ingot.content.specs.3.title')}
                  </h3>
                  <p className="text-sm font-bold text-neutral-200">
                    {t(
                      'products.pure-aluminum-ingot.content.specs.3.description',
                    )}
                  </p>
                </li>
              </ul>
              <ul className="m-0 flex flex-wrap items-center justify-start gap-5 p-0">
                <li className="m-0 flex p-0">
                  <RequestQuoteButton text={'buttons.request-quote'} />
                </li>
                <li className="m-0 flex p-0">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/assets/pdf/product-tables/pure_ingot_table_kayalar.pdf"
                    style={{
                      letterSpacing: '0.1em',
                    }}
                    className="lg:text-md border border-neutral-300 bg-transparent px-5 py-3 text-sm font-bold text-neutral-300 uppercase transition-all duration-200 hover:bg-white hover:text-black"
                  >
                    {t('buttons.download-technical-sheet')}
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section className="font-theme flex w-full flex-col items-center justify-start border-y border-y-stone-800 bg-stone-900/50 py-20">
          <section className="max-w-theme flex w-full flex-col items-center justify-start gap-5 px-5">
            <section className="w-full overflow-auto">
              <PureIngotTable />
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
