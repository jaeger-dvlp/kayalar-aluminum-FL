import React from 'react';
import Meta from '@/components/layout/Meta';
import Offer from '@/components/home/Offer';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BreadCrumbs from '@/components/layout/BreadCrumbs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import IngotsBanner from '@/public/assets/img/ingots-banner.webp';

import Scraps from '@/public/assets/img/scraps.webp';
import Scraps2 from '@/public/assets/img/scraps-2.webp';
import Scraps3 from '@/public/assets/img/scraps-3.webp';
import Scraps4 from '@/public/assets/img/scraps-4.webp';
import Scraps5 from '@/public/assets/img/scraps-5.webp';
import Scraps6 from '@/public/assets/img/scraps-6.webp';

export default function Home(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('products.scrap-purchasing.meta.title')}
        description={t('products.scrap-purchasing.meta.description')}
      />
      <Navbar />
      <main className="m-0 flex min-h-screen flex-col items-center justify-start gap-0 p-0">
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
        <section className="flex w-full flex-col items-center justify-start py-10 font-theme">
          <section className="flex w-full max-w-theme flex-col items-center justify-start gap-5 p-5 ">
            <section className="flex w-full flex-col items-start justify-start gap-5 text-left text-zinc-200">
              <h2 className="text-xl font-medium lg:text-2xl">
                {t('products.scrap-purchasing.content.title')}
              </h2>
              <p className="whitespace-pre-wrap text-sm text-zinc-300">
                {t('products.scrap-purchasing.content.description')}
              </p>
            </section>
            <section className="my-10 grid w-full grid-cols-1 place-content-center place-items-start gap-14 overflow-auto md:grid-cols-2 lg:grid-cols-3">
              <img
                alt="Alüminyum Hurda"
                src={Scraps.src}
                className="aspect-video w-full object-cover shadow-xl shadow-black/50"
              />
              <img
                alt="Alüminyum Hurda"
                src={Scraps4.src}
                className="aspect-video w-full object-cover shadow-xl shadow-black/50"
              />
              <img
                alt="Alüminyum Hurda"
                src={Scraps5.src}
                className="aspect-video w-full object-cover shadow-xl shadow-black/50"
              />
              <img
                alt="Alüminyum Hurda"
                src={Scraps2.src}
                className="aspect-video w-full object-cover shadow-xl shadow-black/50"
              />
              <img
                alt="Alüminyum Hurda"
                src={Scraps3.src}
                className="aspect-video w-full object-cover shadow-xl shadow-black/50"
              />
              <img
                alt="Alüminyum Hurda"
                src={Scraps6.src}
                className="aspect-video w-full object-cover shadow-xl shadow-black/50"
              />
            </section>
          </section>
        </section>
        <section className="relative flex min-h-[500px] w-full items-center justify-center bg-black">
          <img
            alt="Kayalar Alüminyum"
            src={IngotsBanner.src}
            className="absolute left-0 top-0 z-[1] h-full w-full object-cover object-center"
          />
          <section className="absolute top-0 left-0 z-[2] flex h-full w-full flex-col items-center justify-center gap-5 bg-black/70 p-5 text-center">
            <svg className="-mt-1" width="24" height="23">
              <path
                d="M5.25413 0.767996H8.61413L5.54213 14.304C7.36613 14.784 8.61413 16.32 8.61413 18.24C8.61413 20.544 6.88613 22.272 4.67813 22.272C2.27813 22.272 0.646125 20.448 0.646125 18.24C0.646125 16.896 0.838125 15.936 1.51013 13.824L5.25413 0.767996ZM20.2301 14.304C22.0541 14.784 23.3021 16.32 23.3021 18.24C23.3021 20.544 21.5741 22.272 19.3661 22.272C16.9661 22.272 15.3341 20.448 15.3341 18.24C15.3341 16.896 15.5261 15.936 16.1981 13.824L19.9421 0.767996H23.3021L20.2301 14.304Z"
                fill="#CB7A01"
              />
            </svg>
            <p className="-mt-1 font-theme text-xl font-light text-white lg:text-2xl">
              {t('home.quote.title')}
            </p>
          </section>
        </section>
        <Offer />
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
