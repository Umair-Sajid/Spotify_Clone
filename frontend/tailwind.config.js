/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "app-green": "rgb(0,255,67)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      heigth: {
        "1/10": "10%",
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
