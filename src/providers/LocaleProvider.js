import { useState } from "react";
import LanguageContext from "../contexts/language";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("id");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
