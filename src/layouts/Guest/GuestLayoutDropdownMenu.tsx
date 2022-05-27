import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { DropdownMenu, Icon } from "@/components";
import { locales } from "../../../i18n";

export const GuestLayoutDropdownMenu = () => {
  const { asPath, replace } = useRouter();
  const { t } = useTranslation("common");

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger style={{ marginRight: 10, cursor: "pointer" }}>
        <Icon name="cog" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content sideOffset={-10}>
        <DropdownMenu.Label>Settings</DropdownMenu.Label>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Langues</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            {locales.map((locale) => (
              <DropdownMenu.Item
                key={locale}
                onClick={() => replace({ href: asPath }, null, { locale })}
                style={{ cursor: "pointer" }}
              >
                {t(`layouts.lang-name-${locale}`)}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
