import { BaseAnchor } from "../../Anchor";
import { styled } from "@/lib/styles/stitches";

export type BaseBrandProps = typeof BaseBrand["defaultProps"];

export const BaseBrand = styled(BaseAnchor, {
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  marginRight: "auto",
});
