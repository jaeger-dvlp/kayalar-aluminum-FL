/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const subPathPrefix = process.env.NEXT_PUBLIC_APP_SUBPATH_PREFIX || '';

module.exports = {
  i18n,
  reactStrictMode: true,
  allowedDevOrigins: ['http://localhost:3000'],
  basePath: subPathPrefix,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'kayalaraluminyum.com.tr',
          },
        ],
        destination: `${appUrl}/:path*`,
        permanent: true,
      },
    ];
  },
};
