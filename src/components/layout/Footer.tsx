import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

import Logo from '@/public/assets/img/logo.webp';
import type { FooterSocialLink } from '@/types/boilerplate.types';

function Footer(): React.JSX.Element {
  const { t } = useTranslation();

  const FooterSocialLinks: FooterSocialLink[] = [
    {
      id: 0,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/kayalaral%C3%BCminyum',
      icon: BsLinkedin,
    },
    {
      id: 1,
      name: 'Instagram',
      url: 'https://www.instagram.com/kayalaraluminyum',
      icon: BsInstagram,
    },
  ];

  const manageConsent = () => {
    localStorage.removeItem('ntm-cookie-consent');
    window.location.reload();
  };

  return (
    <footer className="font-theme m-0 flex min-h-25 w-full flex-col flex-wrap items-center justify-center gap-0 border-y border-y-stone-800 bg-stone-950 p-0">
      <section className="max-w-theme flex h-full w-full items-center justify-center px-5 py-20">
        <ul className="grid w-full grid-cols-1 place-content-start gap-10 md:grid-cols-2 lg:grid-cols-5">
          <li className="inset-0 m-0 flex w-full flex-col items-start justify-start gap-5 p-0 lg:col-span-2">
            <Link
              href="/"
              className="m-0 flex w-fit flex-row items-start justify-start p-0 transition-all duration-200 hover:scale-105"
            >
              <img
                alt="Logo"
                src={Logo.src}
                className="w-full max-w-35 object-contain p-0"
              />
            </Link>
            <p className="text-xs whitespace-pre-wrap text-zinc-400">
              <span>{t('footer.content')}</span>
              <br />
              <span>Kayalar Alüminyum Levha San ve Tic. Ltd. Şti.</span>
            </p>
            <button
              className="text-xs text-zinc-400 hover:underline"
              type="button"
              onClick={manageConsent}
            >
              {t('policy.manage-consent')}
            </button>
            <ul className="flex flex-wrap items-center justify-start gap-4">
              {FooterSocialLinks.map(({ url, id, icon: Icon }) => (
                <li key={`footer-social-link-${id}`}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 transition-colors duration-200 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="inset-0 m-0 flex w-full flex-col gap-5 p-0">
            <h3 className="font-semibold text-white">
              {t('footer.quick-links')}
            </h3>
            <ul className="flex flex-col items-start justify-start gap-1">
              <li>
                <Link
                  href="/"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('navbar.about-us')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('navbar.products')}
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('navbar.quality')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('navbar.contact')}
                </Link>
              </li>
            </ul>
          </li>
          <li className="inset-0 m-0 flex w-full flex-col gap-5 p-0">
            <h3 className="font-semibold text-white">
              {t('footer.company.title')}
            </h3>
            <ul className="flex flex-col items-start justify-start gap-1">
              <li>
                <Link
                  href="/policy/kvkk"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.kvkk-policy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/privacy-policy"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.privacy-policy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/terms-of-service"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.terms-of-service')}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/explicit-consent"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.explicit-consent')}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy/cookie-policy"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {t('policy.cookie-policy')}
                </Link>
              </li>
            </ul>
          </li>
          <li className="inset-0 m-0 flex w-full flex-col gap-5 p-0">
            <h3 className="font-semibold text-white">
              {t('footer.contact-us')}
            </h3>
            <ul className="flex flex-col items-start justify-start gap-1">
              <li>
                <a
                  href="tel:+902124852428"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white hover:underline"
                >
                  +90 (212) 485 24 28
                </a>
              </li>
              <li>
                <a
                  href="tel:+902124852429"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white hover:underline"
                >
                  +90 (212) 485 24 29
                </a>
              </li>
              <li>
                <a
                  href="tel:+905325682232"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white hover:underline"
                >
                  +90 (532) 568 22 32
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kayalaraluminyum.com"
                  className="text-xs text-zinc-400 transition-colors duration-200 hover:text-white hover:underline"
                >
                  info@kayalaraluminyum.com
                </a>
              </li>
              <li>
                <p className="py-1 text-xs text-zinc-400">
                  İkitelli Org. San. Bölg. Pik Dökümcüler San Sit. B5 Blok No:
                  13 İkitelli / İstanbul
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="flex w-full flex-wrap items-center justify-center gap-4 bg-black p-2 text-center text-xs text-zinc-700">
        <span>Copyright © 2026</span>{' '}
        <span>Kayalar Alüminyum Levha San. ve Tic. Ltd. Şti.</span>
        <span>
          Designed by{' '}
          <a
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/of-kayalar/"
          >
            Ö. KAYALAR
          </a>
        </span>
      </section>
    </footer>
  );
}

export default Footer;
