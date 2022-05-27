import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Anchor, Center } from "@/components";
import { styled } from "@/lib/styles/stitches";

const C = styled("div", {
  height: "inherit",
});

const Container = () => {
  const { t } = useTranslation("home");
  return (
    <C css={{ margin: "0 10px" }}>
      <Center direction="col" css={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 60 }}>{t`h1`}</h1>

        <Link href="/app">
          <Anchor>Start now</Anchor>
        </Link>
      </Center>
    </C>
  );
};

export const HomeUI = { Container };
