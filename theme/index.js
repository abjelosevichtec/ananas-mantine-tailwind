import colors from "./colors";
import consts from "../consts.json";

const PRIMARY_COLOR = "redOrange";
const PRIMARY_WHITE_COLOR = "white";
const PRIMARY_BLACK_COLOR = "eerieBlack";
const FONT_FAMILY = "Open Sans, sans-serif";

const theme = {
  colors,
  primaryColor: PRIMARY_COLOR,
  primaryShade: consts.PRIMARY_SHADE,
  white: colors[PRIMARY_WHITE_COLOR][consts.PRIMARY_SHADE],
  black: colors[PRIMARY_BLACK_COLOR][consts.PRIMARY_SHADE],
  fontFamily: FONT_FAMILY,
  spacing: {
    xs: 4,
    sm: 8,
    md: 10,
    lg: 16,
    xl: 32,
  },
  other: {
    color: (color, shade = consts.PRIMARY_SHADE) =>
      colors[color]
        ? colors[color][shade]
        : colors[PRIMARY_COLOR][consts.PRIMARY_SHADE],
    fontSize: {
      xxs: 11,
      xs: 12,
      sm: 13,
      md: 14,
      lg: 16,
      xl: 20,
      "2xl": 25,
      "3xl": 30,
    },
    spacing: {
      x1: 4,
      x2: 8,
      "x2.5": 10,
      x4: 16,
      x8: 32,
      x12: 48,
      x18: 72,
    },
    lineHeight: {
      tighter: 0.96,
      none: 1,
      hairTight: 1.125,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
    },
    letterSpacing: {
      tightest: -1,
      tighter: -0.5,
      tight: -0.3,
      normal: 0,
      wide: 0.2,
      wider: 0.3,
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    opacity: {
      xs: 0.25,
      sm: 0.93,
      md: 1.0,
    },
    radius: {
      xxs: "2px",
      xs: "4px",
      sm: "6px",
      md: "8px",
      lg: "12px",
      xl: "100px",
      full: "100%",
    },
    shadow: {
      bottom: "0px 12px 24px rgba(0, 0, 0, 0.1)",
      top: "0px -11px 24px rgba(0, 0, 0, 0.1)",
    },
  },
};

export default theme;
