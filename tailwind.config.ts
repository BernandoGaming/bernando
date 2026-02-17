import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0D",
        card: "#111827",
        primary: "#E10600",
        text: "#E5E7EB",
        muted: "#9CA3AF",
      },
    },
  },
  plugins: [],
};

export default config;
