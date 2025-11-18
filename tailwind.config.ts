import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#06b6d4", // teal accent
          dark: "#0891b2",
          light: "#22d3ee",
        },
        dark: {
          DEFAULT: "#0f172a", // dark navy
          lighter: "#1e293b",
        },
        light: {
          DEFAULT: "#f8fafc", // off-white
          darker: "#e2e8f0",
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
      },
      borderRadius: {
        'card': '8px',
      },
    },
  },
  plugins: [],
};

export default config;
