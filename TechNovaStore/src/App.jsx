import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, Main } from "./Componets/styles/GlobalStyles";
import Header from "./Componets/layout/Header/Header";
import { Card } from "./Componets/layout/Card/Card";
import Categories from "./Componets/layout/Categories/Categories";
import BestSellers from "./Componets/layout/BestSellers/BestSellers";
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
      <Header onToggleTheme={toggleTheme} />
      <Main>
        <Card imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDjOMIYCksbWbMUPCB2xNEBv8P39ai0-tfBJAS30hgl1lEW_peMDX-59E_4tbIIfBS_HPPGnx8ko6mbRyg_fp0RX_d79-j3FDEbs_BCULBl1ZKVE6HNs3LPiSBteYn3I_kzm4muBcbUVsUILmST9WZtsYBh2eEtP0GNfAndC_zztCN5ajigyRPTlngmPCRLh2NNzXCnBWAVjZlFFkEw0HtrD66OEfyGSApAim3jNxhew_7us2m6QTU4uPUzr0kvJSQL84oS5GnfgZRi" />
        <Categories />
        <BestSellers />
      </Main>
    </ThemeProvider>
  );
};

export default App;
