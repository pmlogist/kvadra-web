import { globalCss } from "./stitches";

function headings() {
  const h = Object.create(null);
  for (let i = 1; i <= 6; i++) {
    h[`h${i}`] = { margin: 0, padding: 0 };
  }
  return h;
}

export const globalStyles = globalCss({
  "*": {
    fontFamily: "$sans",
    button: {
      border: 0,
      background: "transparent",
    },
  },
  html: {
    height: "100%",
  },
  body: {
    height: "100%",
  },
  "#__next": {
    height: "100%",
  },
  ...headings(),
});
