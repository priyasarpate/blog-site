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
        'nav-btn': '#D1332A',
        'card-btn': '#DB3529',
        'container': '#FCF4F1',
        'card-bg': '#FEFEFE',
        'chef-card': '#7CBFA3',
        'stars' : '#C83A37',
        'main-heading': '#302624',
        'sec-heading': '#929292',
        'tag': '#FB7C73',
        'tag1': "#fb923c",
        'tag2': '#b91c1c',
        'tag3': '#7BC0A3',
         'gray': 'gray',
         'main-color': '#40DFEF',
         'yellow': 'yellow',
      },
    extend: {},
  },
  plugins: [],
};
