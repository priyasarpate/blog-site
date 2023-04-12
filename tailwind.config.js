/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000',
         'gray': 'gray',
         'light-blue': '#40DFEF',
         'yellow': 'yellow',
         'orange': 'orange',
         'blue': '#3C486B',
         'dark-blue': '#070A52',
         'whitesmoke': 'whitesmoke'
      },
    extend: {},
  },
  plugins: [],
};
