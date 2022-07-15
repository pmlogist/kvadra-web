import { createContext, useContext } from "react";

export const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  <UserContext.Provider value={{ user: null }}>
    {children}
  </UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
