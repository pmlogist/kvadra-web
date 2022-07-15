import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Select,
  SlideFade,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";

import i18nConfig from "../../../i18n";
import { FiMeh, FiMenu, FiX } from "react-icons/fi";

export const GuestLayoutHeader = () => {
  const { events } = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (isOpen) {
      events.on("routeChangeComplete", onToggle);
    }
    return () => {
      events.off("routeChangeComplete", onToggle);
    };
  }, [events, isOpen, onToggle]);

  return (
    <>
      <Flex
        as="nav"
        position="fixed"
        h={{ base: "60px", md: "50px" }}
        zIndex={1}
        w="100%"
        borderBottomWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        align={"center"}
        bg="white"
        justify={"space-between"}
      >
        <Logo />
        <Hamburger isOpen={isOpen} onToggle={onToggle} />
        <Box display={{ base: "none", md: "inline-flex" }} mr={5}>
          <AuthButtons />
          <ChangeLanguage />
        </Box>
      </Flex>
      <Box
        position="fixed"
        visibility={isOpen ? "visible" : "hidden"}
        top={{ base: "60px", md: "50px" }}
        zIndex={1}
        h="full"
        w="full"
        bg="blackAlpha.300"
        backdropFilter="blur(10px)"
      >
        <HamburgerMenu isOpen={isOpen} />
      </Box>
    </>
  );
};

const Logo = () => (
  <NextLink href="/" passHref>
    <Text px="4" fontWeight="bold" cursor="pointer">
      kvadra
    </Text>
  </NextLink>
);

const Hamburger = ({ onToggle, isOpen }) => (
  <Flex px={4} flex={{ md: "auto" }} ml={{ base: -2 }} display={{ md: "none" }}>
    <IconButton
      onClick={onToggle}
      icon={isOpen ? <FiX /> : <FiMenu />}
      variant={"ghost"}
      aria-label={"Toggle Navigation"}
    />
  </Flex>
);

const NAV_LINKS = [
  { key: "sign-in", href: "/sign-in" },
  { key: "sign-up", href: "/sign-up" },
];

const AuthButtons = () => {
  const { t } = useTranslation("common");

  return (
    <ButtonGroup>
      {NAV_LINKS.map(({ key, href }) => (
        <NextLink key={key} href={href}>
          <Button
            size={{ base: "lg", md: "md" }}
            variant={key === "sign-in" ? "ghost" : "solid"}
          >
            {t(`layouts.${key}`)}
          </Button>
        </NextLink>
      ))}
    </ButtonGroup>
  );
};

const HamburgerMenu = ({ isOpen }) => (
  <SlideFade in={isOpen} offsetY={20}>
    <Box flexDirection="column" bg="white" shadow="md" zIndex={2}>
      <Box p={8}>
        <Stack spacing={6}>
          <Heading>Alpha ver. 0.1.1</Heading>

          <Divider />

          <Flex justify="center" align="center">
            <AuthButtons />
          </Flex>

          <Divider />

          <ChangeLanguage />
        </Stack>
      </Box>
      <Divider />
      <FooterMobile />
    </Box>
  </SlideFade>
);

const FooterMobile = () => {
  const { t } = useTranslation("common");
  return (
    <Box borderBottomWidth={1} borderStyle={"solid"}>
      <Container
        as={Stack}
        py={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 kvadra . {t`layouts.all-right-reserved`}</Text>
      </Container>
    </Box>
  );
};

const ChangeLanguage = () => {
  const { locales } = i18nConfig;
  const { t } = useTranslation("common");
  const { asPath, locale, push } = useRouter();

  const handleChange = (e: any) => {
    push({ href: asPath }, null, { locale: e.target.value });
  };

  return (
    <HStack>
      <Text display={{ base: "block", md: "none" }}>{t`layouts.language`}</Text>
      <Select defaultValue={locale} onChange={handleChange}>
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {t(`layouts.lang-name-${locale}`)}
          </option>
        ))}
      </Select>
    </HStack>
  );
};
