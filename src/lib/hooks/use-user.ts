import Router from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { fetcher } from "../api";

export const useUser = ({
  redirectTo,
  type,
}: {
  redirectTo: string;
  type: string;
}) => {
  const { data, error } = useQuery("me", () => fetcher("/auth/me"), {
    refetchOnWindowFocus: "always",
  });
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    switch (type) {
      case "guest":
        if (data && !data.error) {
          Router.push(redirectTo);
        }
        break;
      case "auth":
        break;
    }
  }, []);
  console.log(error);

  return { user, authenticated };
};
