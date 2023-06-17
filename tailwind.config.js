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
      backgroundImage: {
        "wave-1": "url('/images/wave1.png')",
        "wave-2": "url('/images/wave2.png')",
      },
    },
  },
  plugins: [],
};
