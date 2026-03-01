/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

type Props = {
  title: string;
  path: { name: string; href: string }[];
};

function BreadCrumbs({ path }: Props) {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  return (
    <section className="font-theme relative flex w-full items-center justify-center overflow-hidden bg-transparent">
      <section className="z-3 flex h-full w-full items-center justify-center pt-0 pb-5">
        <section className="max-w-theme flex w-full flex-col items-start justify-center gap-5 p-5 text-zinc-400 lg:justify-between">
          <ul
            style={{
              letterSpacing: '0.2em',
            }}
            className="m-0 flex w-full flex-wrap items-center justify-start gap-2 p-0 text-xs font-bold"
          >
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
                        className={` ${index === path.length - 1 && 'text-white'} uppercase transition-all duration-150 hover:text-white`}
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
        </section>
      </section>
    </section>
  );
}

export default BreadCrumbs;
