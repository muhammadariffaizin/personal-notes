import { createContext } from "react";

const ColorSchemeContext = createContext({
  colorScheme: "light",
  setColorScheme: () => {},
});

export default ColorSchemeContext;
