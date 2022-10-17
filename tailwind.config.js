/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("./theme/colors.json");
const consts = require("./consts.json");

let extendedColors = {};

for (const [key, value] of Object.entries(colors)) {
  extendedColors[key] = value[consts.PRIMARY_SHADE];
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: extendedColors,
      fontFamily: {
        sans: '"Open Sans"',
      },
      fontSize: {
        x11: "11px",
        x12: "12px",
        x13: "13px",
        x14: "14px",
        x16: "16px",
        x20: "20px",
        x25: "25px",
        x30: "30px",
      },
      boxShadow: {
        "btn-bottom": "0px 10px 20px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        header: `${consts.HEADER_HEIGHT}px`,
        34: "8.5rem",
      },
      backgroundImage: {
        message: "url(/icons/message.svg)",
      },
    },
  },
  plugins: [
    plugin(({ addVariant, theme, addComponents }) => {
      addVariant("is-expanded", '&[data-expanded="true"]');
      addVariant("is-opened", '&[data-opened="true"]');
      addComponents({
        ".text-p1": {
          lineHeight: theme("lineHeight.4"),
          fontSize: theme("fontSize.x14"),
        },
        ".text-p2": {
          lineHeight: theme("lineHeight.4"),
          fontSize: theme("fontSize.x13"),
        },
        ".text-p3": {
          lineHeight: theme("lineHeight.6"),
          fontSize: theme("fontSize.x16"),
        },
        ".text-b1": {
          lineHeight: theme("lineHeight.8"),
          letterSpacing: theme("letterSpacing.tighter"),
          fontSize: theme("fontSize.x30"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".text-b2": {
          lineHeight: theme("lineHeight.8"),
          letterSpacing: theme("letterSpacing.tighter"),
          fontSize: theme("fontSize.x25"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".text-b3": {
          lineHeight: theme("lineHeight.8"),
          letterSpacing: theme("letterSpacing.tight"),
          fontSize: theme("fontSize.x20"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".text-b4": {
          lineHeight: theme("lineHeight.4"),
          letterSpacing: theme("letterSpacing.wide"),
          fontSize: theme("fontSize.x16"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".text-b5": {
          lineHeight: theme("lineHeight.4"),
          letterSpacing: theme("letterSpacing.wide"),
          fontSize: theme("fontSize.x12"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".text-b6": {
          lineHeight: theme("lineHeight.4"),
          fontSize: theme("fontSize.x13"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".text-b7": {
          lineHeight: theme("lineHeight.6"),
          fontSize: theme("fontSize.x11"),
          fontWeight: theme("fontWeight.bold"),
        },
      });
    }),
  ],
};
