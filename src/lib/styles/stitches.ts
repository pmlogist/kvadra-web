import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
  },

  theme: {
    fonts: {
      sans: "system-ui",
      // sans: `'Rubik', sans-serif`,
    },
    colors: {
      white: "#fff",
      primary: "hsl(220,34%,62%)",
      primaryLigth: "hsl(220,34%,72%)",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
  },
});
