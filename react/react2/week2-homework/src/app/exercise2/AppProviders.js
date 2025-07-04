"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  LanguageProvider,
  useLanguage,
  languages,
} from "./LanguageContext.jsx";

function ThemedApp({ children }) {
  const { lang } = useLanguage();
  const theme = createTheme({}, languages[lang].locale);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={languages[lang].locale}
      >
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default function AppProviders({ children }) {
  return (
    <LanguageProvider>
      <ThemedApp>{children}</ThemedApp>
    </LanguageProvider>
  );
}
