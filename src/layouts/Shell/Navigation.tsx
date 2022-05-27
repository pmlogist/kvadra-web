import { FC, ReactNode, useEffect } from "react";
import { styled } from "@/lib/styles/stitches";
import { useRouter } from "next/router";

export interface NavigationProps {
  children: ReactNode;
  open: boolean;
  setOpen: any;
}

export const StyledNavigation = styled("nav", {
  visibility: "visible",
  backgroundColor: "WhiteSmoke",
  height: "100%",
  paddingTop: 50,
  minWidth: 50,
  variants: {
    bp: {
      mobile: {
        visibility: "hidden",
        position: "absolute",
        zIndex: 99,
        width: "100%",
      },
    },
  },
});

export const Navigation: FC<NavigationProps> = (props) => {
  const { children, open, setOpen } = props;
  const { events } = useRouter();

  useEffect(() => {
    if (open) {
      events.on("routeChangeComplete", () => setOpen(false));
      events.on("routeChangeStart", () => setOpen(false));
      events.on("routeChangeError", () => setOpen(false));
    }

    return () => {
      events.off("routeChangeComplete", () => setOpen(false));
      events.off("routeChangeStart", () => setOpen(false));
      events.off("routeChangeError", () => setOpen(false));
    };
  });

  return (
    <StyledNavigation
      css={{ visibility: open && "visible" }}
      bp={{ "@lg": "mobile" }}
    >
      {children}
    </StyledNavigation>
  );
};
