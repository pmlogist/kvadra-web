import { FC, ReactNode } from "react";
import { SCProps } from "@/types/styled";
import { BaseText, BaseTextProps } from "./Text.styled";

export interface TextProps extends SCProps<BaseTextProps> {
  children: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
  const { children, size } = props;

  const Component = props.as ?? BaseText;

  return <Component size={size}>{children}</Component>;
};
Text.displayName = "Text";
