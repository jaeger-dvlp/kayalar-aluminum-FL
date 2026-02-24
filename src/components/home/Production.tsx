import { useInView } from 'motion/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { FaRecycle } from 'react-icons/fa';
import { FaBoxTissue, FaCubesStacked, FaFire } from 'react-icons/fa6';
import { ImLab } from 'react-icons/im';

const productionSteps = [
  {
    id: 0,
    icon: FaRecycle,
    slug: 'home.production.steps.0',
  },
  {
    id: 1,
    icon: FaCubesStacked,
    slug: 'home.production.steps.1',
  },
  {
    id: 2,
    icon: FaFire,
    slug: 'home.production.steps.2',
  },
  {
    id: 3,
    icon: ImLab,
    slug: 'home.production.steps.3',
  },
  {
    id: 4,
    icon: FaBoxTissue,
    slug: 'home.production.steps.4',
  },
];

function Production() {
  const stepsSect = React.useRef(null);
  const isInView = useInView(stepsSect, { once: true });
  const [currentStep, setCurrentStep] = React.useState(-1);

  React.useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(
      () => {
        if (currentStep === productionSteps.length) {
          setCurrentStep(-1);
          return;
        }
        setCurrentStep((prev) => prev + 1);
      },
      currentStep === -1 ? 1000 : 2000,
    );
    return () => clearInterval(interval);
  }, [currentStep, isInView]);

  const { t } = useTranslation();
  return (
    <section
      id="production"
      className="font-theme flex w-full items-center justify-center border-y border-y-stone-800 bg-stone-900 py-20"
    >
      <section
        data-aos="fade-in"
        ref={stepsSect}
        className="max-w-theme flex w-full flex-col items-start justify-start gap-5 px-5"
      >
        <h2 className="flex flex-col items-start justify-start gap-2">
          <span
            style={{
              letterSpacing: '0.2em',
            }}
            className="text-primary text-xs font-semibold"
          >
            <span className="flex flex-row items-center justify-center gap-2">
              <span className="bg-primary h-px w-5" />
              {t('home.production.heading.mini')}
            </span>
          </span>
          <span className="text-2xl font-black text-white lg:text-4xl">
            {t('home.production.heading.title')}
          </span>
        </h2>
        <p className="font-theme max-w-xl text-sm text-zinc-400">
          {t('home.production.description')}
        </p>
        <ul className="relative mt-10 flex w-full list-none flex-col items-start justify-between gap-5 md:flex-row lg:flex-row lg:flex-nowrap">
          {productionSteps.map(({ id, icon: Icon }, key) => (
            <li
              key={`q-item-${id}`}
              className="relative z-3 m-0 flex w-full flex-col items-start justify-start gap-5 p-0 text-left md:items-center md:text-center lg:items-center lg:text-center"
            >
              <span
                className={`${key === productionSteps.length - 1 && 'flex! md:hidden! lg:hidden!'} absolute top-0 left-8 z-1 h-[120%] w-0.5 bg-zinc-700 md:top-8.5 md:left-1/2 md:h-0.5 md:w-[120%] lg:top-8.5 lg:left-1/2 lg:h-0.5 lg:w-[120%]`}
              >
                <span
                  className={`${(currentStep === id || currentStep > id) && 'w-full! duration-2000!'} bg-primary absolute top-0 left-0 hidden h-full w-0 transition-all duration-0 ease-linear md:flex lg:flex`}
                />
                <span
                  className={`${(currentStep === id || currentStep > id) && 'h-full! duration-2000!'} bg-primary absolute top-0 left-0 h-0 w-0.5 transition-all duration-0 ease-linear md:hidden lg:hidden`}
                />
              </span>
              <span className="z-2 m-0 flex bg-zinc-800 p-0">
                <span
                  className={` ${currentStep === id || currentStep > id ? 'border-primary text-primary shadow-primary/30 bg-primary/10' : 'border-zinc-700 bg-zinc-800 text-zinc-500 shadow-transparent'} aspect-square border-2 p-5 shadow-xl transition-all duration-500`}
                >
                  <Icon className="h-6 w-6 text-current transition-all duration-500" />
                </span>
              </span>
              <section className="flex flex-col items-start justify-start gap-2 py-5 pl-12 md:items-center md:pl-0 lg:items-center lg:pl-0">
                <h3
                  className={`${(currentStep === id || currentStep > id) && 'text-white!'} font-poppins text-sm font-semibold text-zinc-300 transition-colors duration-500 lg:text-lg`}
                >
                  {t(`home.production.steps.${id}.title`)}
                </h3>
                <p
                  className={`${(currentStep === id || currentStep > id) && 'text-zinc-400!'} max-w-50 text-xs text-zinc-500 transition-colors duration-500`}
                >
                  {t(`home.production.steps.${id}.description`)}
                </p>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Production;
