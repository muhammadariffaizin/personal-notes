import ColorSchemeContext from "../contexts/colorScheme";
import { useContext } from "react";

const useColorScheme = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);
  const toggleColorScheme = () => {
    setColorScheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return { colorScheme, setColorScheme, toggleColorScheme };
};

export default useColorScheme;
