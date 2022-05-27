import * as DialogPrimitive from "@radix-ui/react-dialog";
import { violet } from "@radix-ui/colors";
import { styled } from "@/lib/styles/stitches";
import { SCProps } from "@/types/styled";

export interface BaseDialogContentProps
  extends SCProps<typeof Content.defaultProps> {}

const Overlay = styled(DialogPrimitive.Overlay, {
  background: "rgba(0 0 0 / 0.7)",
  backdropFilter: "blur(5px)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
});

const Content = styled(DialogPrimitive.Content, {
  minWidth: 300,
  background: "white",
  padding: 30,
  borderRadius: 4,
});

const Close = DialogPrimitive.Close;
const Portal = DialogPrimitive.Portal;
const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;

export const BaseDialog = {
  Close,
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
};
