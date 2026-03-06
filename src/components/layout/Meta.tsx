import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import React from 'react';

type MetaProps = {
  title: string;
  description: string;
  favIconType?: 'png' | 'jpg' | 'jpeg' | 'ico'; // ? You can add more types..
  cannonicals?: string[];
};

function Meta({
  title,
  description,
  favIconType = 'ico',
  cannonicals = [],
}: MetaProps): React.JSX.Element {
  const router = useRouter();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kayalar Alüminyum',
    url: 'https://www.kayalaraluminyum.com',
    logo: 'https://www.kayalaraluminyum.com/assets/img/logo.webp',
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
        {cannonicals &&
          cannonicals.map((cannonical) => (
            <link
              key={cannonical}
              rel="canonical"
              href={`${process.env.NEXT_PUBLIC_APP_URL}${cannonical}`}
            />
          ))}
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
