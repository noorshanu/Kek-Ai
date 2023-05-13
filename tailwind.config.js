/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "black",
      white: "rgba(255, 255, 255, 1)",
      transparent: "transparent",
      bg: "rgba(2, 1, 11, 1)",
      primary: "#AAE33E",
      secondary: "rgba(7, 0, 30, 1)",
    },
    fontFamily: {
      outfit: "'Outfit', sans-serif",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(141.49deg, rgba(255, 255, 255, 0) 8.21%, rgba(255, 255, 255, 0.09) 47.21%, rgba(255, 255, 255, 0) 88.72%)",

        "ecosystem-card":
          "linear-gradient(107.46deg, rgba(255, 255, 255, 0) 6.94%, rgba(255, 255, 255, 0.08) 39.88%, rgba(255, 255, 255, 0) 74.95%)",
      },
    },
  },
  plugins: [],
};
