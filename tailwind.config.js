/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FCF8F3',
        softpink: '#FDF0F0',
        brown: {
          rich: '#3E2A21',
          muted: '#8C6E5A',
        },
        rosegold: '#E8A38C',
        sparklegold: '#E6C200',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
