/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#eab308", // yellow-500
        secondary: "#64748b", // slate-500
        dark: "#0f172a", // slate-900
      },
      screens: {
        "2xl": "1320px",
      },
      animation: {
        "pulse-slow": "pulse 3s linear infinite",
      },
    },
  },
  plugins: [],
};
