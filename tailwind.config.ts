import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand: #1E5AA8 deep blue — primary identity
        brand: {
          50: "#eef4fb",
          100: "#d6e4f3",
          200: "#aac8e8",
          300: "#7aabd9",
          400: "#4a87c4",
          500: "#1E5AA8",
          600: "#194a8c",
          700: "#143b70",
          800: "#102d56",
          900: "#0c2240",
          950: "#06152a"
        },
        // Ink: cool near-black scale for text & dark sections
        ink: {
          50: "#f7f8fa",
          100: "#eef0f4",
          200: "#D9D9D9",
          300: "#bababa",
          400: "#8A8A8A",
          500: "#6c6e75",
          600: "#4d5058",
          700: "#363842",
          800: "#1d2436",
          900: "#0c2240",
          950: "#06152a"
        },
        // Cream: white-to-mid-grey scale (background + light text on dark)
        cream: {
          50: "#ffffff",
          100: "#f7f8fa",
          200: "#e8eaee",
          300: "#c8ccd3",
          400: "#a3a8b1"
        },
        // Ochre alias: orange #F47A20
        ochre: {
          50: "#fff5ec",
          100: "#ffe6cf",
          200: "#ffc999",
          300: "#ffa760",
          400: "#fa8c3a",
          500: "#F47A20",
          600: "#d6611a",
          700: "#a84813",
          800: "#7a330d",
          900: "#522207"
        },
        // Sage alias: sky blue #2D9CFF
        sage: {
          50: "#ebf5ff",
          100: "#d6ebff",
          200: "#a8d6ff",
          300: "#74beff",
          400: "#4eaaff",
          500: "#2D9CFF",
          600: "#1d80e0",
          700: "#1665b8",
          800: "#114e8f",
          900: "#0d3a6b"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        tightest: "-0.035em",
        tightlx: "-0.02em"
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12, 34, 64, 0.04), 0 4px 14px rgba(12, 34, 64, 0.05)",
        elev: "0 6px 20px rgba(12, 34, 64, 0.08), 0 20px 40px rgba(12, 34, 64, 0.06)",
        deep: "0 20px 60px rgba(12, 34, 64, 0.18)",
        ring: "inset 0 0 0 1px rgba(12, 34, 64, 0.08)"
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", lg: "2rem" }
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
