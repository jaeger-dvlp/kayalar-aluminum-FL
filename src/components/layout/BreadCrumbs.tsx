/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

import BreadCrumbBanner from '@/public/assets/img/breadcrumb-banner.webp';

type Props = {
  title: string;
  path: { name: string; href: string }[];
};

function BreadCrumbs({ title, path }: Props) {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  return (
    <section className="font-theme relative flex min-h-[45vh] w-full items-center justify-center border-b border-[#2f2d2a]">
      <img
        alt="Kayalar Alüminyum"
        src={BreadCrumbBanner.src}
        className="absolute top-0 left-0 z-[1] h-full w-full object-cover object-center"
      />
      <section className="absolute top-0 left-0 z-[2] flex h-full w-full items-center justify-center bg-black/70">
        <section className="max-w-theme flex w-full flex-col items-start justify-center gap-5 p-5 pt-10 text-[#BEB7AB] lg:justify-between">
          <ul className="m-0 flex w-full flex-wrap items-center justify-start gap-2 p-0 text-xs">
            <li>
              <Link
                href="/"
                locale={lang}
                className="uppercase transition-all duration-150 hover:text-white"
              >
                {t('breadcrumbs.homepage')}
              </Link>
            </li>
            {path &&
              path.map(({ name, href }, index) => (
                <React.Fragment key={`breadcrumb-${index}`}>
                  <BsChevronRight />
                  <li>
                    {href ? (
                      <Link
                        href={href}
                        locale={lang}
                        className={` ${index === path.length - 1 && 'text-zinc-300'} uppercase transition-all duration-150 hover:text-white`}
                      >
                        {t(name)}
                      </Link>
                    ) : (
                      t(name)
                    )}
                  </li>
                </React.Fragment>
              ))}
          </ul>
          <h2 className="text-3xl font-semibold lg:text-4xl">{t(title)}</h2>
        </section>
      </section>
    </section>
  );
}

export default BreadCrumbs;
