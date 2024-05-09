/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('/banner.svg')",
      },
      colors: {
        gray: {
          50: "FAFAFA",
          200: "#EBEBEF",
          300: "#6C6C6C",
          400: "#404040",
          500: "#333333",
        },
        yellow: {
          500: "#FF9F0D",
        },
      },
    },
    container: {
      center: true,
      screens: {
        mobile: "800px",
        tablet: "1280px",
        desktop: "1440px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
