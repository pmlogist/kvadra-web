import { inspect } from "@xstate/inspect";
import { globalStyles } from "@/lib/styles/globals";

export interface BaseLayoutSchemaProps {
  children: React.ReactNode;
}

export const BaseLayoutSchema = (props: BaseLayoutSchemaProps) => {
  const { children } = props;

  globalStyles();

  return <>{children}</>;
};

export const BaseLayout = (page: React.ReactElement) => {
  return <BaseLayoutSchema>{page}</BaseLayoutSchema>;
};
