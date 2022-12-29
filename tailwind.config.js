/** @type {import('tailwindcss').Config} */

// import { Inter } from "@next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
// });

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: [inter.className, ...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
