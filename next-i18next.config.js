/** @type {import('next-i18next').UserConfig} */

const path = require('path');

module.exports = {
  localePath: path.resolve('./public/assets/locales'),
  i18n: {
    defaultLocale: 'tr',
    locales: ['en', 'tr'],
    localeDetection: false,
  },
  reloadOnPrerender: true,
};
