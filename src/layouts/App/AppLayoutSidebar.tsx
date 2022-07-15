import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  FlexProps,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { forwardRef, ReactNode } from "react";
import { IconType } from "react-icons";
import { FiCheckSquare, FiDatabase, FiMusic } from "react-icons/fi";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}
const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ icon, children, ...rest }, ref) => {
    return (
      <Link
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
        ref={ref}
      >
        <Flex
          align="center"
          px="4"
          py="2"
          mx="4"
          borderRadius="md"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "blue.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  }
);
NavItem.displayName = "NavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Quiz", href: "/app/quiz", icon: FiCheckSquare },
  { name: "Jukebox", href: "/app/jukebox", icon: FiMusic },
  { name: "History", href: "/app/history", icon: FiDatabase },
];

export interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="2s fade"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        display={{ base: "space-between", md: "none" }}
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <NextLink href="/app" passHref>
          <Text fontWeight="bold" cursor="pointer" fontSize="2xl">
            kvadra
          </Text>
        </NextLink>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Stack mt={{ base: 0, md: `${50 + 10}px` }}>
        {LinkItems.map((link) => (
          <NextLink key={link.name} href={link.href} passHref>
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          </NextLink>
        ))}
      </Stack>
    </Box>
  );
};
