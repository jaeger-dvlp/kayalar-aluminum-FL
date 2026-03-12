/* eslint-disable react/no-array-index-key */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { BsDownload, BsXLg } from 'react-icons/bs';
import { FaMicroscope } from 'react-icons/fa';
import { HiCubeTransparent } from 'react-icons/hi';
import { IoShieldCheckmark } from 'react-icons/io5';

import Production from '@/components/home/Production';
import BreadCrumbs from '@/components/layout/BreadCrumbs';
import Footer from '@/components/layout/Footer';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import CTA from '@/components/misc/CTA';
import { RequestQuoteButton } from '@/components/misc/RequestQuote.button';
import FurnaceBanner from '@/public/assets/img/furnace-banner.webp';

const PdfPath = '/assets/img/certificates/';

type Certificate = {
  slug: string;
  name: { tr: string; en: string };
  pdf: string;
  preview: string;
};

const allCertificates: Certificate[] = [
  {
    slug: 'iso-9001-2015',
    name: {
      tr: 'ISO 9001 Kalite Yönetim Sistemi Sertifikası',
      en: 'ISO 9001 Quality Management System Certificate',
    },
    pdf: 'iso9001-2015.pdf',
    preview: 'iso9001-2015-preview.webp',
  },
  {
    slug: 'environmental-permit-license-certificate',
    name: {
      tr: 'Çevresel İzin Lisans Sertifikası',
      en: 'Environmental Permit License Certificate',
    },
    pdf: 'environmental-permit-license-certificate.pdf',
    preview: 'environmental-permit-license-certificate-preview.webp',
  },
  {
    slug: 'road-transport-vehicle-waste-compliance-certificate',
    name: {
      tr: 'TSE - Karayolu le Atık Taşıma Aracı Uygunluk Sertifikası',
      en: 'TSE - Road Transport Vehicle Waste Compliance Certificate',
    },
    pdf: 'road-transport-vehicle-waste-compliance-certificate.pdf',
    preview: 'road-transport-vehicle-waste-compliance-certificate-preview.webp',
  },
  {
    slug: 'zero-waste-certificate',
    name: {
      tr: 'Sıfır Atık Belgesi',
      en: 'Zero Waste Certificate',
    },
    pdf: 'zero-waste-certificate.pdf',
    preview: 'zero-waste-certificate-preview.webp',
  },
];

export function CertificateViewer({
  certificate = null,
  setCertificate,
}: {
  certificate: Certificate | null;
  setCertificate: React.Dispatch<React.SetStateAction<Certificate | null>>;
}): React.ReactNode {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (certificate) {
      setIsVisible(true);
    }
    return () => {
      setIsVisible(false);
    };
  }, [certificate]);

  React.useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setCertificate(null);
    }
  }, [isVisible, setCertificate]);

  return (
    <div
      onClick={() => setIsVisible(false)}
      className={`${isVisible ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'} font-theme fixed top-0 left-0 z-99999999 flex h-full w-full items-center justify-center overflow-hidden bg-black/80 p-5 backdrop-blur-xs transition-all duration-500`}
    >
      {certificate && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-theme font-theme flex flex-col items-center justify-center p-5 py-10"
        >
          <span className="mb-5 text-center text-2xl font-bold text-white">
            {certificate.name[language]}
          </span>
          <img
            alt={certificate.name[language]}
            src={`${PdfPath}${certificate.preview}`}
            className="h-fit w-full max-w-100 object-contain object-center shadow-xl shadow-black/50"
          />
          <div className="flex w-full flex-wrap items-center justify-center gap-2 py-5">
            <button
              onClick={() => setIsVisible(false)}
              className="bg-primary border-primary lg:text-md flex items-center justify-start gap-2 border px-5 py-3 text-sm font-bold text-black uppercase transition-all duration-200 hover:bg-white"
            >
              <BsXLg className="h-4 w-4" />
              <span>{t('buttons.close')}</span>
            </button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${PdfPath}${certificate.pdf}`}
              className="bg-primary border-primary lg:text-md flex items-center justify-start gap-2 border px-5 py-3 text-sm font-bold text-black uppercase transition-all duration-200 hover:bg-white"
            >
              <BsDownload className="h-4 w-4" />
              <span>{t('buttons.download')}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home(): React.JSX.Element {
  const [activeCertificate, setActiveCertificate] =
    React.useState<Certificate | null>(null);
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <>
      <Meta
        title={t('quality.meta.title')}
        description={t('quality.meta.description')}
      />
      <Navbar />
      <CertificateViewer
        certificate={activeCertificate}
        setCertificate={setActiveCertificate}
      />
      <main className="font-theme m-0 flex flex-col items-start justify-start gap-0 p-0">
        <section
          style={{
            backgroundImage: `url(${FurnaceBanner.src})`,
          }}
          className="relative grid min-h-[70vh] w-full grid-cols-1 place-content-stretch place-items-stretch overflow-hidden border-y border-y-stone-800 bg-stone-950 bg-cover bg-center"
        >
          <section className="flex h-full w-full flex-col items-center justify-center bg-black/80 py-20">
            <BreadCrumbs
              title="products.scrap-purchasing.title"
              path={[
                {
                  name: 'quality.title',
                  href: '/quality',
                },
              ]}
            />
            <section className="max-w-theme flex w-full flex-col items-start justify-start gap-5 px-5">
              <h2 className="flex max-w-lg flex-col items-start justify-start gap-1 text-3xl font-extrabold text-white italic lg:text-5xl">
                {t('quality.content.title')}
              </h2>
              <p className="max-w-xl text-xs text-neutral-400 lg:text-lg">
                {t('quality.content.description')}
              </p>
              <section className="flex w-fit flex-wrap items-start justify-start gap-5">
                <RequestQuoteButton />
              </section>
            </section>
          </section>
        </section>
        <section className="font-theme relative flex w-full items-start justify-center border-y border-y-stone-800 bg-stone-900 bg-cover bg-center py-20">
          <section className="max-w-theme z-2 grid w-full grid-cols-1 place-content-center place-items-start gap-10 px-5">
            <section className="flex w-full flex-col items-start justify-center gap-8">
              <h2 className="flex flex-col items-start justify-start gap-2">
                <span
                  style={{
                    letterSpacing: '0.2em',
                  }}
                  className="text-primary text-xs font-semibold"
                >
                  <span className="flex flex-row items-center justify-center gap-2">
                    <span className="bg-primary h-px w-5" />
                    {t('quality.content.analysis.mini')}
                  </span>
                </span>
                <span className="text-2xl font-black text-white uppercase lg:text-4xl">
                  {t('quality.content.analysis.title')}
                </span>
              </h2>
              <p className="max-w-2xl text-sm whitespace-pre-wrap text-neutral-400">
                {t('quality.content.analysis.description')}
              </p>
              <ul className="m-0 grid w-full grid-cols-1 place-content-stretch place-items-start gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
                <li className="flex h-full w-full flex-col items-start justify-start gap-5 rounded-xl bg-stone-950/50 p-10">
                  <FaMicroscope className="text-primary h-6 w-6" />
                  <h3 className="text-sm font-bold text-white lg:text-lg">
                    {t('quality.content.analysis.list.0.title')}
                  </h3>
                  <p className="text-xs text-neutral-300">
                    {t('quality.content.analysis.list.0.description')}
                  </p>
                </li>
                <li className="flex h-full w-full flex-col items-start justify-start gap-5 rounded-xl bg-stone-950/50 p-10">
                  <HiCubeTransparent className="text-primary h-6 w-6" />
                  <h3 className="text-sm font-bold text-white lg:text-lg">
                    {t('quality.content.analysis.list.1.title')}
                  </h3>
                  <p className="text-xs text-neutral-300">
                    {t('quality.content.analysis.list.1.description')}
                  </p>
                </li>
                <li className="flex h-full w-full flex-col items-start justify-start gap-5 rounded-xl bg-stone-950/50 p-10">
                  <IoShieldCheckmark className="text-primary h-6 w-6" />
                  <h3 className="text-sm font-bold text-white lg:text-lg">
                    {t('quality.content.analysis.list.2.title')}
                  </h3>
                  <p className="text-xs text-neutral-300">
                    {t('quality.content.analysis.list.2.description')}
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section
          id="certificates"
          className="font-theme relative flex w-full items-start justify-center border-y border-y-stone-800 bg-stone-950 bg-cover bg-center py-20"
        >
          <section className="max-w-theme z-2 grid w-full grid-cols-1 place-content-center place-items-start gap-10 px-5">
            <section className="flex w-full flex-col items-start justify-center gap-8">
              <h2 className="flex flex-col items-start justify-start gap-2">
                <span
                  style={{
                    letterSpacing: '0.2em',
                  }}
                  className="text-primary text-xs font-semibold"
                >
                  <span className="flex flex-row items-center justify-center gap-2">
                    <span className="bg-primary h-px w-5" />
                    {t('quality.content.certificates.mini')}
                  </span>
                </span>
                <span className="text-2xl font-black text-white uppercase lg:text-4xl">
                  {t('quality.content.certificates.title')}
                </span>
              </h2>
              <p className="max-w-2xl text-sm whitespace-pre-wrap text-neutral-400">
                {t('quality.content.certificates.description')}
              </p>
              <ul className="m-0 grid w-full grid-cols-2 place-content-start place-items-stretch gap-x-5 gap-y-5 p-0 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-10">
                {allCertificates.map((certificate, key) => (
                  <li
                    key={`certificate-${certificate.slug}-${key}`}
                    className="group grid h-full w-full grid-cols-1 place-content-stretch place-items-stretch transition-all duration-200 hover:scale-105"
                  >
                    <button
                      type="button"
                      className="grid h-full w-full grid-cols-1 place-content-stretch place-items-center gap-3 overflow-hidden rounded-md border border-stone-800 bg-stone-950 p-3"
                      onClick={() => setActiveCertificate(certificate)}
                    >
                      <img
                        alt={certificate.name[language]}
                        src={`${PdfPath}${certificate.preview}`}
                        className="h-full w-full rounded-sm object-contain object-center grayscale-50 transition-all duration-200 group-hover:grayscale-0"
                      />
                      <span className="h-full py-2 text-center text-xs font-normal text-neutral-200">
                        {certificate.name[language]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
        <Production />

        <CTA />
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
