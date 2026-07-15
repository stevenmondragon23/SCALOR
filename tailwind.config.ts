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
        ink: "#182338",
        "ink-soft": "#2B3A54",
        ledger: "#2F4A3E",
        "ledger-soft": "#3E5F4F",
        brass: "#A8823C",
        "brass-light": "#C9A15C",
        rule: "#B9B29C",
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
