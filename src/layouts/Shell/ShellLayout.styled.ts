import { styled } from "@/lib/styles/stitches";

const Wrapper = styled("div", {
  height: "100%",
});

const Container = styled("div", {
  display: "flex",
  height: "100%",
});

const Content = styled("main", {
  paddingTop: 50,
});

const Toggler = styled("button", {
  display: "none",
  variants: {
    bp: {
      mobile: {
        display: "inline-block",
      },
    },
  },
});

export const StyledShellLayout = {
  Container,
  Wrapper,
  Content,
  Toggler,
};
