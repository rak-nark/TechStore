import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./GlobalStyles";
import Header from "./Componets/layout/Header/Header";
import Newsletter from "./Componets/layout/Newsletter/Newsletter";
import TechStoreHomePage from "./Pages/TechStoreHomePage";
import TechStoreCatalog from "./Pages/TechStoreCatalog";
import TechStoreProductDetail from "./Pages/TechStoreProductDetail";
import TechStoreCardSummary from "./Pages/TechStoreCardSummary";
import TechStoreUserAccountDashboard from "./Pages/TechStoreUserAccountDashboard";
import TechStoreCompare from "./Pages/TechStoreCompare";
import TechStoreWishlist from "./Pages/TechStoreWishlist";
import { darkTheme, lightTheme } from "./Componets/theme/themes";

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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header onToggleTheme={toggleTheme} />
                <TechStoreHomePage />
              </>
            }
          />
          <Route
            path="/catalog"
            element={
              <>
                <Header onToggleTheme={toggleTheme} />
                <TechStoreCatalog />
              </>
            }
          />
          <Route
            path="/catalog/:category"
            element={
              <>
                <Header onToggleTheme={toggleTheme} />
                <TechStoreCatalog />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header onToggleTheme={toggleTheme} />
                <TechStoreProductDetail />
              </>
            }
          />
          <Route
            path="/compare"
            element={
              <>
                <Header onToggleTheme={toggleTheme} />
                <TechStoreCompare />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header onToggleTheme={toggleTheme} />
                <TechStoreCardSummary />
              </>
            }
          />
          <Route
            path="/account"
            element={
              <>
                <Header onToggleTheme={toggleTheme} />
                <TechStoreUserAccountDashboard />
              </>
            }
          />
          <Route
            path="/wishlist"
            element={
              <>
                <Header onToggleTheme={toggleTheme} />
                <TechStoreWishlist />
              </>
            }
          />
        </Routes>
        <Newsletter />
      </Router>
    </ThemeProvider>
  );
};

export default App;
