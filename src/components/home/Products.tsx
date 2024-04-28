import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import AlloyAluminumIngot from '@/public/assets/img/packed-ingots.webp';
import PureAluminumIngot from '@/public/assets/img/ingots.webp';
import ScrapPurchasing from '@/public/assets/img/scraps.webp';

type ProductProps = {
  product: string;
  image: string;
};

function Product({ product, image }: ProductProps) {
  const { t } = useTranslation();
  return (
    <li className="flex w-full flex-wrap items-center justify-start gap-10 lg:flex-nowrap lg:justify-between">
      <section className="order-2 flex w-full flex-col items-start justify-center gap-5 lg:order-1 lg:max-w-[550px]">
        <h3 className="text-2xl font-semibold lg:text-3xl">
          {t(`products.${product}.title`)}
        </h3>
        <p className="text-sm lg:text-base">
          {t(`products.${product}.description`)}
        </p>
        <Link
          className="ls-navbar border-2 border-[#ED8E01] py-1.5 px-10 text-sm text-white transition-all duration-200 hover:bg-white/20 lg:text-base"
          href={`/products/${product}`}
        >
          {t('read-more')}
        </Link>
      </section>
      <section className="relative order-1 w-full lg:order-2 lg:max-w-[45%]">
        <svg
          viewBox="0 0 131 131"
          className="absolute right-0 top-0 aspect-square w-[15%] scale-125"
        >
          <path d="M131 131L0 0H131V131Z" fill="#CB7A01" />
        </svg>
        <img
          src={image}
          alt={t(`products.${product}.title`)}
          className="aspect-video w-full object-cover"
        />
      </section>
    </li>
  );
}

function ProductSeperator() {
  return (
    <div className="flex w-full items-center justify-center gap-4 ">
      <div className="aspect-square h-1 w-1 bg-[#ED8E01]" />
      <div className="h-px w-full max-w-[100px] bg-[#6F6F6D]" />
      <div className="aspect-square h-1 w-1 bg-[#ED8E01]" />
      <div className="h-px w-full max-w-[100px] bg-[#6F6F6D]" />
      <div className="aspect-square h-1 w-1 bg-[#ED8E01]" />
    </div>
  );
}

function Products() {
  const { t } = useTranslation();
  return (
    <section
      id="products"
      className="m-0 flex w-full items-center justify-center bg-[#1B1A18] p-0 font-theme"
    >
      <section className="flex w-full max-w-theme flex-col items-center justify-start gap-24 p-5 py-24">
        <h2
          style={{
            letterSpacing: '10px',
          }}
          className="border-b border-b-[#CB7A01] px-3 pb-5 text-center text-4xl font-light text-[#E6DFD2] lg:text-5xl"
        >
          {t('products.heading')}
        </h2>
        <ul className="m-0 flex w-full max-w-xl flex-col items-center justify-start gap-24 p-0 text-left font-theme text-[#BEB7AB] lg:max-w-full">
          <Product
            product="alloy-aluminum-ingot"
            image={AlloyAluminumIngot.src}
          />
          <ProductSeperator />
          <Product
            product="pure-aluminum-ingot"
            image={PureAluminumIngot.src}
          />
          <ProductSeperator />
          <Product product="scrap-purchasing" image={ScrapPurchasing.src} />
        </ul>
      </section>
    </section>
  );
}

export default Products;
