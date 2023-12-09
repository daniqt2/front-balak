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
        grayLight: '#747474',
        bkOrange: '#ECA74B',
        bkPink: '#c95956',
        bkPrimary: '#10196',
        bkSecondary: '#355245',
        bkLight: '#E4E6D9',
        bkBluelight: '#354B58',
        bkBlue: '#263844',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('flowbite/plugin')],
};
