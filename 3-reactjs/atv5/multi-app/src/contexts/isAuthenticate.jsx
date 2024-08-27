import { createContext } from "react";

const isAuthenticate = createContext({
  isAuthenticate: false,
  setIsAuthenticate: () => {},
});

export default isAuthenticate;
