import * as SelectPrimitive from "@radix-ui/react-select";
import { styled } from "@/lib/styles/stitches";
import { blackA, mauve } from "@radix-ui/colors";

export type BaseSelectTriggerProps = typeof Trigger.defaultProps;
export type BaseSelectContainerProps = typeof Container.defaultProps;
export type BaseSelectItemProps = typeof Item.defaultProps;
export type BaseSelectItemIndicatorProps = typeof ItemIndicator.defaultProps;
export type BaseSelectRootProps = SelectPrimitive.SelectProps;

const Container = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const Item = styled(SelectPrimitive.Item, {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",
});

const ItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const Trigger = styled(SelectPrimitive.Trigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: "white",
  "&:hover": { backgroundColor: mauve.mauve3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

export const BaseSelect = {
  Container,
  Item,
  ItemIndicator,
  Trigger,
};
