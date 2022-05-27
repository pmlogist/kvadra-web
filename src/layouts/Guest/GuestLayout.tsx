import Link from "next/link";
import { FC, ReactElement } from "react";
import { Brand, Center, Header } from "@/components";
import { styled } from "@/lib/styles/stitches";
import { BaseLayoutSchema } from "../BaseLayout";
import { GuestLayoutDropdownMenu } from "./GuestLayoutDropdownMenu";
import { ChangeLocal } from "./ChangeLocal";

export interface GuestLayoutSchemaProps {
  children: React.ReactNode;
}

const Wrapper = styled("div", {
  height: "100%",
});

export const GuestLayoutSchema: FC<GuestLayoutSchemaProps> = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Header
        left={
          <Link href="/" passHref>
            <Brand css={{ marginLeft: 10 }}>kvadra</Brand>
          </Link>
        }
        right={
          <Center css={{ marginRight: 10 }}>
            <ChangeLocal />
          </Center>
        }
      />
      {children}
    </Wrapper>
  );
};
GuestLayoutSchema.displayName = "GuestLayoutSchema";

export const GuestLayout: FC<ReactElement> = (page) => {
  return (
    <BaseLayoutSchema>
      <GuestLayoutSchema>{page}</GuestLayoutSchema>
    </BaseLayoutSchema>
  );
};
GuestLayout.displayName = "GuestLayout";
