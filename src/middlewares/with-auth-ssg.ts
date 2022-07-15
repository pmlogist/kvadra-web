import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { dehydrate, QueryClient } from "react-query";

import { User } from "@/types/responses";

type IncomingGSSP<P> = (
  ctx: GetServerSidePropsContext,
  user: User
) => Promise<P>;

type WithAuthServerSidePropsResult = GetServerSidePropsResult<{
  [key: string]: any;
}>;

type WithAuthServerSidePropsOptions = {
  redirectTo: string;
};

export function withAuthServerSideProps(
  incomingGSSP?: IncomingGSSP<WithAuthServerSidePropsResult> | null,
  options: WithAuthServerSidePropsOptions = { redirectTo: "/sign-in" }
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<WithAuthServerSidePropsResult> => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("me", async () => {
      const response = await fetch(`${process.env.API_URL}/auth/me`, {
        credentials: "include",
        headers: {
          Cookie: ctx.req.headers.cookie,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
    const dehydratedState = dehydrate(queryClient).queries.filter(
      (query) => query.queryKey === "me"
    ) as any;

    let user = null;

    if (dehydratedState.length) {
      if (
        !dehydratedState[0].state.data.isConfirmed &&
        ctx.resolvedUrl !== "/pending"
      ) {
        return {
          redirect: {
            permanent: false,
            destination: `/${ctx.locale}/pending`,
          },
        };
      }

      if (
        dehydratedState[0].state.data.isConfirmed &&
        ctx.resolvedUrl === "/pending"
      ) {
        return {
          redirect: {
            permanent: false,
            destination: `/${ctx.locale}/app`,
          },
        };
      }

      return {
        props: {
          user: dehydratedState[0].state.data,
          dehydratedState,
        },
      };
    }

    if (!dehydratedState.length) {
      return {
        redirect: {
          permanent: false,
          destination: options.redirectTo,
        },
      };
    }

    if (incomingGSSP) {
      const incomingGSSPResult = await incomingGSSP(ctx, user);

      if ("props" in incomingGSSPResult) {
        return {
          props: { ...incomingGSSPResult.props, user, dehydratedState },
        };
      }

      if ("redirect" in incomingGSSPResult) {
        return { redirect: { ...incomingGSSPResult.redirect } };
      }

      if ("notFound" in incomingGSSPResult) {
        return { notFound: incomingGSSPResult.notFound };
      }
    }

    return {
      props: {
        user,
        dehydratedState,
      },
    };
  };
}

export function withGuestServerSideProps(
  incomingGSSP?: IncomingGSSP<WithAuthServerSidePropsResult> | null,
  options: WithAuthServerSidePropsOptions = { redirectTo: "/app" }
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<WithAuthServerSidePropsResult> => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("me", async () => {
      const response = await fetch(`${process.env.API_URL}/auth/me`, {
        credentials: "include",
        headers: {
          Cookie: ctx.req.headers.cookie,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
    const dehydratedState = dehydrate(queryClient).queries.filter(
      (query) => query.queryKey === "me"
    );

    let user = null;

    if (dehydratedState.length) {
      return {
        redirect: {
          permanent: false,
          destination: options.redirectTo,
        },
      };
    }

    if (incomingGSSP) {
      const incomingGSSPResult = await incomingGSSP(ctx, user);

      if ("props" in incomingGSSPResult) {
        return {
          props: { ...incomingGSSPResult.props, user, dehydratedState },
        };
      }

      if ("redirect" in incomingGSSPResult) {
        return { redirect: { ...incomingGSSPResult.redirect } };
      }

      if ("notFound" in incomingGSSPResult) {
        return { notFound: incomingGSSPResult.notFound };
      }
    }

    return {
      props: {
        user,
        dehydratedState,
      },
    };
  };
}

export function withGuestStaticProps(
  incomingGSSP?: IncomingGSSP<WithAuthServerSidePropsResult> | null,
  options: WithAuthServerSidePropsOptions = { redirectTo: "/app" }
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<WithAuthServerSidePropsResult> => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("me", async () => {
      const response = await fetch("http://localhost:8080/auth/me", {
        credentials: "include",
        headers: {
          Cookie: ctx.req.headers.cookie,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
    const dehydratedState = dehydrate(queryClient).queries.filter(
      (query) => query.queryKey === "me"
    );

    let user = null;

    if (dehydratedState.length) {
      return {
        redirect: {
          permanent: false,
          destination: options.redirectTo,
        },
      };
    }

    if (incomingGSSP) {
      const incomingGSSPResult = await incomingGSSP(ctx, user);

      if ("props" in incomingGSSPResult) {
        return {
          props: { ...incomingGSSPResult.props, user, dehydratedState },
        };
      }

      if ("redirect" in incomingGSSPResult) {
        return { redirect: { ...incomingGSSPResult.redirect } };
      }

      if ("notFound" in incomingGSSPResult) {
        return { notFound: incomingGSSPResult.notFound };
      }
    }

    return {
      props: {
        user,
        dehydratedState,
      },
    };
  };
}
