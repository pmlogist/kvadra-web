import { atom, useAtom } from "jotai";
import { atomWithHash, useUpdateAtom } from "jotai/utils";
import { Page } from "@/components";
import { ShellLayout } from "@/layouts/Shell/ShellLayout";
import { quizAtom } from "@/lib/atoms";
import { inspect } from "@xstate/inspect";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Router from "next/router";
import { atomWithQuery } from "jotai/query";

// if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
//   inspect({ iframe: false });
// }
const idAtom = atomWithHash("theme", 4, {
  replaceState: true,
  subscribe: (callback) => {
    Router.events.on("routeChangeComplete", callback);
    window.addEventListener("hashchange", callback);
    return () => {
      Router.events.off("routeChangeComplete", callback);
      window.removeEventListener("hashchange", callback);
    };
  },
});

const userAtom = atomWithQuery((get) => ({
  queryKey: ["users", get(idAtom)],
  queryFn: async ({ queryKey: [, theme] }) => {
    console.log(theme);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${theme}`
    );
    return res.json();
  },
}));

const QuizThemePage = () => {
  // const [state, send] = useAtom(quizAtom);
  const set = useUpdateAtom(idAtom);
  useEffect(() => {
    set(6);
  }, [set]);

  // const handleClick = () => {
  //   send({ type: "FETCH" });
  // };

  // useEffect(() => {
  //   send({
  //     type: "FETCH",
  //     data,
  //   });
  // }, [data, send]);
  const [data, setData] = useAtom(userAtom);

  return (
    <Page title="quiz">
      <h1>Quiz</h1>

      {data && JSON.stringify(data)}
    </Page>
  );
};
QuizThemePage.getLayout = ShellLayout;
export default QuizThemePage;
