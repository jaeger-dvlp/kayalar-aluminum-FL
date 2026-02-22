import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';

import Logo from '@/public/assets/img/logo.webp';
import type { FooterSocialLink } from '@/types/boilerplate.types';

function Footer(): React.JSX.Element {
  const { t } = useTranslation();

  const FooterSocialLinks: FooterSocialLink[] = [
    {
      id: 0,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/kayalar-aluminum',
      icon: BsLinkedin,
    },
  ];

  const FooterLinks = [
    {
      id: 0,
      name: 'navbar.products',
      url: '/#products',
    },
    {
      id: 1,
      name: 'navbar.quality',
      url: '/quality',
    },
    {
      id: 2,
      name: 'navbar.about-us',
      url: '/about-us',
    },
    {
      id: 3,
      name: 'navbar.contact',
      url: '/contact',
    },
  ];

  const getSocialLinks = (): React.JSX.Element[] => {
    const elements = FooterSocialLinks.map(({ id, url, icon: Icon }) => (
      <li key={`fs-elm-${id}`}>
        <a href={url} target="_blank" rel="noreferrer">
          <Icon className="h-4 w-4 text-zinc-400 transition-all duration-150 hover:text-white" />
        </a>
      </li>
    ));

    return elements;
  };

  return (
    <footer className="font-theme m-0 flex w-full flex-col flex-wrap items-center justify-center gap-0 bg-[#171614] p-0">
      <section className="max-w-theme flex w-full flex-wrap justify-center gap-12 p-3 py-10 lg:justify-between">
        <Link href="/" className="relative">
          <img
            alt="Logo"
            src={Logo.src}
            className="w-full max-w-[150px] object-contain p-0"
          />
        </Link>
        <section className="flex w-full flex-col items-center justify-center gap-12 lg:w-auto lg:flex-row">
          {FooterLinks.map(({ id, name, url }) => (
            <Link
              href={url}
              key={`fl-elm-${id}`}
              className="ls-navbar group font-theme relative text-sm font-normal text-white"
            >
              {t(name)}
              <span className="absolute -bottom-1 left-[calc(50%_-_1.25px)] h-px w-0 -translate-x-1/2 bg-white transition-all duration-150 group-hover:w-full" />
            </Link>
          ))}
        </section>
        <ul className="flex w-full flex-wrap justify-center gap-5 lg:justify-end">
          {getSocialLinks()}
        </ul>
      </section>
      <section className="flex w-full items-center justify-center bg-[#202020] p-2 px-3 text-center">
        <p className="text-xs text-[#8B8B8B]">
          © Copyright 2024 - Kayalar Alüminyum Levha San. ve Tic. Ltd. Şti
        </p>
      </section>
    </footer>
  );
}

export default Footer;
