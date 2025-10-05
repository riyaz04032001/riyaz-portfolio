import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;
