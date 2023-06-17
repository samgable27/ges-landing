/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        bold: 700,
        extraBold: 900,
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
