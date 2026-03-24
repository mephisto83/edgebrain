/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a3b9ff',
          400: '#7b93ff',
          500: '#5366ff',
          600: '#3d47f5',
          700: '#3338d8',
          800: '#2e31b0',
          900: '#2d2d8f',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      backgroundImage: {
        'gradient-br': 'linear-gradient(135deg, #5366ff 0%, #a855f7 100%)',
        'gradient-br-dark': 'linear-gradient(135deg, #3d47f5 0%, #7e22ce 100%)',
      },
    },
  },
  plugins: [],
}
