import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { useQuery } from "react-query";

import { Page } from "@/components";
import { AppLayout } from "@/layouts/App";
import { API } from "@/lib/api";

const flag = (code: string) => `https://flagcdn.com/28x21/${code}.png`;

const ProfilePage = () => {
  const { data, isLoading } = useQuery("profile", API.PROFILE.ME);
  const { t } = useTranslation("common");

  return (
    <Page title="Profile">
      <Box p={4} h="full">
        <Stack h="full">
          <Center h="full">
            {isLoading ? (
              <Spinner h={200} w={200} />
            ) : (
              <Box
                maxW={"270px"}
                w={"full"}
                bg={"white"}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
              >
                <Image
                  w={"full"}
                  alt="background"
                  h={"120px"}
                  src={
                    "https://images.unsplash.com/photo-1658265558865-37258e796cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  }
                  objectFit={"cover"}
                />
                <Flex justify={"center"} mt={-12}>
                  <Avatar
                    size={"xl"}
                    css={{
                      border: "2px solid white",
                    }}
                  />
                </Flex>
                <Box p={6}>
                  <Stack spacing={0} align={"center"} mb={5}>
                    <Heading
                      fontSize={"2xl"}
                      fontWeight={500}
                      fontFamily={"body"}
                    >
                      {`${data.firstName} ${data.lastName}`}
                    </Heading>
                  </Stack>

                  <Stack direction={"row"} justify={"center"} spacing={6}>
                    <Stack spacing={0} align={"center"}>
                      <Image
                        w="20px"
                        src={flag(
                          data.learning === "en" ? "gb" : data.learning
                        )}
                        srcSet={flag(
                          data.learning === "en" ? "gb" : data.learning
                        )}
                        alt={data.learning}
                      />
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {t`learning`}
                      </Text>
                    </Stack>
                    <Stack spacing={0} align={"center"}>
                      <Image
                        w="20px"
                        src={flag(data.locale === "en" ? "gb" : data.locale)}
                        srcSet={flag(data.locale === "en" ? "gb" : data.locale)}
                        alt={data.locale}
                      />
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {t`speaking`}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            )}
          </Center>
        </Stack>
      </Box>
    </Page>
  );
};
ProfilePage.getLayout = AppLayout;
export default ProfilePage;
