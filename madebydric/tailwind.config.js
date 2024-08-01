/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "#1E1E1E",
        primary: "#91e92a",
        secondary: "#84f2d0",
        accent: "#57e9ee"
      },
      dropShadow: {
        'accentglow': '0 35px 35px rgba(87, 233, 238, 0.25)',
        '5px': '0 5px 5px rgba(0 ,0 ,0 ,0.25)'
      },
      rotate: {
        '5' : '5deg',
        '10' : '10deg',
        '15' : '15deg',
        '20' : '20deg',
      }
    },
  },
  rotate3d: (theme) => ({
    // default values
    // https://tailwindcss.com/docs/rotate
      ...theme('rotate'),
      // new values
      ...{
          '-60': '-60deg',
          '-50': '-50deg',
          '-40': '-40deg',
          '-35': '-35deg',
          '-30': '-30deg',
          '-25': '-25deg',
          '-20': '-20deg',
          '-15': '-15deg',
          '-10': '-10deg',
          10: '10deg',
          15: '15deg',
          20: '20deg',
          25: '25deg',
          30: '30deg',
          35: '35deg',
          40: '40deg',
          50: '50deg',
          60: '60deg',
      }
  }),
  plugins: [
    require('@kamona/tailwindcss-perspective'),
  ],
};
