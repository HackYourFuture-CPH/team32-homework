"use client";
import { useLanguage } from "./LanguageContext.jsx";
import AppProviders from "./AppProviders";
import LanguageSwitcher from "./LanguageSwitcher";

function Greeting() {
  const { lang } = useLanguage();
  return <p>{lang === "ru" ? "Привет, мир!" : "Hello, world!"}</p>;
}

export default function Page() {
  return (
    <AppProviders>
      <LanguageSwitcher />
      <Greeting />
    </AppProviders>
  );
}
