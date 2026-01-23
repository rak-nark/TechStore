import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./Componets/styles/GlobalStyles";
import Header from "./Componets/layout/Header/Header";
import Newsletter from "./Componets/layout/Newsletter/Newsletter";
import TechStoreHomePage from "./Pages/TechStoreHomePage";
import TechStoreCatalog from "./Pages/TechStoreCatalog";
import TechStoreProductDetail from "./Pages/TechStoreProductDetail";
import { darkTheme, lightTheme } from "./Componets/styles/themes";

export const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Header onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<TechStoreHomePage />} />
          <Route path="/catalog" element={<TechStoreCatalog />} />
          <Route path="/catalog/:category" element={<TechStoreCatalog />} />
          <Route path="/product/:id" element={<TechStoreProductDetail />} />
        </Routes>
        <Newsletter />
      </Router>
    </ThemeProvider>
  );
};

export default App;
