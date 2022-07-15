import {
  Badge,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useQuery } from "react-query";

import { Page } from "@/components";
import { AppLayout } from "@/layouts/App";
import { API } from "@/lib/api";
import { withAuthServerSideProps } from "@/middlewares";

const QuizzesPage = () => {
  const { data: quizzes, isLoading } = useQuery("quizzes", API.QUIZ.ALL);
  const { asPath, push } = useRouter();
  const { t } = useTranslation("game");

  return (
    <Page title={t`title`}>
      <Box
        p={4}
        h="full"
        display={{ base: "flex", md: "block" }}
        flexDir="column"
        alignItems="center"
      >
        <Heading>{t`title`}</Heading>

        {isLoading ? (
          <Center h="full">
            <Spinner h={200} w={200} />
          </Center>
        ) : (
          <Box pt={4}>
            {quizzes.map((quiz) => (
              <Box
                key={quiz.id}
                maxW={"270px"}
                minW={"270px"}
                w={"full"}
                bg={"white"}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
              >
                <Image
                  alt="img"
                  h={"120px"}
                  w={"full"}
                  src={quiz.thumbnail}
                  objectFit={"cover"}
                />

                <Box p={6}>
                  <Stack spacing={0} align={"center"} mb={5}>
                    <Heading
                      fontSize={"2xl"}
                      fontWeight={500}
                      fontFamily={"body"}
                      mb={2}
                    >
                      {quiz.title}
                    </Heading>
                    <VStack align={"flex-start"}>
                      <HStack>
                        <Text>{t`theme`}</Text>
                        <Badge variant="solid">{quiz.theme}</Badge>
                      </HStack>
                      <HStack>
                        <Text>{t`level`}</Text>
                        <Badge variant="subtle">{quiz.level}</Badge>
                      </HStack>
                    </VStack>
                  </Stack>

                  <Button
                    w={"full"}
                    bg={"#151f21"}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    onClick={() => push(`${asPath}/${quiz.id}`)}
                  >
                    {" "}
                    {t`start`}
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Page>
  );
};
QuizzesPage.getLayout = AppLayout;
export default QuizzesPage;

export const getServerSideProps = withAuthServerSideProps();
