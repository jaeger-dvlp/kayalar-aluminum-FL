import { useTranslation } from 'next-i18next';
import React from 'react';

function Explanation() {
  const { t } = useTranslation();
  return (
    <section className="font-theme flex w-full items-center justify-center py-16">
      <section className="max-w-theme flex w-full flex-col items-start justify-center gap-4 p-5 py-4 pl-10 text-left">
        <p className="text-sm font-light text-zinc-200 lg:text-base">
          {t('home.explanation.description')}
        </p>
      </section>
    </section>
  );
}

export default Explanation;
