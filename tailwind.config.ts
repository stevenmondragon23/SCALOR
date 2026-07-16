import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EDEAE0",
        "paper-dim": "#E2DECE",
        ink: "#0A0F0D",
        "ink-soft": "#16211C",
        ledger: "#1E4D3B",
        "ledger-soft": "#2C6A50",
        brass: "#3C8563",
        "brass-light": "#66AB86",
        rule: "#2C3B33",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-paper":
          "linear-gradient(rgba(24,35,56,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(24,35,56,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
    },
  },
  plugins: [],
};
export default config;
