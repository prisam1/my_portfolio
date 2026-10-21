/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        fadeIn: "fadeIn 1s ease-in forwards",
        "fade-in": "fadeIn 200ms ease-out forwards",
        "pop-in": "popIn 250ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "scroll-hint": "scrollHint 1.6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        popIn: {
          "0%": { opacity: 0, transform: "translateY(12px) scale(0.98)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        scrollHint: {
          "0%": { opacity: 0, transform: "translateY(-4px)" },
          "40%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};
