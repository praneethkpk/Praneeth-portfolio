import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ethereal Engineering Design System — Material Design 3 inspired
        surface: {
          DEFAULT: "var(--surface)",
          dim: "var(--surface-dim)",
          bright: "var(--surface-bright)",
          "container-lowest": "var(--surface-container-lowest)",
          "container-low": "var(--surface-container-low)",
          container: "var(--surface-container)",
          "container-high": "var(--surface-container-high)",
          "container-highest": "var(--surface-container-highest)",
          variant: "var(--surface-variant)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          container: "var(--primary-container)",
          fixed: "var(--primary-fixed)",
          "fixed-dim": "var(--primary-fixed-dim)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          container: "var(--secondary-container)",
          fixed: "var(--secondary-fixed)",
          "fixed-dim": "var(--secondary-fixed-dim)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
          container: "var(--tertiary-container)",
          fixed: "var(--tertiary-fixed)",
          "fixed-dim": "var(--tertiary-fixed-dim)",
        },
        error: {
          DEFAULT: "var(--error)",
          container: "var(--error-container)",
        },
        outline: {
          DEFAULT: "var(--outline)",
          variant: "var(--outline-variant)",
        },
        "on-surface": {
          DEFAULT: "var(--on-surface)",
          variant: "var(--on-surface-variant)",
        },
        "on-primary": {
          DEFAULT: "var(--on-primary)",
          container: "var(--on-primary-container)",
          fixed: "var(--on-primary-fixed)",
          "fixed-variant": "var(--on-primary-fixed-variant)",
        },
        "on-secondary": {
          DEFAULT: "var(--on-secondary)",
          container: "var(--on-secondary-container)",
          fixed: "var(--on-secondary-fixed)",
          "fixed-variant": "var(--on-secondary-fixed-variant)",
        },
        "on-tertiary": {
          DEFAULT: "var(--on-tertiary)",
          container: "var(--on-tertiary-container)",
          fixed: "var(--on-tertiary-fixed)",
          "fixed-variant": "var(--on-tertiary-fixed-variant)",
        },
        "on-error": {
          DEFAULT: "var(--on-error)",
          container: "var(--on-error-container)",
        },
        "inverse-surface": "var(--inverse-surface)",
        "inverse-on-surface": "var(--inverse-on-surface)",
        "inverse-primary": "var(--inverse-primary)",
        "surface-tint": "var(--surface-tint)",
        background: "var(--background)",
        "on-background": "var(--on-background)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        "container-max": "1200px",
      },
      spacing: {
        xs: "4px",
        sm: "12px",
        md: "24px",
        lg: "48px",
        xl: "80px",
        gutter: "24px",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { left: "-100%" },
          "100%": { left: "200%" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 3s infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
