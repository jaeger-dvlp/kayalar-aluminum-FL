import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import Banner from '@/components/home/Banner';
import Explanation from '@/components/home/Explanation';
import Offer from '@/components/home/Offer';
import Products from '@/components/home/Products';
import Quality from '@/components/home/Quality';
import Quote from '@/components/home/Quote';
import Footer from '@/components/layout/Footer';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';

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
        <Banner />
        <Explanation />
        <Products />
        <Quality />
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
