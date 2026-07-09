import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "near-black": "#171717",
        "dark-gray": "#262626",
        "text-gray": "#404040",
        "muted-gray": "#737373",
        "line-gray": "#e5e5e5",
        "soft-gray": "#f5f5f5",
        white: "#ffffff"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"]
      },
      maxWidth: {
        site: "1240px",
        copy: "760px"
      },
      borderRadius: {
        studio: "6px"
      }
    }
  }
} satisfies Config;

export default config;
