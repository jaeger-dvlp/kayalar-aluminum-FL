/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        theme: '1400px',
      },
      fontFamily: {
        theme: 'Poppins, sans-serif',
        montserrat: 'Montserrat, sans-serif',
        'roboto-mono': 'Roboto Mono, monospace',
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
