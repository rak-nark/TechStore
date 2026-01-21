import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./Componets/styles/GlobalStyles";
import Header from "./Componets/layout/Header/Header";
import { darkTheme, lightTheme } from "./Componets/styles/themes";

export const App = () => {
  const [theme, setTheme] = useState("dark");

  // cargar tema guardado
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // guardar tema
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => (t === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
