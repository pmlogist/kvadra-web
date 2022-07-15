import { Box, Center, Flex, VStack } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

import { BaseLayoutSchema } from "../BaseLayout";

export interface QuizLayoutSchemaProps {
  children: React.ReactNode;
}

export const QuizLayoutSchema: FC<QuizLayoutSchemaProps> = (props) => {
  const { children } = props;

  return (
    <Box h="100%" w="100%">
      {children}
    </Box>
  );
};
QuizLayoutSchema.displayName = "QuizLayoutSchema";

export const QuizLayout: FC<ReactElement> = (page) => {
  return (
    <BaseLayoutSchema>
      <QuizLayoutSchema>{page}</QuizLayoutSchema>
    </BaseLayoutSchema>
  );
};
QuizLayout.displayName = "QuizLayout";
