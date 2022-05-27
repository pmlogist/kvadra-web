import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Select, SelectItem } from "@/components";
import { locales } from "../../../i18n";

export const ChangeLocal = () => {
  const { asPath, replace, locale } = useRouter();
  const { t } = useTranslation("common");

  function handleChange(value: string) {
    replace(asPath, null, { locale: value });
  }

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      {locales.map((locale) => (
        <SelectItem key={locale} value={locale}>
          {t(`layouts.lang-name-${locale}`)}
        </SelectItem>
      ))}
    </Select>
  );
};
