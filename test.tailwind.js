/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./components/testing/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bj: "red",
      },
      fontSize: {
        x100: "30px",
      },
      spacing: {
        100: "8.5rem",
      },
    },
  },
};
