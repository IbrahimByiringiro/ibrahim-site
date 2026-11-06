import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Change these to restyle the whole site.
        accent: {
          DEFAULT: "#0f766e", // teal used in light mode (readable on white)
          dark: "#2dd4bf", // teal used in dark mode
        },
        highlight: {
          DEFAULT: "#b45309", // amber for numbers/badges in light mode
          dark: "#fbbf24", // amber in dark mode
        },
        ink: "#0b1220", // dark mode page background
        sidebar: "#080d18", // dark mode sidebar background
        panel: "#111a2b", // dark mode cards
        line: "#1e2a40", // dark mode borders
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
