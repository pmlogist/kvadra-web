import { styled } from "@/lib/styles/stitches";

export type BaseAnchorProps = typeof BaseAnchor["defaultProps"];

export const BaseAnchor = styled("a", {
  cursor: "pointer",
});
