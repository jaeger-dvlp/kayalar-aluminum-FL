import React from 'react';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Banner from '@/components/home/Banner';
import Explanation from '@/components/home/Explanation';
import Products from '@/components/home/Products';
import Quality from '@/components/home/Quality';
import Offer from '@/components/home/Offer';
import Quote from '@/components/home/Quote';

export default function Home(): JSX.Element {
  return (
    <>
      <Meta title=".." description=".." />
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
