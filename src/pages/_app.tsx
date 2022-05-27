import "@/lib/styles/app.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { inspect } from "util";
import { QueryClient, QueryClientProvider } from "react-query";
import { useUpdateAtom } from "jotai/utils";
import { queryClientAtom } from "jotai/query";
import { Provider } from "jotai";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const setQueryClient = useUpdateAtom(queryClientAtom);

  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export default App;
