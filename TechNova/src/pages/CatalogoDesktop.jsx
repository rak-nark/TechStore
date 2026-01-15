import { useState } from "react";
import { Header } from "../components/layout/Header/Header.jsx";
import { BottomNavigation } from "../components/BottomNav.jsx";
import { CatalogSearchBar } from "../components/CatalogSearchBar.jsx";
import { CategoryChips } from "../components/CategoryChips.jsx";
import { CatalogProductItem } from "../components/ui/CatalogProductItem.jsx";

const CATALOG_PRODUCTS = [
  {
    id: 1,
    name: "Cargador Rápido 15W",
    price: "25.00",
    specs: "USB-C, Carga rápida, Negro",
    stock: 50,
    image: "/images/carousel/ACC-CHARGER-15W-GAR157-NEGRO-front-negro-01.webp",
    category: "Accesorios",
  },
  {
    id: 2,
    name: "Smartphone Poco X7",
    price: "299.00",
    specs: '256GB, 8GB RAM, Pantalla 6.67"',
    stock: 12,
    image: "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
    category: "Celulares",
  },
  {
    id: 3,
    name: "Headphones Gamer Kotion G2000",
    price: "89.99",
    specs: "Sonido 7.1, Micrófono, Negro-Rojo",
    stock: 30,
    image:
      "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
    category: "Audio",
  },
  {
    id: 4,
    name: "MacBook Air M4",
    price: "1299.00",
    specs: "256GB SSD, 16GB RAM, Gris Oscuro",
    stock: 0,
    image: "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
    category: "Computadoras",
  },
  {
    id: 5,
    name: 'Monitor ASUS 26.5" 240Hz',
    price: "399.99",
    specs: "QHD, Panel IPS, Negro",
    stock: 200,
    image: "/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp",
    category: "Monitores",
  },
];

const CATEGORIES = [
  "Todos",
  "Accesorios",
  "Celulares",
  "Audio",
  "Computadoras",
  "Monitores",
];

export const CatalogoDesktop = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = CATALOG_PRODUCTS.filter((product) => {
    const matchCategory =
      activeCategory === "Todos" || product.category === activeCategory;
    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.specs.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddCart = (productId) => {
    console.log("Producto agregado al carrito:", productId);
    // Aquí irá la lógica de agregar al carrito
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-24">
      {/* Header del Catálogo */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <Header />

        {/* Search Bar */}
        <CatalogSearchBar onSearch={setSearchTerm} />

        {/* Category Chips */}
        <CategoryChips
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-4 space-y-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <CatalogProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              specs={product.specs}
              stock={product.stock}
              image={product.image}
              onAddCart={() => handleAddCart(product.id)}
            />
          ))
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No hay productos que coincidan con tu búsqueda
            </p>
          </div>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
};

export default CatalogoDesktop;
