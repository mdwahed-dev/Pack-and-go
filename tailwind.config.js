/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px',
      },
      fontFamily:{
        'pop':  ["poppins"],
        'nuni':  ["Nunito"],
      }

    },
  },
  plugins: [],
}