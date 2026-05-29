import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pearl & Platinum — LIGHT theme
        bg: "#FBFBFA",
        surface: "#EAEAEA",
        accent: "#9CA0A8",
        contrast: "#3A3D45",
        // `primary` maps to the charcoal ink used for filled CTAs + headings
        primary: "#3A3D45",
        "bg-contrast": "#3A3D45",
      },
      fontFamily: {
        display: ["var(--font-display)", "Archivo Black", "ui-sans-serif", "sans-serif"],
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        ultra: "0.4em",
      },
    },
  },
  plugins: [],
} satisfies Config;
