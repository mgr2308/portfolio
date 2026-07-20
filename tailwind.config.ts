import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F4EF",
        sand: "#DDD2C2",
        accent: "#8A6B56",
        "accent-hover": "#B89B82",
        graphite: "#333333",
        chocolate: "#4B392F",
        olive: "#81806A",
        "muted-gray": "#6F6F6F",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Instrument Serif", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "slide-left": "slideLeft 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
