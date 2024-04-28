import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CgMenuRight } from 'react-icons/cg';
import { useTranslation } from 'next-i18next';

import Logo from '@/public/assets/img/logo.webp';
import {
  NavbarLink,
  MobileMenuProps,
  NavbarClass,
} from '@/types/boilerplate.types';

const ClassNames: NavbarClass = {
  desktop: 'text-white font-normal text-sm ls-navbar font-theme',
  mobile: 'text-white font-normal text-sm ls-navbar font-theme',
};

function MobileMenu({ isActive, children }: MobileMenuProps): JSX.Element {
  const Router = useRouter();
  const {
    i18n: { language: lang },
  } = useTranslation();
  return (
    <div
      className={`${isActive ? 'translate-x-0' : 'translate-x-full'}
        fixed left-0 top-0 !z-[49] flex h-full w-full flex-col items-center justify-start bg-[#1B1A18] px-5 transition-all duration-500 lg:hidden`}
    >
      <ul className="flex h-full w-full flex-col items-center justify-center gap-10 overflow-y-auto py-[150px]">
        {children}
        <li>
          <Link
            className={`${ClassNames.desktop} group relative`}
            locale={lang === 'tr' ? 'en' : 'tr'}
            href={Router.asPath}
          >
            {lang === 'tr' ? 'ENG' : 'TR'}
            <span className="absolute left-[calc(50%_-_1.25px)] -bottom-1 h-px w-0 -translate-x-1/2 bg-white transition-all duration-150 group-hover:w-full" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function Navbar(): JSX.Element {
  const Router = useRouter();
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);
  const [scrolledDown, setScrolledDown] = React.useState<boolean>(false);

  const HeaderLinks: NavbarLink[] = [
    {
      id: 0,
      name: 'navbar.products',
      url: '/#products',
      classNames: ClassNames,
    },
    {
      id: 1,
      name: 'navbar.quality',
      url: '/quality',
      classNames: ClassNames,
    },
    {
      id: 2,
      name: 'navbar.about',
      url: '/about-us',
      classNames: ClassNames,
    },
    {
      id: 3,
      name: 'navbar.contact',
      url: '/contact',
      classNames: ClassNames,
    },
  ];

  const getDesktopElements = (): JSX.Element[] => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { desktop: className }, external }) => (
        <li key={`d-elm-${id}`}>
          {external ? (
            <a
              className={`${className} group relative`}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {t(name)}
              <span className="absolute left-[calc(50%_-_1.25px)] -bottom-1 h-px w-0 -translate-x-1/2 bg-white transition-all duration-150 group-hover:w-full" />
            </a>
          ) : (
            <Link className={`${className} group relative`} href={url}>
              {t(name)}
              <span className="absolute left-[calc(50%_-_1.25px)] -bottom-1 h-px w-0 -translate-x-1/2 bg-white transition-all duration-150 group-hover:w-full" />
            </Link>
          )}
        </li>
      )
    );

    return elements;
  };

  const getMobileElements = (): JSX.Element[] => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { mobile: className }, external }) => (
        <li key={`m-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {t(name)}
            </a>
          ) : (
            <Link className={className} href={url}>
              {t(name)}
            </Link>
          )}
        </li>
      )
    );

    return elements;
  };

  React.useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenu]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [Router]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
        ${
          scrolledDown
            ? 'bg-[#1B1A18]/80 shadow-black/40 backdrop-blur-md'
            : 'bg-transparent shadow-transparent'
        }
      fixed left-0 top-0 z-[50] flex w-full items-center justify-center font-theme shadow-2xl transition-all duration-300`}
      >
        <section className="flex w-full max-w-theme flex-wrap items-center justify-between gap-5 p-3">
          <Link href="/" className="relative z-[50]">
            <img
              alt="Logo"
              src={Logo.src}
              className="w-full max-w-[150px] object-contain p-0"
            />
          </Link>
          <nav className="hidden w-fit items-center justify-end gap-5 lg:flex">
            <ul className="flex w-fit items-center justify-end gap-12">
              {getDesktopElements()}
              <li>
                <Link
                  className={`${ClassNames.desktop} group relative`}
                  locale={lang === 'tr' ? 'en' : 'tr'}
                  href={Router.asPath}
                >
                  {lang === 'tr' ? 'ENG' : 'TR'}
                  <span className="absolute left-[calc(50%_-_1.25px)] -bottom-1 h-px w-0 -translate-x-1/2 bg-white transition-all duration-150 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="z-[100] flex max-w-fit items-center justify-center text-white lg:hidden"
          >
            <CgMenuRight
              className={`${
                mobileMenu ? ' rotate-180' : 'rotate-0'
              } h-8 w-8 text-center transition-all duration-500`}
            />
          </button>
        </section>
      </header>
      <MobileMenu isActive={mobileMenu}>{getMobileElements()}</MobileMenu>
    </>
  );
}
