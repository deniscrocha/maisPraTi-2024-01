import { createContext } from "react";

const isAuthenticate = createContext({
  isAuthenticated: false,
  handleAuth: () => {},
});

export default isAuthenticate;
