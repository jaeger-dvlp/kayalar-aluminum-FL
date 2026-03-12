import { useTranslation } from 'next-i18next';
import React from 'react';

function AlloyIngotTable() {
  const { t } = useTranslation();
  return (
    <section className="font-theme relative flex w-full flex-col items-start justify-start gap-5 text-left text-neutral-300">
      <h3 className="w-full text-left text-lg font-semibold text-white lg:text-2xl">
        {t('tables.alloy-ingot.title')}
      </h3>
      <section className="flex w-full flex-col items-start justify-start gap-2 overflow-auto">
        <table className="alu-table alloy-alu-table relative w-full border-collapse">
          <thead>
            <tr>
              <th>ETINORM</th>
              <th>Fe</th>
              <th>Si</th>
              <th>Cu</th>
              <th>Mn</th>
              <th>Mg</th>
              <th>Zn</th>
              <th>Ni</th>
              <th>Ti</th>
              <th>Pb</th>
              <th>Sn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                ETIAL-110<sup>2</sup>
              </td>
              <td>0,70</td>
              <td>4,00 - 6,00</td>
              <td>2,00 - 4,00</td>
              <td>0,20 - 0,60</td>
              <td>0,15</td>
              <td>0,20</td>
              <td>0,30</td>
              <td>0,20</td>
              <td>0,10</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-120</td>
              <td>0,50</td>
              <td>4,50 - 5,00</td>
              <td>0,10</td>
              <td>0,20</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,20</td>
              <td>0,10</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>ETIAL-140</td>
              <td>0,60</td>
              <td>11,50 - 13,50</td>
              <td>0,10</td>
              <td>0,40</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,15</td>
              <td>0,10</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-141</td>
              <td>1,00</td>
              <td>11,50 - 13,50</td>
              <td>0,20</td>
              <td>0,30</td>
              <td>0,20</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,15</td>
              <td>0,10</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-145</td>
              <td>0,60</td>
              <td>11,00 - 13,00</td>
              <td>0,80 - 1,50</td>
              <td>0,20</td>
              <td>0,80 - 1,40</td>
              <td>0,20</td>
              <td>0,80 - 1,30</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-147</td>
              <td>0,25</td>
              <td>8,70 - 9,10</td>
              <td>3,40 - 3,70</td>
              <td>0,20</td>
              <td>0,40 - 0,80</td>
              <td>0,20</td>
              <td>0,20</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-150</td>
              <td>1,00</td>
              <td>11,00 - 13,00</td>
              <td>1,75 - 2,50</td>
              <td>0,50</td>
              <td>0,40</td>
              <td>0,70</td>
              <td>0,30</td>
              <td>0,15</td>
              <td>0,10</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>ETIAL-160</td>
              <td>1,00</td>
              <td>7,50 - 9,00</td>
              <td>3,00 - 4,00</td>
              <td>0,50</td>
              <td>0,30</td>
              <td>1,00</td>
              <td>0,20</td>
              <td>0,20</td>
              <td>0,10</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>ETIAL-171</td>
              <td>0,50</td>
              <td>9,00 - 10,00</td>
              <td>0,10</td>
              <td>0,40 - 0,60</td>
              <td>0,30 - 0,45</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,15</td>
              <td>0,05</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-175</td>
              <td>0,60</td>
              <td>9,00 - 10,50</td>
              <td>2,50 - 3,50</td>
              <td>0,30</td>
              <td>0,70 - 1,20</td>
              <td>0,50</td>
              <td>0,30</td>
              <td>0,15</td>
              <td>0,10</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-177</td>
              <td>0,20</td>
              <td>6,60 - 7,40</td>
              <td>0,02</td>
              <td>0,03</td>
              <td>0,30 - 0,45</td>
              <td>0,04</td>
              <td>0,02</td>
              <td>0,08 - 0,14</td>
              <td>0,05</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-178</td>
              <td>0,40</td>
              <td>5,00 - 5,50</td>
              <td>2,80 - 3,20</td>
              <td>0,10 - 0,20</td>
              <td>0,15 - 0,25</td>
              <td>0,50</td>
              <td>0,30</td>
              <td>0,15</td>
              <td>0,10</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-180</td>
              <td>1,00</td>
              <td>9,00 - 11,50</td>
              <td>0,70 - 2,50</td>
              <td>0,50</td>
              <td>0,30</td>
              <td>2,00</td>
              <td>0,50</td>
              <td>0,20</td>
              <td>0,10</td>
              <td>0,20</td>
            </tr>
            <tr>
              <td>ETIAL-195</td>
              <td>0,60</td>
              <td>17,00 - 19,00</td>
              <td>0,80 - 1,50</td>
              <td>0,20</td>
              <td>0,80 - 1,30</td>
              <td>0,20</td>
              <td>0,80 - 1,30</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-220</td>
              <td>0,30</td>
              <td>0,35</td>
              <td>4,00 - 5,00</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,05</td>
              <td>0,05</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-221</td>
              <td>0,30</td>
              <td>0,30</td>
              <td>4,00 - 5,00</td>
              <td>0,10</td>
              <td>0,05</td>
              <td>0,10</td>
              <td>0,10</td>
              <td>0,15 - 0,30</td>
              <td>0,05</td>
              <td>0,05</td>
            </tr>
            <tr>
              <td>ETIAL-509</td>
              <td>0,60</td>
              <td>1,00</td>
              <td>0,05</td>
              <td>0,20 - 0,50</td>
              <td>7,00 - 10,00</td>
              <td>0,10</td>
              <td>-</td>
              <td>0,15</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="flex w-full items-start justify-start overflow-auto">
        <table className="ingot-table-note text-xs">
          <tbody>
            <tr>
              <td>1 ) {t('tables.alloy-ingot.notes.0')}</td>
            </tr>
            <tr>
              <td>2 ) {t('tables.alloy-ingot.notes.1')}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default AlloyIngotTable;
