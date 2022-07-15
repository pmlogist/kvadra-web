import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

import { fetcher } from "@/lib/api";

const AuthContext = createContext({ user: null });

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<{ user: any }>(null);
  const { data, error } = useQuery("me", () => fetcher("/auth/me"), {});

  useEffect(() => {
    if (!error) {
      setUser(data);
    }
  }, [data, error, user]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
