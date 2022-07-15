import {
  Box,
  Button,
  Center,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";

import { Page } from "@/components";
import { AppLayout } from "@/layouts/App";
import { API } from "@/lib/api";
import { withAuthServerSideProps } from "@/middlewares";
import {
  RequestSettingsAllBody,
  settingsSchemas,
} from "@/schemas/settingsSchemas";

const LOCALE = ["en", "fr", "ru"];

const SettingsPage = () => {
  const { data, refetch } = useQuery("getSettings", API.SETTINGS.ALL);
  const { mutate } = useMutation(API.SETTINGS.EDIT);
  const { t } = useTranslation("common");
  const { asPath, push } = useRouter();
  const { register, handleSubmit } = useForm<RequestSettingsAllBody>({
    resolver: zodResolver(settingsSchemas.all),
  });

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: () => {
        push({ href: asPath }, null, { locale: data.locale });

        refetch();
      },
    });
  };

  return (
    <Page title={t`menu.settings`}>
      <Stack p={4} h="full">
        <Heading>{t`menu.settings`}</Heading>
        <Center h="full">
          {data && data.locale && (
            <Box p={4} borderRadius="md" shadow="md" bg="white" minW={200}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={6}>
                  <Text fontWeight="bold">{t`native-language`}</Text>
                  <Select {...register("locale")} defaultValue={data.locale}>
                    {LOCALE.map((loc) => (
                      <option key={loc} value={loc}>
                        {t(`common:layouts.lang-name-${loc}`)}
                      </option>
                    ))}
                  </Select>

                  <Text fontWeight="bold">{t`learning`}</Text>
                  <Select
                    defaultValue={data.learning}
                    {...register("learning")}
                  >
                    {LOCALE.map((loc) => (
                      <option key={loc} value={loc}>
                        {t(`common:layouts.lang-name-${loc}`)}
                      </option>
                    ))}
                  </Select>

                  <Button type="submit">{t`save`}</Button>
                </Stack>
              </form>
            </Box>
          )}
        </Center>
      </Stack>
    </Page>
  );
};
SettingsPage.getLayout = AppLayout;
export default SettingsPage;

export const getServerSideProps = withAuthServerSideProps();
