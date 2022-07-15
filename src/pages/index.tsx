import { Box, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

import { Page } from "@/components";
import { GuestLayout } from "@/layouts/Guest";
import { withGuestServerSideProps } from "@/middlewares";

const HomePage = () => {
  const { t } = useTranslation("home");
  return (
    <Page title={t`title`}>
      <Center h="full">
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              {t`h1-1`}
              <br />
              <Text as={"span"} color={"blue.400"}>
                {t`h1-2`}
              </Text>
            </Heading>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            ></Stack>
          </Stack>
        </Container>
      </Center>
    </Page>
  );
};
HomePage.getLayout = GuestLayout;
export default HomePage;

export const getServerSideProps = withGuestServerSideProps();
