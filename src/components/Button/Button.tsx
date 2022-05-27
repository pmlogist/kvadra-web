import { forwardRef, ReactNode } from "react";
import { type SCProps } from "@/types/styled";
import { BaseButtonProps, BaseButton } from "./Button.styled";

export interface ButtonProps extends SCProps<BaseButtonProps> {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children } = props;

    const Component = props.as ?? BaseButton;

    return (
      <Component {...props} ref={ref}>
        {children}
      </Component>
    );
  }
);
Button.displayName = "Button";
