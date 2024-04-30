import React from 'react';
import { useTranslation } from 'next-i18next';

function AlloyIngotTable() {
  const { t } = useTranslation();
  return (
    <section className="flex w-full flex-col items-start justify-start gap-2 text-left font-theme text-zinc-300">
      <section className="flex w-full flex-col items-start justify-start gap-2 overflow-auto">
        <table className="alu-table alloy-alu-table w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                ETINORM
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Fe
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Si
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Cu
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Mn
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Mg
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Zn
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Ni
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Ti
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Pb
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                Sn
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="border border-zinc-500 px-2 py-1">
                ETİAL-110<sup>2</sup>
              </td>
              <td className="border border-zinc-500 px-2 py-1">0,70</td>
              <td className="border border-zinc-500 px-2 py-1">4,00 - 6,00</td>
              <td className="border border-zinc-500 px-2 py-1">2,00 - 4,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,20 - 0,60</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-120</td>
              <td className="border border-zinc-500 px-2 py-1">0,50</td>
              <td className="border border-zinc-500 px-2 py-1">4,50 - 5,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-140</td>
              <td className="border border-zinc-500 px-2 py-1">0,60</td>
              <td className="border border-zinc-500 px-2 py-1">
                11,50 - 13,50
              </td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,40</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-141</td>
              <td className="border border-zinc-500 px-2 py-1">1,00</td>
              <td className="border border-zinc-500 px-2 py-1">
                11,50 - 13,50
              </td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-145</td>
              <td className="border border-zinc-500 px-2 py-1">0,60</td>
              <td className="border border-zinc-500 px-2 py-1">
                11,00 - 13,00
              </td>
              <td className="border border-zinc-500 px-2 py-1">0,80 - 1,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,80 - 1,40</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,80 - 1,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-147</td>
              <td className="border border-zinc-500 px-2 py-1">0,25</td>
              <td className="border border-zinc-500 px-2 py-1">8,70 - 9,10</td>
              <td className="border border-zinc-500 px-2 py-1">3,40 - 3,70</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,40 - 0,80</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-150</td>
              <td className="border border-zinc-500 px-2 py-1">1,00</td>
              <td className="border border-zinc-500 px-2 py-1">
                11,00 - 13,00
              </td>
              <td className="border border-zinc-500 px-2 py-1">1,75 - 2,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,40</td>
              <td className="border border-zinc-500 px-2 py-1">0,70</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-160</td>
              <td className="border border-zinc-500 px-2 py-1">1,00</td>
              <td className="border border-zinc-500 px-2 py-1">7,50 - 9,00</td>
              <td className="border border-zinc-500 px-2 py-1">3,00 - 4,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">1,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-171</td>
              <td className="border border-zinc-500 px-2 py-1">0,50</td>
              <td className="border border-zinc-500 px-2 py-1">9,00 - 10,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,40 - 0,60</td>
              <td className="border border-zinc-500 px-2 py-1">0,30 - 0,45</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-175</td>
              <td className="border border-zinc-500 px-2 py-1">0,60</td>
              <td className="border border-zinc-500 px-2 py-1">9,00 - 10,50</td>
              <td className="border border-zinc-500 px-2 py-1">2,50 - 3,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,70 - 1,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-177</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">6,60 - 7,40</td>
              <td className="border border-zinc-500 px-2 py-1">0,02</td>
              <td className="border border-zinc-500 px-2 py-1">0,03</td>
              <td className="border border-zinc-500 px-2 py-1">0,30 - 0,45</td>
              <td className="border border-zinc-500 px-2 py-1">0,04</td>
              <td className="border border-zinc-500 px-2 py-1">0,02</td>
              <td className="border border-zinc-500 px-2 py-1">0,08 - 0,14</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-178</td>
              <td className="border border-zinc-500 px-2 py-1">0,40</td>
              <td className="border border-zinc-500 px-2 py-1">5,00 - 5,50</td>
              <td className="border border-zinc-500 px-2 py-1">2,80 - 3,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,10 - 0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,15 - 0,25</td>
              <td className="border border-zinc-500 px-2 py-1">0,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-180</td>
              <td className="border border-zinc-500 px-2 py-1">1,00</td>
              <td className="border border-zinc-500 px-2 py-1">9,00 - 11,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,70 - 2,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">2,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-195</td>
              <td className="border border-zinc-500 px-2 py-1">0,60</td>
              <td className="border border-zinc-500 px-2 py-1">
                17,00 - 19,00
              </td>
              <td className="border border-zinc-500 px-2 py-1">0,80 - 1,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,80 - 1,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,80 - 1,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-220</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,35</td>
              <td className="border border-zinc-500 px-2 py-1">4,00 - 5,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-221</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">4,00 - 5,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,15 - 0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-509</td>
              <td className="border border-zinc-500 px-2 py-1">0,60</td>
              <td className="border border-zinc-500 px-2 py-1">1,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,20 - 0,50</td>
              <td className="border border-zinc-500 px-2 py-1">7,00 - 10,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
            </tr>
          </tbody>
        </table>
      </section>
      <p className="whitespace-pre-wrap pt-1 text-xs">
        {t('tables.alloy-ingot.note')}
      </p>
    </section>
  );
}

export default AlloyIngotTable;
