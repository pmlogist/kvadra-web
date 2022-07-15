import { Box, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";

import { Page } from "@/components";
import { AppLayout } from "@/layouts/App";
import { withAuthServerSideProps } from "@/middlewares";

const AppPage = () => {
  return (
    <Page title="Dashboard">
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
              Grind your knowledge
              <br />
              <Text as={"span"} color={"blue.400"}>
                with our games
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              This project is in alpha and will have drastic change over the
              time. For now, just have fun trying our quiz games :)
            </Text>
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
AppPage.getLayout = AppLayout;
export default AppPage;

export const getServerSideProps = withAuthServerSideProps();
