import { FC, ReactNode } from "react";
import { type SCProps } from "@/types/styled";
import { BaseBox, BaseBoxProps } from "./Box.styled";

export interface BoxProps extends SCProps<BaseBoxProps> {
  children: ReactNode;
}

export const Box: FC<BoxProps> = (props) => {
  const { children } = props;

  const Component = BaseBox || props.as;

  return <Component>{children}</Component>;
};
Box.displayName = "Box";
