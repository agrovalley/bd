/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10251A",
        soft: {
          DEFAULT: "#EAF8EF",
        },
        brand: {
          DEFAULT: "#16A34A",
          dark: "#116B35",
          light: "#4ADE80",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};
