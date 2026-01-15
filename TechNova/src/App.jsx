import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeDesktop from "./pages/HomeDesktop.jsx";
import CatalogoDesktop from "./pages/CatalogoDesktop.jsx";
import ProductoDesktop from "./pages/ProductoDesktop.jsx";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDesktop />} />
        <Route path="/catalogo" element={<CatalogoDesktop />} />
        <Route path="/producto/:id" element={<ProductoDesktop />} />
      </Routes>
    </Router>
  );
};

export default App;
