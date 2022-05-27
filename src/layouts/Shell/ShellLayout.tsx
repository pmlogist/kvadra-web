import { useState } from "react";
import { BaseLayoutSchema } from "../BaseLayout";
import { Navigation } from "./Navigation";
import { Header } from "./Header";
import { StyledShellLayout } from "./ShellLayout.styled";
import { styled } from "@/lib/styles/stitches";

export interface ShellLayoutSchemaProps {
  children: React.ReactNode;
}

const Test = styled(Navigation, {
  backgroundColor: "Tomato",
});

export const ShellLayoutSchema = (props: ShellLayoutSchemaProps) => {
  const [open, setOpen] = useState(false);
  const { children } = props;

  return (
    <StyledShellLayout.Wrapper>
      <Header open={open} setOpen={setOpen} />

      <StyledShellLayout.Container>
        <Test open={open} setOpen={setOpen}>
          Navbar
        </Test>

        <StyledShellLayout.Content>{children}</StyledShellLayout.Content>
      </StyledShellLayout.Container>
    </StyledShellLayout.Wrapper>
  );
};

export const ShellLayout = (page: React.ReactElement) => {
  return (
    <BaseLayoutSchema>
      <ShellLayoutSchema>{page}</ShellLayoutSchema>
    </BaseLayoutSchema>
  );
};
