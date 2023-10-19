const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'light-pink': '#B998FF',
      'color-bg': '#fff',
      'color-subtext': '#9200D1',
      'color-text': '#546072',
      'color-learnmore': '#3649E7',
      'color-listing': '#FF3440',
      'color-title': '#101727',
      'light-bg': '#F9FAFB',
      'input-color': '#F5F5F5',
    },
    backgroundImage: {
      'gradient-bar': 'linear-gradient(218deg, #3649E7 3.24%, #9200D1 54.64%, #FF3440 100%)',
      'gradient-extreme-light': 'linear-gradient(218deg, rgba(54, 73, 231, 0.05) 3.24%, rgba(146, 0, 209, 0.05) 54.64%, rgba(255, 52, 64, 0.05) 100%)',
  },
  screens: {
    'sm': '575px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '960px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1600px',
    // => @media (min-width: 1536px) { ... }
    },  
  },
  plugins: [],
});
