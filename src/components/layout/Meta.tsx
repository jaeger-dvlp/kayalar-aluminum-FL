import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import React from 'react';

type MetaProps = {
  title: string;
  description: string;
  favIconType?: 'png' | 'jpg' | 'jpeg' | 'ico'; // ? You can add more types..
};

function Meta({
  title,
  description,
  favIconType = 'ico',
}: MetaProps): React.JSX.Element {
  const router = useRouter();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kayalar Alüminyum',
    url: process.env.NEXT_PUBLIC_APP_URL,
    logo: `${process.env.NEXT_PUBLIC_APP_URL}/assets/img/logo.webp`,
    sameAs: [],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        areaServed: 'TR',
        availableLanguage: ['Turkish', 'English'],
      },
    ],
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.${favIconType}`}
          type="image/x-icon"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${process.env.NEXT_PUBLIC_APP_URL}${router.asPath.replace(/^\/(tr|en)/, '')}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${process.env.NEXT_PUBLIC_APP_URL}/en${router.asPath.replace(/^\/(tr|en)/, '')}`}
        />
        <link
          rel="alternate"
          hrefLang="tr"
          href={`${process.env.NEXT_PUBLIC_APP_URL}/tr${router.asPath.replace(/^\/(tr|en)/, '')}`}
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          site_name: process.env.NEXT_PUBLIC_APP_NAME,
        }}
      />
    </>
  );
}

Meta.defaultProps = {
  favIconType: 'ico',
};

export default Meta;
