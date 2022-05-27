import Link from "next/link";
import { Header as BaseHeader, Icon } from "@/components";
import { Brand, HeaderToggleProps } from "@/components/Header";
import { StyledShellLayout } from "./ShellLayout.styled";

export interface ShellLayoutHeaderProps extends HeaderToggleProps {}

export const Header = (props: ShellLayoutHeaderProps) => {
  const { open, setOpen } = props;

  return (
    <BaseHeader
      left={
        <Link href="/" passHref>
          <Brand css={{ marginLeft: 10 }}>kvadra</Brand>
        </Link>
      }
      right={
        <StyledShellLayout.Toggler
          onClick={() => setOpen(!open)}
          bp={{ "@lg": "mobile" }}
        >
          {!open ? <Icon name="x" /> : <Icon name="x" />}
        </StyledShellLayout.Toggler>
      }
    />
  );
};
