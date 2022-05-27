import { SCProps } from "@/types/styled";
import * as SelectPrimitive from "@radix-ui/react-select";
import { forwardRef } from "react";
import { Icon } from "../Icon";
import {
  BaseSelect,
  BaseSelectItemProps,
  BaseSelectRootProps,
} from "./Select.styled";

export const Select = forwardRef<
  HTMLButtonElement,
  SCProps<BaseSelectRootProps>
>(({ children, ...props }, ref) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <SelectPrimitive.Root {...props}>
        <BaseSelect.Trigger ref={ref}>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon>
            <Icon name="chevron-down" />
          </SelectPrimitive.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Container>
          <SelectPrimitive.ScrollUpButton>
            <Icon name="chevron-up" />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton>
            <Icon name="chevron-down" />
          </SelectPrimitive.ScrollDownButton>
        </BaseSelect.Container>
      </SelectPrimitive.Root>
    </div>
  );
});
Select.displayName = "Select";

export const SelectItem = forwardRef<
  HTMLDivElement,
  SCProps<BaseSelectItemProps>
>(({ children, ...props }, ref) => {
  return (
    <BaseSelect.Item {...props} ref={ref}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <BaseSelect.ItemIndicator>
        <Icon name="check" size={12} />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
});
SelectItem.displayName = "SelectItem";
