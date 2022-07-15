import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { Input, Page } from "@/components";
import { GuestLayout } from "@/layouts/Guest";
import { API } from "@/lib/api";
import { withGuestServerSideProps } from "@/middlewares";
import { authSchemas } from "@/schemas/authSchemas";
import { NextPage } from "@/types";

interface FormValues {
  email: string;
  password: string;
}

const SignInPage: NextPage = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation("auth");
  const { push } = useRouter();
  const { mutate } = useMutation(API.AUTH.LOGIN);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(authSchemas.login),
  });

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: () => {
        push("/app");
      },
      onError: () => {
        setShow(true);
      },
    });
  };

  return (
    <Page title={t`common:layouts.sign-in`}>
      <Flex
        minH={"full"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={3} mx={"auto"} maxW={"lg"} py={6} px={2}>
          <Stack align={"center"}>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
            >{t`sign-in-h1`}</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={"gray.600"}>
              {t`sign-in-excerpt`}
              ✌️
            </Text>
          </Stack>

          <Box
            onSubmit={handleSubmit(onSubmit)}
            as="form"
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            {show && (
              <Alert status="error" borderRadius={5} variant="top-accent">
                <AlertIcon />
                <AlertDescription>
                  {t`errors.messages.wrong-credentials`}
                </AlertDescription>
              </Alert>
            )}
            <Stack>
              <Input
                type="text"
                name="email"
                label={t`email`}
                placeholder="jane@me.com"
                errors={errors.email}
                register={register}
                bg="white"
              />
              <Input
                type="password"
                name="password"
                placeholder="jane@me.com"
                label={t`password`}
                register={register}
                errors={errors.password}
                bg="white"
              />
            </Stack>

            <Stack spacing={6}>
              <HStack justify="space-between">
                <Checkbox defaultChecked>{t`remember-me`}</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  {t`forgot-password`}
                </Button>
              </HStack>
              <Stack spacing={6} align={"end"}>
                <Button
                  type="submit"
                  style={{ width: "100%", marginBottom: 10 }}
                >
                  {t`common:layouts.sign-in`}
                </Button>
                <Text>
                  {t`sign-up-message`}{" "}
                  <NextLink href="/sign-up" passHref>
                    <Link color="blue.500">{t`common:layouts.sign-up`}</Link>
                  </NextLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Page>
  );
};
SignInPage.getLayout = GuestLayout;
export default SignInPage;

export const getServerSideProps = withGuestServerSideProps();
