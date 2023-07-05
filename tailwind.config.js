/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#726da6",
        secondary: "#3E3E65",
        white: "#fbfbfb",
      },
    },
  },
  plugins: [],
};
