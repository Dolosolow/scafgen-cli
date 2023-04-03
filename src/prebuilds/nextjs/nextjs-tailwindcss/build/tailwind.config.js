/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "650px",
        md: "976px",
        lg: "1050px",
        xl: "1150px",
        "2xl": "1200px",
        "3xl": "1440px",
        "4xl": "1560",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
