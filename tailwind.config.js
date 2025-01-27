/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    mytheme: {
      primary: "#d99904",
      secondary: "#f6d860",
      accent: "#37cdbe",
      neutral: "#3d4451",
      "base-100": "#ffffff",
    },
  },
  plugins: [daisyui],
};
