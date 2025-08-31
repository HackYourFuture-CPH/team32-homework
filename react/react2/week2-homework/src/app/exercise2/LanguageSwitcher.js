"use client";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { LanguageContext, languages } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div>
      <p>Current language: {languages[lang].label}</p>
      <Button
        variant="contained"
        onClick={() => setLang(lang === "en" ? "ru" : "en")}
      >
        Switch to {lang === "en" ? "Russian" : "English"}
      </Button>
    </div>
  );
}
