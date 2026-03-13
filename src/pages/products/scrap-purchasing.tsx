import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import BreadCrumbs from '@/components/layout/BreadCrumbs';
import Footer from '@/components/layout/Footer';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import CTA from '@/components/misc/CTA';
import { RequestQuoteButton } from '@/components/misc/RequestQuote.button';
import Scraps from '@/components/misc/Scraps';
import ScrapsWheel from '@/public/assets/img/products/scrap-wheel.webp';

export default function ScrapPurchasing(): React.JSX.Element {
  const { t } = useTranslation();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    sku: 'scrap-purchasing',
    name: t('products.scrap-purchasing.title'),
    description: t('products.scrap-purchasing.content.description'),
    brand: {
      '@type': 'Brand',
      name: 'Kayalar Alüminyum',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Kayalar Alüminyum',
    },
    category: t('products.scrap-purchasing.title'),
    material: t('products.scrap-purchasing.meta.material'),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: t('products.scrap-purchasing.meta.accepted-types.title'),
        value: t('products.scrap-purchasing.meta.accepted-types.description'),
      },
      {
        '@type': 'PropertyValue',
        name: t('products.scrap-purchasing.meta.process.title'),
        value: t('products.scrap-purchasing.meta.delivery-form.description'),
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
        title={t('products.scrap-purchasing.meta.title')}
        description={t('products.scrap-purchasing.meta.description')}
      />
      <Navbar />
      <main className="font-theme m-0 flex flex-col items-start justify-start gap-0 p-0">
        <section
          style={{
            backgroundImage: `url(${ScrapsWheel.src})`,
          }}
          className="relative grid min-h-[75vh] w-full grid-cols-1 place-content-stretch place-items-stretch overflow-hidden bg-cover bg-center"
        >
          <section className="flex h-full w-full flex-col items-center justify-center bg-black/80 py-20 backdrop-blur-xs">
            <BreadCrumbs
              title="products.scrap-purchasing.title"
              path={[
                { name: 'navbar.products', href: '/#products' },
                {
                  name: 'products.scrap-purchasing.title',
                  href: '/products/scrap-purchasing',
                },
              ]}
            />
            <section className="max-w-theme flex w-full flex-col items-start justify-start gap-5 px-5">
              <h1 className="flex flex-col items-start justify-start gap-1 text-2xl font-extrabold text-white lg:text-5xl">
                <span
                  style={{
                    letterSpacing: '0.2em',
                  }}
                  className="text-primary flex flex-row items-center justify-center gap-2 text-xs font-normal"
                >
                  <span className="bg-primary h-px w-5" />
                  {t('misc.product')}
                </span>
                {t('products.scrap-purchasing.title')}
              </h1>
              <p className="max-w-xl text-xs text-neutral-400 lg:text-sm">
                {t('products.scrap-purchasing.content.description')}
              </p>
              <section className="flex w-fit flex-wrap items-start justify-start gap-5">
                <RequestQuoteButton />
                <Link
                  href="/contact"
                  style={{
                    letterSpacing: '0.1em',
                  }}
                  className="lg:text-md border border-zinc-400 bg-black/10 px-5 py-3 text-sm font-normal text-zinc-300 uppercase transition-all duration-200 hover:bg-zinc-200/20"
                >
                  {t('buttons.contact')}
                </Link>
              </section>
            </section>
          </section>
        </section>
        <Scraps />
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
