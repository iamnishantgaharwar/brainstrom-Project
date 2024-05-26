/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'PoppinsBlack': ['PoppinsBlack', 'sans-serif'],
        'PoppinsBold': ['PoppinsBold', 'sans-serif'],
        'PoppinsRegular': ['PoppinsRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

