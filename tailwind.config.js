/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        gray: {
          200:"#EBEBEF",
          400: "#404040",
          300: "#6C6C6C",
        },
        yellow: {
          500: "#FF9F0D",
        },
      },
    },
    container: {
      center: true,
      screens: {
        mobile: "600px",
        tablet: "1000px",
        desktop: "1440px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
