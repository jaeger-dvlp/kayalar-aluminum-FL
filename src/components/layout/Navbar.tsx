import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { CiMenuFries } from 'react-icons/ci';

import Logo from '@/public/assets/img/logo.webp';
import type {
  MobileMenuProps,
  NavbarClass,
  NavbarLink,
} from '@/types/boilerplate.types';

import { RequestQuoteButton } from '../misc/RequestQuote.button';

const ClassNames: NavbarClass = {
  desktop:
    'text-zinc-300 transition-all duration-150 hover:text-white font-normal text-sm ls-navbar font-theme',
  mobile:
    'text-zinc-300 transition-all duration-150 hover:text-white font-normal text-sm ls-navbar font-theme',
};

const NavbarLinks: NavbarLink[] = [
  {
    id: 0,
    name: 'navbar.home',
    url: '/',
    classNames: ClassNames,
  },
  {
    id: 1,
    name: 'navbar.products',
    url: '/#products',
    classNames: ClassNames,
  },
  {
    id: 2,
    name: 'navbar.quality',
    url: '/quality',
    classNames: ClassNames,
  },
  {
    id: 3,
    name: 'navbar.about-us',
    url: '/about-us',
    classNames: ClassNames,
  },
  {
    id: 4,
    name: 'navbar.contact',
    url: '/contact',
    classNames: ClassNames,
  },
];

function MobileMenu({
  isActive,
  children,
}: MobileMenuProps): React.JSX.Element {
  const Router = useRouter();
  const {
    i18n: { language: lang },
  } = useTranslation();
  return (
    <div
      className={`${isActive ? 'translate-x-0' : 'translate-x-full'} fixed top-0 left-0 z-49! flex h-full w-full flex-col items-center justify-start bg-stone-950/80 px-5 backdrop-blur-md transition-all duration-500 lg:hidden`}
    >
      <ul className="mt-30 flex h-full w-full flex-col items-center justify-start gap-10 overflow-y-auto pt-10">
        {children}
        <li>
          <RequestQuoteButton text="buttons.request-quote" />
        </li>
        <li>
          <Link
            className={`${ClassNames.desktop} group relative`}
            locale={lang === 'tr' ? 'en' : 'tr'}
            href={Router.asPath}
          >
            {lang === 'tr' ? '🇹🇷' : '🇬🇧'}
            <span className="absolute -bottom-1 left-[calc(50%-1.25px)] h-px w-0 -translate-x-1/2 bg-white transition-all duration-150 group-hover:w-full" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

function DesktopElems(): React.JSX.Element[] {
  const { t } = useTranslation();
  const elements = NavbarLinks.map(
    ({ url, name, id, classNames: { desktop: className } }) => (
      <li key={`d-elm-${id}`}>
        <Link className={`${className} group relative`} href={url}>
          {t(name)}
          <span className="absolute -bottom-1 left-[calc(50%-1.25px)] h-px w-0 -translate-x-1/2 bg-white transition-all duration-150 group-hover:w-full" />
        </Link>
      </li>
    ),
  );

  return elements;
}

function MobileElements(): React.JSX.Element[] {
  const { t } = useTranslation();
  const elements = NavbarLinks.map(
    ({ url, name, id, classNames: { mobile: className } }) => (
      <li key={`m-elm-${id}`}>
        <Link className={className} href={url}>
          {t(name)}
        </Link>
      </li>
    ),
  );

  return elements;
}

export default function Navbar(): React.JSX.Element {
  const Router = useRouter();
  const {
    i18n: { language: lang },
  } = useTranslation();
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);
  const [scrolledDown, setScrolledDown] = React.useState<boolean>(false);

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
      if (window.scrollY > 50) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    setTimeout(handleScroll, 0);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        key="navbar"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: 'easeInOut',
        }}
        exit={{ opacity: 0, y: -80 }}
        className={` ${
          scrolledDown
            ? 'bg-stone-950/90 shadow-black/40 backdrop-blur-md'
            : 'bg-transparent shadow-transparent'
        } font-theme fixed top-0 left-0 z-50 flex w-full items-center justify-center py-1 shadow-2xl transition-colors! duration-300`}
      >
        <section className="max-w-theme flex w-full flex-wrap items-center justify-between gap-5 p-3 px-5">
          <Link href="/" className="relative z-50">
            <img
              alt="Logo"
              src={Logo.src}
              className="w-full max-w-35 object-contain p-0"
            />
          </Link>
          <nav className="hidden w-fit items-center justify-end gap-5 lg:flex">
            <ul className="flex w-fit items-center justify-end gap-8">
              <DesktopElems />
              <li>
                <RequestQuoteButton text="buttons.request-quote" />
              </li>
              <li>
                <Link
                  className={`${ClassNames.desktop} group relative text-lg!`}
                  locale={lang === 'tr' ? 'en' : 'tr'}
                  href={Router.asPath}
                >
                  {lang === 'tr' ? '🇹🇷' : '🇬🇧'}
                  <span className="absolute -bottom-1 left-[calc(50%-1.25px)] h-px w-0 -translate-x-1/2 bg-white transition-all duration-150 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="z-100 flex max-w-fit items-center justify-center text-white lg:hidden"
          >
            <CiMenuFries
              className={`${
                mobileMenu ? 'rotate-180' : 'rotate-0'
              } h-8 w-8 text-center transition-all duration-500`}
            />
          </button>
        </section>
      </motion.header>
      <MobileMenu isActive={mobileMenu}>
        <MobileElements />
      </MobileMenu>
    </>
  );
}
