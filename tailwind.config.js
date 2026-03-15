/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primary1: "#82B2BE",
        primary2: "#CC99C2",
        neutral: "#969696"
      }
    }
  },
  plugins: []
};
