import { IconName } from "@/types/icons";
import { FC } from "react";
import { iconList } from "./icon-list";

export interface IconProps {
  name: IconName;
  strokeWidth?: number;
  size?: number;
}
export const Icon: FC<IconProps> = ({ name, size = 12, ...props }) => {
  const { paths, ...iconProps } = iconList[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...iconProps}
      width={size}
      height={size}
      {...props}
    >
      {paths.map((path, i) => (
        <path.el key={i} {...path} />
      ))}
    </svg>
  );
};
