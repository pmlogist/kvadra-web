import { styled } from "@/lib/styles/stitches";

export type BaseCenterProps = typeof BaseCenter["defaultProps"];

export const BaseCenter = styled("div", {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    direction: {
      col: {
        flexDirection: "column",
      },
    },
  },
});
