import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { BaseDropdownMenu } from "./Dropdown.styled";

// import { CheckIcon } from "@radix-ui/react-icons";
//
type T = typeof BaseDropdownMenu.Content.defaultProps;
const Content = forwardRef<HTMLDivElement, T>(({ children, ...props }, ref) => {
  return (
    <BaseDropdownMenu.Content ref={ref} {...props}>
      {children}
      <BaseDropdownMenu.Arrow offset={10} />
    </BaseDropdownMenu.Content>
  );
});
Content.displayName = "DropdownMenuContent";

const CheckboxItem = forwardRef<any, any>(({ children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem {...props} ref={ref}>
      {children}
      <DropdownMenuPrimitive.ItemIndicator>
        H
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
CheckboxItem.displayName = "DropdownMenuCheckBoxItem";

const RadioItem = forwardRef<any, any>(({ children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.RadioItem {...props} ref={ref}>
      {children}

      <DropdownMenuPrimitive.ItemIndicator>
        H
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.RadioItem>
  );
});
RadioItem.displayName = "DropdownMenuRadioItem";

const SubContent = forwardRef<HTMLDivElement, T>(
  ({ children, ...props }, ref) => {
    return (
      <BaseDropdownMenu.SubContent ref={ref} {...props}>
        {children}
        <BaseDropdownMenu.Arrow offset={10} />
      </BaseDropdownMenu.SubContent>
    );
  }
);
SubContent.displayName = "DropdownMenuSubContent";

export const DropdownMenu = {
  Content: Content,
  CheckboxItem: CheckboxItem,
  Item: DropdownMenuPrimitive.Item,
  Group: DropdownMenuPrimitive.Group,
  Label: DropdownMenuPrimitive.Label,
  RadioGroup: DropdownMenuPrimitive.RadioGroup,
  RadioItem: RadioItem,
  Root: DropdownMenuPrimitive.Root,
  Separator: DropdownMenuPrimitive.Separator,
  Trigger: DropdownMenuPrimitive.Trigger,
  Sub: DropdownMenuPrimitive.Sub,
  SubContent: SubContent,
  SubTrigger: DropdownMenuPrimitive.SubTrigger,
};
