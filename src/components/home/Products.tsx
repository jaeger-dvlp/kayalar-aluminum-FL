import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

import AlloyAluminumIngot from '@/public/assets/img/products/alloy-ingots.webp';
import PureAluminumIngot from '@/public/assets/img/products/pure-ingot.webp';
import ScrapPurchasing from '@/public/assets/img/products/scrap-wheel.webp';

export type ProductProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const products: ProductProps[] = [
  {
    slug: 'alloy-aluminum-ingot',
    title: 'products.alloy-aluminum-ingot.title',
    description: 'products.alloy-aluminum-ingot.description',
    image: AlloyAluminumIngot.src,
  },
  {
    slug: 'pure-aluminum-ingot',
    title: 'products.pure-aluminum-ingot.title',
    description: 'products.pure-aluminum-ingot.description',
    image: PureAluminumIngot.src,
  },
  {
    slug: 'scrap-purchasing',
    title: 'products.scrap-purchasing.title',
    description: 'products.scrap-purchasing.description',
    image: ScrapPurchasing.src,
  },
];

function Product({ slug, title, description, image }: ProductProps) {
  const { t } = useTranslation();
  return (
    <li className="font-poppins relative m-0 flex h-full w-full items-center justify-center border border-stone-800 p-0 shadow">
      <Link
        href={`/products/${slug}`}
        className="group relative m-0 flex h-full w-full items-center justify-center overflow-hidden p-0"
      >
        <section className="relative z-3 flex h-full w-full flex-col items-start justify-end gap-2 bg-linear-to-t from-black to-black/60 p-5 pt-[60%]">
          <h3 className="relative text-lg font-bold text-zinc-100 lg:text-2xl">
            {t(title)}
          </h3>
          <p className="font-theme text-xs text-zinc-300">{t(description)}</p>
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-primary mt-5 flex items-center justify-start gap-1 text-xs font-normal uppercase"
          >
            <span>{t('buttons.learn-more')}</span>
            <BsChevronRight className="transition-all duration-150 group-hover:ml-2" />
          </span>
        </section>
        <img
          src={image}
          alt={t(title)}
          className="absolute top-0 left-0 z-1 h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-105"
        />
      </Link>
    </li>
  );
}

function Products() {
  const { t } = useTranslation();
  return (
    <section
      id="products"
      className="font-theme flex w-full items-center justify-center border-y border-y-stone-800 bg-stone-900 py-20"
    >
      <section
        data-aos="fade-in"
        className="max-w-theme flex w-full flex-col items-start justify-start gap-10 px-5"
      >
        <h2 className="flex flex-col items-start justify-start gap-2">
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-primary text-xs font-semibold"
          >
            <span className="flex flex-row items-center justify-center gap-2">
              <span className="bg-primary h-px w-5" />
              {t('products.heading.mini')}
            </span>
          </span>
          <span className="text-2xl font-black text-white lg:text-4xl">
            {t('products.heading.title')}
          </span>
        </h2>
        <ul className="grid w-full list-none grid-cols-1 place-content-stretch place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Product key={product.slug} {...product} />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Products;
