import React from 'react';
import { useTranslation } from 'next-i18next';

function PureIngotTable() {
  const { t } = useTranslation();
  return (
    <section className="my-10 flex w-full flex-col items-start justify-start gap-2 text-left font-theme text-zinc-300">
      <h3 className="w-full text-center text-lg">
        {t('tables.pure-ingot.title')}
      </h3>
      <section className="flex w-full flex-col items-start justify-start gap-2 overflow-auto">
        <table className="alu-table pure-alu-table w-full border-collapse">
          <thead>
            <tr>
              <th
                rowSpan={2}
                colSpan={2}
                className="border border-zinc-500 bg-zinc-500/30 px-2 py-1"
              >
                ETINORM
              </th>
              <th
                rowSpan={2}
                className="border border-zinc-500 bg-zinc-500/30 px-2 py-1"
              >
                Al<sup>1</sup>
              </th>
              <th
                rowSpan={2}
                className="border border-zinc-500 bg-zinc-500/30 px-2 py-1"
              >
                Fe<sup>2</sup>
              </th>
              <th
                rowSpan={2}
                className="border border-zinc-500 bg-zinc-500/30 px-2 py-1"
              >
                Si<sup>2</sup>
              </th>
              <th
                rowSpan={2}
                className="border border-zinc-500 bg-zinc-500/30 px-2 py-1"
              >
                Cu<sup>2</sup>
              </th>
              <th
                rowSpan={2}
                className="border border-zinc-500 bg-zinc-500/30 px-2 py-1"
              >
                Zn<sup>2</sup>
              </th>
              <th
                rowSpan={2}
                className="border border-zinc-500 bg-zinc-500/30 px-2 py-1"
              >
                Ti<sup>2</sup>
              </th>
              <th
                rowSpan={2}
                className="border border-zinc-500 bg-zinc-500/30 px-2 py-1"
              >
                Mn<sup>2</sup>
              </th>

              <th
                colSpan={2}
                className="border border-zinc-500 bg-zinc-500/30 px-2 py-1"
              >
                {t('tables.pure-ingot.head.others')}
              </th>
            </tr>
            <tr>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                {t('tables.pure-ingot.head.each-one')}
              </th>
              <th className="border border-zinc-500 bg-zinc-500/30 px-2 py-1">
                {t('tables.pure-ingot.head.total')}
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td rowSpan={2} className="border border-zinc-500 px-2 py-1">
                {t('tables.pure-ingot.body.conductor-al')}
              </td>
              <td className="border border-zinc-500 px-2 py-1">
                ETİAL-7E<sup>3</sup>
              </td>
              <td className="border border-zinc-500 px-2 py-1">99,70</td>
              <td className="border border-zinc-500 px-2 py-1">0,25</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1" />
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">0,02</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">
                ETİAL-6E<sup>9</sup>
              </td>
              <td className="border border-zinc-500 px-2 py-1">99,60</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1" />
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">0,02</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
            </tr>
            <tr>
              <td rowSpan={9} className="border border-zinc-500 px-2 py-1">
                {t('tables.pure-ingot.body.pure-commercial-al')}
              </td>
              <td className="border border-zinc-500 px-2 py-1">
                ETİAL-8<sup>4</sup>
              </td>
              <td className="border border-zinc-500 px-2 py-1">99,80</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,03</td>
              <td className="border border-zinc-500 px-2 py-1">0,03</td>
              <td className="border border-zinc-500 px-2 py-1">0,02</td>
              <td className="border border-zinc-500 px-2 py-1">0,02</td>
              <td className="border border-zinc-500 px-2 py-1">0,02</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-7</td>
              <td className="border border-zinc-500 px-2 py-1">99,70</td>
              <td className="border border-zinc-500 px-2 py-1">0,25</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,03</td>
              <td className="border border-zinc-500 px-2 py-1">0,04</td>
              <td className="border border-zinc-500 px-2 py-1">0,03</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">0,03</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-6</td>
              <td className="border border-zinc-500 px-2 py-1">99,60</td>
              <td className="border border-zinc-500 px-2 py-1">0,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,20</td>
              <td className="border border-zinc-500 px-2 py-1">0,04</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,04</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">0,03</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-5</td>
              <td className="border border-zinc-500 px-2 py-1">99,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,40</td>
              <td className="border border-zinc-500 px-2 py-1">0,25</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,04</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">0,03</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-3</td>
              <td className="border border-zinc-500 px-2 py-1">99,30</td>
              <td className="border border-zinc-500 px-2 py-1">0,60</td>
              <td className="border border-zinc-500 px-2 py-1">0,35</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,06</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">
                ETİAL-1<sup>8</sup>
              </td>
              <td className="border border-zinc-500 px-2 py-1">99,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,80</td>
              <td className="border border-zinc-500 px-2 py-1">0,35</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">ETİAL-0</td>
              <td className="border border-zinc-500 px-2 py-1">99,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,70</td>
              <td className="border border-zinc-500 px-2 py-1">0,25</td>
              <td className="border border-zinc-500 px-2 py-1">0,05 - 0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,06</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">-</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">
                ETİAL-F<sup>5,6,10</sup>
              </td>
              <td className="border border-zinc-500 px-2 py-1">95,00</td>
              <td className="border border-zinc-500 px-2 py-1">5,00</td>
              <td className="border border-zinc-500 px-2 py-1">1,00</td>
              <td className="border border-zinc-500 px-2 py-1">1,50</td>
              <td className="border border-zinc-500 px-2 py-1">1,50</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">1,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">1,00</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-2 py-1">
                ETİAL-F1<sup>7,11</sup>
              </td>
              <td className="border border-zinc-500 px-2 py-1">98,00</td>
              <td className="border border-zinc-500 px-2 py-1">0,60 - 0,99</td>
              <td className="border border-zinc-500 px-2 py-1">0,35</td>
              <td className="border border-zinc-500 px-2 py-1">0,15</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,05</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,10</td>
              <td className="border border-zinc-500 px-2 py-1">0,00</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section
        className="flex w-full
       items-start justify-start overflow-auto"
      >
        <table className="ingot-table-note min-w-fit text-xs">
          <tbody>
            <tr>
              <td>1 ) {t('tables.pure-ingot.notes.0')}</td>
              <td>6 ) {t('tables.pure-ingot.notes.5')}</td>
            </tr>
            <tr>
              <td>2 ) {t('tables.pure-ingot.notes.1')}</td>
              <td>7 ) {t('tables.pure-ingot.notes.6')}</td>
            </tr>
            <tr>
              <td>3 ) {t('tables.pure-ingot.notes.2')}</td>
              <td>8 ) {t('tables.pure-ingot.notes.7')}</td>
            </tr>
            <tr>
              <td>4 ) {t('tables.pure-ingot.notes.3')}</td>
              <td>9 ) {t('tables.pure-ingot.notes.8')}</td>
            </tr>
            <tr>
              <td>5 ) {t('tables.pure-ingot.notes.4')}</td>
              <td>10 ) {t('tables.pure-ingot.notes.9')}</td>
            </tr>
            <tr>
              <td />
              <td>11 ) {t('tables.pure-ingot.notes.10')}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default PureIngotTable;
