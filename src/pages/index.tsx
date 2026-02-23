import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import Hero from '@/components/home/Hero';
import Offer from '@/components/home/Offer';
import Production from '@/components/home/Production';
import Products from '@/components/home/Products';
import Quality from '@/components/home/Quality';
import Quote from '@/components/home/Quote';
import Footer from '@/components/layout/Footer';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Counts from '@/components/misc/Counts';

export default function Home(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('home.meta.title')}
        description={t('home.meta.description')}
      />
      <Navbar />
      <main className="m-0 flex flex-col items-start justify-center gap-0 p-0">
        <Hero />
        <Counts />
        <Products />
        <Quality />
        <Production />
        <Offer />
        <Quote />
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
