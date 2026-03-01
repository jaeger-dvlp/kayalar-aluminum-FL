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
  return (
    <>
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
          className="relative grid min-h-[80vh] w-full grid-cols-1 place-content-stretch place-items-stretch overflow-hidden bg-cover bg-center"
        >
          <section className="flex h-full w-full flex-col items-center justify-center bg-black/80 py-20 backdrop-blur-xs">
            <BreadCrumbs
              title="products.alloy-aluminum-ingot.title"
              path={[
                { name: 'navbar.products', href: '/#products' },
                {
                  name: 'products.scrap-purchasing.title',
                  href: '/products/scrap-purchasing',
                },
              ]}
            />
            <section className="max-w-theme flex w-full flex-col items-start justify-start gap-5 px-5">
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
                {t('products.scrap-purchasing.title')}
              </h2>
              <p className="max-w-2xl text-sm text-neutral-400 lg:text-lg">
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
