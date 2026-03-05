import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import ContactForm from '@/components/forms/Contact.Form';
import Footer from '@/components/layout/Footer';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('contact.meta.title')}
        description={t('contact.meta.description')}
      />
      <Navbar />
      <main className="font-theme m-0 flex flex-col items-start justify-start gap-0 p-0">
        <section className="flex h-full w-full flex-col items-center justify-center bg-stone-950 py-20 pt-30 backdrop-blur-xs">
          <section className="max-w-theme flex w-full flex-col items-start justify-start gap-5 px-5">
            <h2 className="flex flex-col items-start justify-start gap-1 text-3xl font-extrabold text-white lg:text-6xl">
              <span
                style={{
                  letterSpacing: '0.2em',
                }}
                className="text-primary flex flex-row items-center justify-center gap-2 text-xs font-normal"
              >
                <span className="bg-primary h-px w-5" />
                {t('contact.heading.mini')}
              </span>
              {t('contact.heading.title')}
            </h2>
            <p className="max-w-2xl text-sm text-neutral-400 lg:text-lg">
              {t('contact.content.description')}
            </p>
          </section>
        </section>
        <section className="flex w-full flex-col items-center justify-start border-y border-stone-700 bg-stone-900 px-0 py-20">
          <section className="max-w-theme grid h-full w-full grid-cols-6 place-content-stretch place-items-stretch gap-10 px-5">
            <section className="col-span-full m-0 flex h-full w-full p-0 lg:col-span-4">
              <ContactForm />
            </section>
            <section className="sticky top-24 col-span-full grid w-full grid-cols-1 place-content-stretch place-items-start gap-10 lg:col-span-2">
              <section className="flex h-full w-full flex-row items-start justify-start gap-5 rounded-md border border-stone-700 bg-stone-800 p-5">
                <span className="flex aspect-square items-center justify-center rounded-md border border-stone-700 bg-stone-900 p-3">
                  <FaLocationDot className="text-primary aspect-square h-6 w-6" />
                </span>
                <section className="flex flex-col items-start justify-start gap-2 pt-2.5">
                  <h3 className="text-md font-semibold text-zinc-200">
                    {t('forms.info.hq')}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    İkitelli Org. San. Bölg. Pik Dökümcüler San Sit. B5 Blok No:
                    13 İkitelli / İSTANBUL
                  </p>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/dir//Kayalar+Alüminyum,+B5+Blok+D:13,+34490+İkitelli+Osb%2FBaşakşehir/@41.0714386,28.6614804,14z"
                    className="text-primary mt-2 flex items-center justify-start gap-2 text-xs font-bold hover:underline"
                  >
                    <span>{t('forms.info.get-direction')}</span>{' '}
                    <BsArrowRight className="aspect-square h-3 w-3" />
                  </a>
                </section>
              </section>
              <section className="flex h-full w-full flex-row items-start justify-start gap-5 rounded-md border border-stone-700 bg-stone-800 p-5">
                <span className="flex aspect-square items-center justify-center rounded-md border border-stone-700 bg-stone-900 p-3">
                  <FaPhoneAlt className="text-primary aspect-square h-6 w-6" />
                </span>
                <section className="flex flex-col items-start justify-start gap-2 pt-2.5">
                  <h3 className="text-md font-semibold text-zinc-200">
                    {t('forms.info.phone')}
                  </h3>

                  <a
                    href="tel:+902124852428"
                    className="text-xs text-zinc-400 transition-all duration-200 hover:text-white hover:underline"
                  >
                    +90 (212) 485 24 28
                  </a>
                  <a
                    href="tel:+902124852429"
                    className="text-xs text-zinc-400 transition-all duration-200 hover:text-white hover:underline"
                  >
                    +90 (212) 485 24 29
                  </a>
                  <a
                    href="tel:+905325682232"
                    className="text-xs text-zinc-400 transition-all duration-200 hover:text-white hover:underline"
                  >
                    +90 (532) 568 22 32
                  </a>
                </section>
              </section>
              <section className="flex h-full w-full flex-row items-start justify-start gap-5 rounded-md border border-stone-700 bg-stone-800 p-5">
                <span className="flex aspect-square items-center justify-center rounded-md border border-stone-700 bg-stone-900 p-3">
                  <FaEnvelope className="text-primary aspect-square h-6 w-6" />
                </span>
                <section className="flex flex-col items-start justify-start gap-2 pt-2.5">
                  <h3 className="text-md font-semibold text-zinc-200">
                    {t('forms.info.email')}
                  </h3>

                  <a
                    href="mailto:info@kayalaraluminyum.com"
                    className="text-xs text-zinc-400 transition-all duration-200 hover:text-white hover:underline"
                  >
                    info@kayalaraluminyum.com
                  </a>
                </section>
              </section>
            </section>
          </section>
        </section>
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

export default Contact;
