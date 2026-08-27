/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#181F1C",
        cream: "#F4EEDD",
        "cream-dim": "#E9E0C8",
        teal: {
          DEFAULT: "#0E3B36",
          light: "#175951",
          dim: "#0A2E2A",
        },
        paddy: {
          DEFAULT: "#4C7A3D",
          light: "#6B9B57",
        },
        gold: {
          DEFAULT: "#E3A73B",
          light: "#F0C878",
          dim: "#B8842B",
        },
        rust: {
          DEFAULT: "#A6512E",
          light: "#C36F45",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};
