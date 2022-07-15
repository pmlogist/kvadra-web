import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { Input, Page } from "@/components";
import { GuestLayout } from "@/layouts/Guest";
import { API } from "@/lib/api";
import { withGuestServerSideProps } from "@/middlewares";
import { authSchemas, RequestRegisterBody } from "@/schemas/authSchemas";
import { NextPage } from "@/types";
import { Req } from "@/types/requests";

const LOCALE = ["en", "fr", "ru"];

const SignUpPage: NextPage = () => {
  const { t } = useTranslation("auth");
  const { locale, push } = useRouter();
  const { mutate } = useMutation(API.AUTH.REGISTER);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RequestRegisterBody>({
    resolver: zodResolver(authSchemas.register),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    mutate(data, {
      onSuccess: async () => {
        push("/app");
      },
      onError: async (data: {
        message: string;
        field: keyof Req.RegisterBody;
      }) => {
        if (data.message === "ALREADY_EXISTS") {
          setError(
            data.field,
            { message: t(`errors.unique.${data.field}`) },
            { shouldFocus: true }
          );
        }
      },
    });
  };

  return (
    <Page title={t`common:layouts.sign-up`}>
      <Flex minH={"full"} align={"center"} justify={"center"} bg={"gray.50"}>
        <Stack spacing={3} mx={"auto"} maxW={"lg"} py={6} px={2}>
          <Stack align={"center"}>
            <Heading fontSize={{ base: "2xl", md: "4xl" }}>
              {t`sign-up-h1`}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={"gray.600"}>
              {t`sign-up-excerpt`}
              ✌️
            </Text>
          </Stack>

          <Box
            onSubmit={handleSubmit(onSubmit)}
            as="form"
            rounded={"lg"}
            bg={"white"}
            boxShadow={"lg"}
          >
            <Stack p={5} maxW="lg">
              <Stack>
                <HStack>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                    label={t`first-name`}
                    register={register}
                    errors={errors.firstName}
                    bg="white"
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    label={t`last-name`}
                    register={register}
                    errors={errors.lastName}
                    bg="white"
                  />
                </HStack>
                <Input
                  type="text"
                  name="username"
                  placeholder="jane@me.com"
                  label={t`username`}
                  register={register}
                  errors={errors.username}
                  bg="white"
                />
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
                <Text>{t`native-language`}</Text>
                <Select defaultValue={locale} {...register("locale")}>
                  {LOCALE.map((loc) => (
                    <option key={loc} value={loc}>
                      {t(`common:layouts.lang-name-${loc}`)}
                    </option>
                  ))}
                </Select>

                <Text>{t`learning`}</Text>
                <Select {...register("learning")}>
                  {LOCALE.filter(
                    (loc) => loc.slice(0, loc.length - 1) !== locale
                  ).map((loc) => (
                    <option key={loc} value={loc}>
                      {t(`common:layouts.lang-name-${loc}`)}
                    </option>
                  ))}
                </Select>
              </Stack>

              <Stack spacing={6} align={"end"}>
                <Button
                  type="submit"
                  style={{ width: "100%", marginBottom: 10 }}
                >
                  {t`common:layouts.sign-up`}
                </Button>
                <Text>
                  {t`sign-in-message`}{" "}
                  <NextLink href="/sign-in" passHref>
                    <Link color="blue.500">{t`common:layouts.sign-in`}</Link>
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
SignUpPage.getLayout = GuestLayout;
export default SignUpPage;

export const getServerSideProps = withGuestServerSideProps();
