import { useTranslation } from 'next-i18next';
import React from 'react';

import ScrapsAlloy from '@/public/assets/img/products/scrap-alloy.webp';
import ScrapsEngine from '@/public/assets/img/products/scrap-engine.webp';
import ScrapsRadiator from '@/public/assets/img/products/scrap-radiator.webp';
import ScrapsShaving from '@/public/assets/img/products/scrap-shaving.webp';
import ScrapsSlag from '@/public/assets/img/products/scrap-slag.webp';
import ScrapsWheel from '@/public/assets/img/products/scrap-wheel.webp';

const allScraps = [
  {
    id: 0,
    slug: 'wheel',
    image: ScrapsWheel.src,
  },
  {
    id: 1,

    slug: 'engine',
    image: ScrapsEngine.src,
  },
  {
    id: 2,
    slug: 'shaving',
    image: ScrapsShaving.src,
  },
  {
    id: 3,
    slug: 'slag',
    image: ScrapsSlag.src,
  },
  {
    id: 4,
    slug: 'radiator',
    image: ScrapsRadiator.src,
  },
  {
    id: 5,
    slug: 'alloy',
    image: ScrapsAlloy.src,
  },
];

function Scraps() {
  const { t } = useTranslation();
  return (
    <section className="font-theme flex w-full items-center justify-center border-y border-stone-800 bg-stone-950 py-20">
      <section className="max-w-theme flex w-full flex-col items-start justify-start gap-10 px-5">
        <h2 className="flex flex-col items-start justify-start gap-2">
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-primary text-xs font-semibold"
          >
            <span className="flex flex-row items-center justify-center gap-2">
              <span className="bg-primary h-px w-5" />
              {t('products.scrap-purchasing.content.heading.mini')}
            </span>
          </span>
          <span className="text-2xl font-black text-white lg:text-4xl">
            {t('products.scrap-purchasing.content.heading.title')}
          </span>
        </h2>
        <ul className="grid w-full list-none grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {allScraps.map((scrap) => (
            <li
              key={`scrap-${scrap.slug}`}
              style={{
                backgroundImage: `url(${scrap.image})`,
              }}
              className="group relative flex aspect-video min-h-50 w-full flex-col items-start justify-end border border-stone-800 bg-neutral-900 bg-cover bg-center transition-all duration-200 hover:scale-105"
            >
              <section className="flex h-full w-full flex-col items-start justify-end gap-1 bg-linear-to-t from-black to-black/30 p-3 transition-all duration-200 group-hover:to-black/20">
                <h3 className="text-md z-2 font-normal text-neutral-300 uppercase lg:text-lg">
                  {t(`products.scrap-purchasing.scraps.${scrap.slug}.title`)}
                </h3>
                <p className="text-xs text-neutral-400">
                  {t(
                    `products.scrap-purchasing.scraps.${scrap.slug}.short-desc`,
                  )}
                </p>
              </section>
            </li>
          ))}
          <li className="col-span-full flex items-start justify-center">
            <p className="text-sm text-neutral-400">{t('misc.more')}</p>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Scraps;
