import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Progress,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import Error from "next/error";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";

import { Page } from "@/components";
import { QuizLayout } from "@/layouts/Quiz";
import { quizMachine } from "@/lib/machines";
import { withAuthServerSideProps } from "@/middlewares";

const QuizPage = () => {
  const { t } = useTranslation("game");
  const { query } = useRouter();
  const [state, send] = useMachine(quizMachine);
  const [page, setPage] = useState(0);
  const [choice, setChoice] = useState(null);
  const { length, questions, score } = state.context;

  useEffect(() => {
    if (state.value === "idle") {
      send("FETCH", { gameId: query.gameId.toString() });
    }
  }, [query.gameId, send, state.value]);

  const handleClick = (id: number) => {
    send({
      type: page !== length - 1 ? "NEXT" : "FINISH",
      value: { id, choice },
    });
    setChoice("");
    setPage(page + 1);
  };

  if (state.value === "notfound") {
    return <Error statusCode={404} />;
  }

  return (
    <Page title={t`title`}>
      {length && (
        <Progress pos="fixed" width="full" value={page + 1} max={length} />
      )}
      <Flex bg="gray.100" h="full" align="center" justify="center">
        {questions && questions[page] && (
          <Stack spacing={8}>
            <Box bg="white" shadow="lg" rounded="md" p={8} minW="300px">
              <Stack spacing={6}>
                <Center>
                  <Heading>{questions[page].question}</Heading>
                </Center>
                <Divider />
                <RadioGroup
                  onChange={setChoice}
                  value={choice}
                  as={Stack}
                  name={`quiz-choice`}
                >
                  {questions[page].answers.map((answer, i) => (
                    <Radio
                      key={i}
                      type="radio"
                      value={answer}
                      defaultChecked={false}
                    >
                      {answer}
                    </Radio>
                  ))}
                </RadioGroup>

                <Button
                  disabled={!choice}
                  onClick={() => handleClick(questions[page].id)}
                >
                  {page !== length - 1 ? t`next` : t`finish`}
                </Button>
              </Stack>
            </Box>
          </Stack>
        )}
        {score && (
          <Stack>
            <Heading>
              Score
              <Divider />
              {score} / {length}
            </Heading>

            <NextLink href="/app/quiz" passHref>
              <Button>{t`quit`}</Button>
            </NextLink>
          </Stack>
        )}
      </Flex>
    </Page>
  );
};
QuizPage.getLayout = QuizLayout;
export default QuizPage;

export const getServerSideProps = withAuthServerSideProps();
