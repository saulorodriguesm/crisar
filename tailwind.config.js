/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "piping-blue": "#18436e",
      },
      backgroundColor: {
        "off-white": "#f0f0f0",
        "piping-blue": "#18436e",
      },
      backgroundPosition: {
        mobile: "65%",
        initial: "initial",
      },
      borderColor: {
        "piping-blue": "#18436e",
      },
    },
  },
  plugins: [],
};
