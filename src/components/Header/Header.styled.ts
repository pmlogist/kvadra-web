import { styled } from "@/lib/styles/stitches";

export type BaseHeaderProps = typeof BaseHeader["defaultProps"];

export const BaseHeader = styled("header", {
  display: "flex",
  zIndex: 100,
  position: "fixed",
  height: 50,
  width: "100%",
});
