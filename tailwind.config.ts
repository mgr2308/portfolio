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
        cream: "#f7f4ed",
        charcoal: "#1c1c1c",
        "off-white": "#fcfbf8",
        "muted-gray": "#5f5f5d",
        "border-light": "#eceae4",
        "charcoal-83": "rgba(28,28,28,.83)",
        "charcoal-82": "rgba(28,28,28,.82)",
        "charcoal-40": "rgba(28,28,28,.4)",
        "charcoal-10": "rgba(28,28,28,.1)",
        "charcoal-04": "rgba(28,28,28,.04)",
        "charcoal-03": "rgba(28,28,28,.03)",
        "ring-blue": "rgba(59,130,246,.5)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border-passive)",
        muted: "var(--text-muted)",
      },
      fontFamily: {
        sans: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        micro: "4px",
        sm: "6px",
        md: "8px",
        card: "12px",
        container: "16px",
        pill: "9999px",
      },
      boxShadow: {
        inset: "rgba(255,255,255,.2) 0 .5px 0 0 inset, rgba(0,0,0,.2) 0 0 0 .5px inset, rgba(0,0,0,.05) 0 1px 2px 0",
        focus: "rgba(0,0,0,.1) 0 4px 12px",
      },
      transitionDuration: {
        "150": "150ms",
        "250": "250ms",
        "400": "400ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.4,0,.2,1)",
      },
    },
  },
  plugins: [],
}

export default config
