import { useTranslation } from 'next-i18next';
import React from 'react';

function PureIngotTable() {
  const { t } = useTranslation();
  return (
    <section className="font-theme flex w-full flex-col items-start justify-start gap-5 text-left text-neutral-300">
      <h3 className="w-full text-left text-lg font-semibold text-white lg:text-2xl">
        {t('tables.pure-ingot.title')}
      </h3>
      <section className="flex w-full flex-col items-start justify-start gap-2 overflow-auto">
        <table className="alu-table pure-alu-table w-full border-collapse">
          <thead>
            <tr>
              <th rowSpan={2} colSpan={2}>
                ETINORM
              </th>
              <th rowSpan={2}>
                Al<sup>1</sup>
              </th>
              <th rowSpan={2}>
                Fe<sup>2</sup>
              </th>
              <th rowSpan={2}>
                Si<sup>2</sup>
              </th>
              <th rowSpan={2}>
                Cu<sup>2</sup>
              </th>
              <th rowSpan={2}>
                Zn<sup>2</sup>
              </th>
              <th rowSpan={2}>
                Ti<sup>2</sup>
              </th>
              <th rowSpan={2}>
                Mn<sup>2</sup>
              </th>

              <th colSpan={2}>{t('tables.pure-ingot.head.others')}</th>
            </tr>
            <tr>
              <th>{t('tables.pure-ingot.head.each-one')}</th>
              <th>{t('tables.pure-ingot.head.total')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={1} rowSpan={3}>
                {t('tables.pure-ingot.body.conductor-al')}
              </td>
            </tr>
            <tr>
              <td>
                ETIAL-7E<sup>3</sup>
              </td>
              <td>99,70</td>
              <td>0,25</td>
              <td>0,10</td>
              <td>-</td>
              <td />
              <td>-</td>
              <td>-</td>
              <td>0,02</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>
                ETIAL-6E<sup>9</sup>
              </td>
              <td>99,60</td>
              <td>0,30</td>
              <td>0,10</td>
              <td>-</td>
              <td />
              <td>-</td>
              <td>-</td>
              <td>0,02</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td rowSpan={10}>
                {t('tables.pure-ingot.body.pure-commercial-al')}
              </td>
            </tr>
            <tr>
              <td>
                ETIAL-8<sup>4</sup>
              </td>
              <td>99,80</td>
              <td>0,15</td>
              <td>0,10</td>
              <td>0,03</td>
              <td>0,03</td>
              <td>0,02</td>
              <td>0,02</td>
              <td>0,02</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>ETIAL-7</td>
              <td>99,70</td>
              <td>0,25</td>
              <td>0,15</td>
              <td>0,03</td>
              <td>0,04</td>
              <td>0,03</td>
              <td>-</td>
              <td>0,03</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>ETIAL-6</td>
              <td>99,60</td>
              <td>0,30</td>
              <td>0,20</td>
              <td>0,04</td>
              <td>0,05</td>
              <td>0,04</td>
              <td>-</td>
              <td>0,03</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>ETIAL-5</td>
              <td>99,50</td>
              <td>0,40</td>
              <td>0,25</td>
              <td>0,05</td>
              <td>0,05</td>
              <td>0,04</td>
              <td>-</td>
              <td>0,03</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>ETIAL-3</td>
              <td>99,30</td>
              <td>0,60</td>
              <td>0,35</td>
              <td>0,05</td>
              <td>0,06</td>
              <td>0,05</td>
              <td>-</td>
              <td>0,05</td>
              <td>0,15</td>
            </tr>
            <tr>
              <td>
                ETIAL-1<sup>8</sup>
              </td>
              <td>99,00</td>
              <td>0,80</td>
              <td>0,35</td>
              <td>0,05</td>
              <td>0,10</td>
              <td>0,05</td>
              <td>0,05</td>
              <td>0,05</td>
              <td>0,15</td>
            </tr>
            <tr>
              <td>ETIAL-0</td>
              <td>99,00</td>
              <td>0,70</td>
              <td>0,25</td>
              <td>0,05 - 0,15</td>
              <td>0,06</td>
              <td>0,05</td>
              <td>-</td>
              <td>0,05</td>
              <td>0,15</td>
            </tr>
            <tr>
              <td>
                ETIAL-F<sup>5,6,10</sup>
              </td>
              <td>95,00</td>
              <td>5,00</td>
              <td>1,00</td>
              <td>1,50</td>
              <td>1,50</td>
              <td>0,05</td>
              <td>1,00</td>
              <td>0,10</td>
              <td>1,00</td>
            </tr>
            <tr>
              <td>
                ETIAL-F1<sup>7,11</sup>
              </td>
              <td>98,00</td>
              <td>0,60 - 0,99</td>
              <td>0,35</td>
              <td>0,15</td>
              <td>0,10</td>
              <td>0,05</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,00</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="flex w-full items-start justify-start overflow-auto">
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
