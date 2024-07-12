/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

  },
 daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#EEEE",
          
"primary-content": "#141414",
          
"secondary": "#1E6091",
          
"secondary-content": "#d2dee9",
          
"accent": "#f68067",
          
"accent-content": "#150604",
          
"neutral": "#333c4d",
          
"neutral-content": "#d2d5d9",
          
"base-100": "#FFFFFF",
          
"base-200": "#e8fccf",
          
"base-300": "#acbb99",
          
"base-content": "#131610",
          
"info": "#0088ae",
          
"info-content": "#00060b",
          
"success": "#7ef879",
          
"success-content": "#061505",
          
"warning": "#b96a00",
          
"warning-content": "#0d0400",
          
"error": "#ff3279",
          
"error-content": "#160105",
          },
        },
      ],
    },

  plugins: [
    require('daisyui'),
  ],
}