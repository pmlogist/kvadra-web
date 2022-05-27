import Head from "next/head";
import { FC, Fragment, ReactNode } from "react";

export interface PageProps {
  children: ReactNode;
  title: string;
}
export const Page: FC<PageProps> = (props) => {
  const { children, title } = props;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </Fragment>
  );
};
Page.displayName = "Page";
