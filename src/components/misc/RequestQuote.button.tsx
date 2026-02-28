import Link from 'next/link';
import { useTranslation } from 'next-i18next';

type Props = {
  text?: string;
};

export function RequestQuoteButton({
  text = 'buttons.rn-request-quote',
}: Props) {
  const { t } = useTranslation();
  return (
    <Link
      href="/request-quote"
      style={{
        letterSpacing: '0.1em',
      }}
      className="bg-primary border-primary lg:text-md border px-5 py-3 text-sm font-bold text-black uppercase transition-all duration-200 hover:bg-white"
    >
      {t(text)}
    </Link>
  );
}
