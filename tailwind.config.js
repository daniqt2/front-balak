/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B4C451',
        secondary: '#353535',
        bkOrange: '#ECA74B',
        bkPink: '#c95956',
        bkPrimary: '#10196',
        bkSecondary: '#355245',
        bkLight: '#E4E6D9',
        bkBluelight: '#354B58',
        bkBlue: '#263844',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
