import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14161A",
        lime: {
          DEFAULT: "#BBF146",
          50: "#F7FEE7",
          100: "#ECFCCB",
          200: "#D9F99D",
          300: "#BEF264",
          400: "#A3E635",
          500: "#BBF146", // Main accent
          600: "#84CC16",
          700: "#65A30D",
          800: "#4D7C0F",
          900: "#365314",
          950: "#1A2E05",
        },
        mint: "#DDFBE2",
        cloud: "#F6F7F2",
        violet: {
          DEFAULT: "#6C63FF",
          50: "#EEF2FF",
          500: "#6C63FF",
          600: "#4F46E5",
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(187, 241, 70, 0.24)",
        panel: "0 24px 70px rgba(20, 22, 26, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
