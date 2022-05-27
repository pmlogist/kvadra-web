import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { SCProps } from "@/types/styled";
import { BaseHeader, BaseHeaderProps } from "./Header.styled";

export interface HeaderToggleProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface HeaderProps extends SCProps<BaseHeaderProps> {
  left?: ReactNode;
  middle?: any;
  right?: ReactNode;
}

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { left, middle, right } = props;

  const Component = props.as ?? BaseHeader;

  return (
    <Component {...props}>
      {left}
      {middle}
      {right}
    </Component>
  );
};
Header.displayName = "Header";
