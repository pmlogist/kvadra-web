import { styled, theme } from "@/lib/styles/stitches";

export type BaseButtonProps = typeof BaseButton["defaultProps"];

export const BaseButton = styled("button", {
  fontWeight: 600,
  color: "$white",
  borderRadius: "8px",
  fontSize: theme.fontSizes[2],
  cursor: "pointer",
  height: 40,
  padding: "0 8px",

  variants: {
    type: {
      primary: {
        backgroundColor: "$primary",
        "&:hover": {
          backgroundColor: "$primaryLigth",
        },
      },
    },
    size: {
      lg: {
        height: 40,
        padding: "0 16px",
      },
    },
  },
});
