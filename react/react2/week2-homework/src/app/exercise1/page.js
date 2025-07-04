"use client";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { lightTheme, darkTheme } from "./theme";

export default function AppWithMuiTheme() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () =>
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Button Theme
      </Button>
    </ThemeProvider>
  );
}
