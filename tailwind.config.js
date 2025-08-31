/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    screens: {
      mobile: "400px",
      mobilePlus: "600px",
      tablet: "800px",
      desktop: "1200px",
    },
  },
};
export const plugins = [];
