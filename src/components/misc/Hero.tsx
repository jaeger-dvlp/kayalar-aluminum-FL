import React from 'react';

type Props = {
  title: string;
  description?: string;
};

function Hero({ title, description }: Props) {
  return (
    <section className="font-theme relative flex w-full items-center justify-center overflow-hidden bg-stone-950 py-30">
      <section
        data-aos="fade-in"
        className="max-w-theme z-3 flex w-full flex-col items-start justify-center gap-5 px-5 text-left"
      >
        <h2
          style={{
            letterSpacing: '0.2em',
          }}
          className="mt-10 flex flex-col items-start justify-start gap-1"
        >
          <span className="border-l-primary border-l pl-4 text-2xl font-medium text-white uppercase lg:text-4xl">
            {title}
          </span>
        </h2>
        {description && (
          <p className="max-w-xl text-sm text-zinc-200">{description}</p>
        )}
      </section>
      <div
        style={{
          boxShadow: '50px -50px 400px 200px var(--color-primary)',
        }}
        className="bg-primary absolute bottom-0 left-0 aspect-square w-[30%] -translate-[90%] translate-y-[90%] rounded-full opacity-20"
      />
    </section>
  );
}

Hero.defaultProps = {
  description: null,
};

export default Hero;
