import { Box, Flex } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

import { BaseLayoutSchema } from "../BaseLayout";
import { GuestLayoutFooter } from "./GuestLayoutFooter";
import { GuestLayoutHeader } from "./GuestLayoutHeader";

export interface GuestLayoutSchemaProps {
  children: React.ReactNode;
}

export const GuestLayoutSchema: FC<GuestLayoutSchemaProps> = (props) => {
  const { children } = props;

  return (
    <Box h="100%" w="100%">
      <GuestLayoutHeader />

      <Box w="full" h="full" pt={{ base: `${60}px`, md: `${50}px` }}>
        {children}
      </Box>

      <GuestLayoutFooter />
    </Box>
  );
};
GuestLayoutSchema.displayName = "GuestLayoutSchema";

export const GuestLayout: FC<ReactElement> = (page) => {
  return (
    <BaseLayoutSchema>
      <GuestLayoutSchema>{page}</GuestLayoutSchema>
    </BaseLayoutSchema>
  );
};
GuestLayout.displayName = "GuestLayout";
