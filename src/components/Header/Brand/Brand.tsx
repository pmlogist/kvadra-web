import { forwardRef, ReactNode } from "react";
import { SCProps } from "@/types/styled";
import { BaseBrandProps, BaseBrand } from "./Brand.styled";

export interface BrandProps extends SCProps<BaseBrandProps> {
  children: ReactNode;
}

export const Brand = forwardRef<HTMLAnchorElement, BrandProps>((props, ref) => {
  const { children } = props;

  const Component = props.as ?? BaseBrand;

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
});

Brand.displayName = "HeaderBrand";
