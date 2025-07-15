import React, { createContext, useState, useContext } from "react";
import { enUS, ruRU } from "@mui/material/locale";

export const LanguageContext = createContext();

export const languages = {
  en: { label: "English", locale: enUS },
  ru: { label: "Русский", locale: ruRU },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
