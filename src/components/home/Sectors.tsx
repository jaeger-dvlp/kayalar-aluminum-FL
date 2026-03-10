import { useTranslation } from 'next-i18next';
import React from 'react';
import { BiSolidFridge, BiSolidZap } from 'react-icons/bi';
import { BsBuildingFill, BsCarFrontFill, BsThreeDots } from 'react-icons/bs';
import { GiMechanicalArm } from 'react-icons/gi';

import MoreIMG from '@/public/assets/img/products/scrap-wheel.webp';
import AutomotiveIMG from '@/public/assets/img/sectors/automotive.webp';
import ConstructionIMG from '@/public/assets/img/sectors/construction.webp';
import EnergyIMG from '@/public/assets/img/sectors/energy.webp';
import MachineryIMG from '@/public/assets/img/sectors/machinery.webp';
import WhiteGoodsIMG from '@/public/assets/img/sectors/white-goods.webp';

const allSectors = [
  {
    id: 0,
    icon: BsCarFrontFill,
    slug: 'automotive',
    image: AutomotiveIMG.src,
  },
  {
    id: 1,
    icon: BiSolidFridge,
    slug: 'white-goods',
    image: WhiteGoodsIMG.src,
  },
  {
    id: 2,
    icon: BsBuildingFill,
    slug: 'construction',
    image: ConstructionIMG.src,
  },
  {
    id: 3,
    icon: GiMechanicalArm,
    slug: 'machinery',
    image: MachineryIMG.src,
  },
  {
    id: 4,
    icon: BiSolidZap,
    slug: 'energy',
    image: EnergyIMG.src,
  },
  {
    id: 5,
    icon: BsThreeDots,
    slug: 'more',
    image: MoreIMG.src,
  },
];

function Sectors() {
  const { t } = useTranslation();
  return (
    <section className="font-theme flex w-full items-center justify-center border-y border-stone-800 bg-stone-950 py-20">
      <section
        data-aos="fade-in"
        className="max-w-theme flex w-full flex-col items-start justify-start gap-10 px-5"
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
              {t('home.sectors.heading.mini')}
            </span>
          </span>
          <span className="text-2xl font-black text-white lg:text-4xl">
            {t('home.sectors.heading.title')}
          </span>
        </h2>
        <ul className="grid w-full list-none grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {allSectors.map((sector) => (
            <li
              key={`home-sector-${sector.id}`}
              style={{
                backgroundImage: `url(${sector.image})`,
              }}
              className="group relative flex aspect-square w-full flex-col items-center justify-center gap-1 border border-stone-800 bg-black bg-cover bg-center"
            >
              <span className="absolute top-0 left-0 z-1 h-full w-full bg-black/80 transition-all duration-200 group-hover:bg-black/40" />
              <sector.icon className="text-primary z-2 h-5 w-5 lg:h-8 lg:w-8" />
              <h3 className="z-2 px-2 text-center text-xs font-bold text-white uppercase last:text-xs! lg:text-xl">
                {t(`home.sectors.sector.${sector.id}.title`)}
              </h3>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Sectors;
