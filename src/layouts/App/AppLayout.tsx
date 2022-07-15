import { Box, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import Router from "next/router";
import { FC, ReactElement, useEffect } from "react";

import { BaseLayoutSchema } from "../BaseLayout";
import { AppLayoutDrawer } from "./AppLayoutDrawer";
import { AppLayoutHeader } from "./AppLayoutHeader";
import { SidebarContent } from "./AppLayoutSidebar";

export interface AppLayoutSchemaProps {
  children: React.ReactNode;
}

export const AppLayoutSchema: FC<AppLayoutSchemaProps> = (props) => {
  const { children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isOpen) {
      Router.events.on("routeChangeComplete", onClose);
    }
    return () => {
      Router.events.off("routeChangeComplete", onClose);
    };
  });

  return (
    <Box h="full" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <AppLayoutDrawer isOpen={isOpen} onClose={onClose} />

      <AppLayoutHeader onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} pt="50px" h="full">
        {children}
      </Box>
    </Box>
  );
};
AppLayoutSchema.displayName = "AppLayoutSchema";

export const AppLayout: FC<ReactElement> = (page) => {
  return (
    <BaseLayoutSchema>
      <AppLayoutSchema>{page}</AppLayoutSchema>
    </BaseLayoutSchema>
  );
};
AppLayout.displayName = "AppLayout";
