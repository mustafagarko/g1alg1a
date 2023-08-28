/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      perspective: {
        800: "800px", // Add your desired value here
      },
    },
  },
  plugins: [],
};
