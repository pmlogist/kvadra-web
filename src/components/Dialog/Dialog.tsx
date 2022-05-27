import { forwardRef } from "react";
import { Icon } from "../Icon";
import { BaseDialog, BaseDialogContentProps } from "./Dialog.styled";

export const DialogContent = forwardRef<HTMLDivElement, BaseDialogContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <BaseDialog.Portal>
        <BaseDialog.Overlay>
          <BaseDialog.Content {...props} ref={ref}>
            {children}
            <BaseDialog.Close>
              <Icon name="x" />
            </BaseDialog.Close>
          </BaseDialog.Content>
        </BaseDialog.Overlay>
      </BaseDialog.Portal>
    );
  }
);
DialogContent.displayName = "DialogContent";
