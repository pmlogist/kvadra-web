import { Box, Center, Container, Heading, Stack } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

import { Page } from "@/components";
import { AppLayout } from "@/layouts/App";
import { withAuthServerSideProps } from "@/middlewares";

const AppPage = () => {
  const { t } = useTranslation("common");
  return (
    <Page title="Jukebox">
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
              {t`unavailable`}
            </Heading>
          </Stack>
        </Container>
      </Center>
    </Page>
  );
};
AppPage.getLayout = AppLayout;
export default AppPage;

export const getServerSideProps = withAuthServerSideProps();
