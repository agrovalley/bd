import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: "#16a34a",
        "brand-dark": "#116b35",
        "brand-soft": "#eaf8ef",
        ink: "#10251a",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 37, 26, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
