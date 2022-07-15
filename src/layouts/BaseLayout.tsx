import { ChakraProvider } from "@chakra-ui/react";

export interface BaseLayoutSchemaProps {
  children: React.ReactNode;
}

export const BaseLayoutSchema = (props: BaseLayoutSchemaProps) => {
  const { children } = props;

  return <ChakraProvider>{children}</ChakraProvider>;
};

export const BaseLayout = (page: React.ReactElement) => {
  return <BaseLayoutSchema>{page}</BaseLayoutSchema>;
};
