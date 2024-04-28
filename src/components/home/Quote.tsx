import React from 'react';
import { useTranslation } from 'next-i18next';

import QuoteBanner from '@/public/assets/img/quote-banner.webp';

function Quote() {
  const { t } = useTranslation();
  return (
    <section className="relative flex min-h-[600px] w-full items-center justify-center bg-black">
      <img
        alt="Kayalar Alüminyum"
        src={QuoteBanner.src}
        className="absolute left-0 top-0 z-[1] h-full w-full object-cover object-center"
      />
      <section className="absolute top-0 left-0 z-[2] flex h-full w-full flex-col items-center justify-center gap-5 bg-black/70 p-5 text-center">
        <svg className="-mt-1" width="24" height="23">
          <path
            d="M5.25413 0.767996H8.61413L5.54213 14.304C7.36613 14.784 8.61413 16.32 8.61413 18.24C8.61413 20.544 6.88613 22.272 4.67813 22.272C2.27813 22.272 0.646125 20.448 0.646125 18.24C0.646125 16.896 0.838125 15.936 1.51013 13.824L5.25413 0.767996ZM20.2301 14.304C22.0541 14.784 23.3021 16.32 23.3021 18.24C23.3021 20.544 21.5741 22.272 19.3661 22.272C16.9661 22.272 15.3341 20.448 15.3341 18.24C15.3341 16.896 15.5261 15.936 16.1981 13.824L19.9421 0.767996H23.3021L20.2301 14.304Z"
            fill="#CB7A01"
          />
        </svg>
        <p className="-mt-1 font-theme text-xl font-light text-white lg:text-2xl">
          {t('home.quote.title')}
        </p>
      </section>
    </section>
  );
}

export default Quote;
