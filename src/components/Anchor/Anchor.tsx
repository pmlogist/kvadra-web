import { forwardRef, ReactNode } from "react";
import { type SCProps } from "@/types/styled";
import { BaseAnchor, BaseAnchorProps } from "./Anchor.styled";

export interface AnchorProps extends SCProps<BaseAnchorProps> {
  children: ReactNode;
}

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (props, ref) => {
    const { children } = props;

    const Component = BaseAnchor || props.as;

    return (
      <Component {...props} ref={ref}>
        {children}
      </Component>
    );
  }
);
Anchor.displayName = "Anchor";
