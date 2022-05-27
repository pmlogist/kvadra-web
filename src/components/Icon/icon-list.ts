import { SVGProps } from "react";
import { IconName } from "@/types/icons";

export type IconPaths = SVGProps<SVGPathElement> & { el: string };
export type IconList = { [key in IconName]: IconProps };

export interface IconProps extends SVGProps<SVGSVGElement> {
  paths: IconPaths[];
}

export const iconList: IconList = {
  check: {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    paths: [
      {
        el: "path",
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none",
      },
      {
        el: "path",
        d: "M5 12l5 5l10 -10",
      },
    ],
  },
  "chevron-down": {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    paths: [
      {
        el: "path",
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none",
      },
      {
        el: "polyline",
        points: "6 9 12 15 18 9",
      },
    ],
  },
  "chevron-up": {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",

    paths: [
      {
        el: "path",
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none",
      },
      {
        el: "polyline",
        points: "6 15 12 9 18 15",
      },
    ],
  },
  cog: {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
    strokeWidth: 2,
    paths: [
      {
        el: "path",
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none",
      },
      {
        el: "path",
        d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
      },
      {
        el: "circle",
        cx: 12,
        cy: 12,
        r: 3,
      },
    ],
  },
  x: {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    paths: [
      {
        el: "path",
        stroke: "none",
        fill: "none",
        d: "M0 0h24v24H0z",
      },
      {
        el: "line",
        x1: 18,
        y1: 6,
        x2: 6,
        y2: 18,
      },

      {
        el: "line",
        x1: 6,
        y1: 6,
        x2: 18,
        y2: 18,
      },
    ],
  },
};
