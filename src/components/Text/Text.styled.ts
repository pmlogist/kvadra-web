import { styled } from "@/lib/styles/stitches";

export type BaseTextProps = typeof BaseText["defaultProps"];

export const BaseText = styled("p", {
  color: "$hiContrast",
  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
    },
  },
});
