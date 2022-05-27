import { SCProps } from "@/types/styled";
import { FC, ReactNode } from "react";
import { BaseCenter, BaseCenterProps } from "./Center.styled";

export interface CenterProps extends SCProps<BaseCenterProps> {
  children: ReactNode;
}

export const Center: FC<CenterProps> = (props) => {
  const { children, direction } = props;

  return (
    <BaseCenter direction={direction} {...props}>
      {children}
    </BaseCenter>
  );
};
Center.displayName = "Center";
