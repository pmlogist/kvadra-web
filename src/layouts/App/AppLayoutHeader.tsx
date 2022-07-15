import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
import { useQuery } from "react-query";

import { API } from "@/lib/api";

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface Data {
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export const AppLayoutHeader = ({ onOpen, ...rest }: MobileProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data, isSuccess } = useQuery<Data>("me", API.AUTH.ME);
  const { push } = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (isSuccess) {
      setIsLoaded(true);
    }
  }, [isSuccess]);

  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="50px"
      width="full"
      alignItems="center"
      bg={"white"}
      borderBottomWidth="1px"
      borderBottomColor={"gray.200"}
      justifyContent={{ base: "space-between", md: "space-between" }}
      position="fixed"
      shadow="sm"
      {...rest}
    >
      <Box display={{ base: "none", md: "flex" }}>
        <NextLink href="/app" passHref>
          <Text fontWeight="bold" cursor="pointer">
            kvadra
          </Text>
        </NextLink>
      </Box>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <SkeletonCircle size="8" isLoaded={isLoaded}>
                  <Avatar size="8" />
                </SkeletonCircle>
                <Skeleton
                  isLoaded={isLoaded}
                  display={{ base: "none", md: "flex" }}
                  alignItems="center"
                >
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">
                      {data ? `${data.firstName}` : "Loading..."}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      {data?.isAdmin && "Admin"}
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }} ml="1">
                    <FiChevronDown />
                  </Box>
                </Skeleton>
              </HStack>
            </MenuButton>
            <MenuList bg={"white"} borderColor={"gray.200"}>
              <NextLink href={`/app/profile`} passHref>
                <MenuItem>{t`menu.profile`}</MenuItem>
              </NextLink>
              <NextLink href={`/app/settings`} passHref>
                <MenuItem>{t`menu.settings`}</MenuItem>
              </NextLink>
              <MenuDivider />
              <MenuItem
                onClick={async (e) => {
                  e.preventDefault();
                  await API.AUTH.LOGOUT().then(() => push("/"));
                }}
              >
                {t`layouts.logout`}
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
