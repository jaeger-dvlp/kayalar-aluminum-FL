import React from 'react';
import { useTranslation } from 'next-i18next';

function Explanation() {
  const { t } = useTranslation();
  return (
    <section
      style={{
        backgroundImage: 'linear-gradient(135deg, #5E3800 0%, #CB7B02 100%)',
      }}
      className="flex w-full items-center justify-center py-16 font-theme"
    >
      <section className="flex w-full max-w-theme flex-col items-start justify-center gap-4 border-l-2 border-white p-5 py-4 pl-10 text-left">
        <h2 className="text-2xl font-semibold text-white lg:text-3xl">
          {t('home.explanation.title')}
        </h2>
        <p className="text-sm font-light text-white lg:text-lg">
          {t('home.explanation.description')}
        </p>
      </section>
    </section>
  );
}

export default Explanation;
