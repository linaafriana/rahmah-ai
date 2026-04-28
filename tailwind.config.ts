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
          DEFAULT: "#5DB3A6",
          soft: "#A8D8D0",
          tint: "#E6F3F1",
        },
        background: "#FFF6F0",
        accent: {
          DEFAULT: "#FFD66B",
          soft: "#FFE9A8",
          tint: "#FFF7DD",
        },
        secondary: {
          DEFAULT: "#FADADD",
          soft: "#FCE8EA",
        },
        ink: {
          DEFAULT: "#333333",
          soft: "#6B6B6B",
          muted: "#9A9A9A",
        },
      },
      borderRadius: {
        card: "20px",
        "card-lg": "28px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(51, 51, 51, 0.06)",
        "soft-lg": "0 10px 30px rgba(51, 51, 51, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        arabic: ["var(--font-amiri)", "serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 250ms ease-out",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
