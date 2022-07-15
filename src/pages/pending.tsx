import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Page } from "@/components";
import { BaseLayout } from "@/layouts/BaseLayout";
import { API } from "@/lib/api";
import { withAuthServerSideProps } from "@/middlewares";

const PendingPage = () => {
  const { push } = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    await API.AUTH.LOGOUT().then(() => push("/"));
  };

  return (
    <Page title="Pending account">
      <Box position="fixed" right={0} m={4}>
        <Button onClick={handleClick}>Logout</Button>
      </Box>
      <Flex justify="center" h="full" align="center">
        <Stack>
          <Text fontSize="6xl">Your account has not been confirmed</Text>
          <Text fontSize="4xl" color="gray.500">
            An administrator will activate your account shortly
          </Text>
        </Stack>
      </Flex>
    </Page>
  );
};
PendingPage.getLayout = BaseLayout;
export default PendingPage;

export const getServerSideProps = withAuthServerSideProps(null, {
  redirectTo: "/",
});
