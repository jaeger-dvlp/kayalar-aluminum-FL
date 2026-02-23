/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        theme: '1440px',
      },
      fontFamily: {
        theme: 'Inter',
        'roboto-mono': 'Roboto Mono, monospace',
        poppins: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
