import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProductGallery } from "../components/ProductoDetailsComponents/ProductGallery.jsx";
import { TechnicalSpecifications } from "../components/ProductoDetailsComponents/TechnicalSpecifications.jsx";
import { RelatedProducts } from "../components/ProductoDetailsComponents/RelatedProducts.jsx";
import { RatingSummary } from "../components/ProductoDetailsComponents/RatingSummary.jsx";

const PRODUCT_DATA = {
  1: {
    id: 1,
    name: "Cargador Rápido 15W",
    category: "Accesorios",
    price: "25.00",
    currency: "$",
    sku: "ACC-15W-001",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description:
      "Cargador ultra rápido de 15W con tecnología de carga rápida USB-C. Diseñado para cargar tu dispositivo móvil en tiempo récord. Compatible con todos los smartphones modernos.",
    images: [
      "/images/carousel/ACC-CHARGER-15W-GAR157-NEGRO-front-negro-01.webp",
      "/images/carousel/ACC-CHARGER-15W-GAR157-NEGRO-front-negro-01.webp",
      "/images/carousel/ACC-CHARGER-15W-GAR157-NEGRO-front-negro-01.webp",
      "/images/carousel/ACC-CHARGER-15W-GAR157-NEGRO-front-negro-01.webp",
    ],
    specifications: [
      { label: "Potencia", value: "15W" },
      { label: "Entrada", value: "100-240V AC" },
      { label: "Salida USB", value: "USB-C" },
      { label: "Tiempo Carga", value: "45 min (0-100%)" },
      { label: "Compatibilidad", value: "iOS / Android" },
    ],
    ratingDistribution: [
      { stars: 5, percentage: 80 },
      { stars: 4, percentage: 12 },
      { stars: 3, percentage: 5 },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Smartphone Poco X7",
        price: "299.00",
        image: "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
      },
      {
        id: 3,
        name: "Headphones Gamer Kotion G2000",
        price: "89.99",
        image:
          "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
      },
      {
        id: 4,
        name: "MacBook Air M4",
        price: "1299.00",
        image:
          "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
      },
    ],
  },
  2: {
    id: 2,
    name: "Smartphone Poco X7",
    category: "Celulares",
    price: "299.00",
    currency: "$",
    sku: "CEL-POCO-X7-001",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    description:
      "Smartphone de última generación con pantalla AMOLED de 6.67 pulgadas, procesador de alto rendimiento y batería de larga duración. Perfecto para gaming y multimedia.",
    images: [
      "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
      "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
      "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
      "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
    ],
    specifications: [
      { label: "Pantalla", value: '6.67" AMOLED 120Hz' },
      { label: "Procesador", value: "Snapdragon 888" },
      { label: "RAM", value: "8GB" },
      { label: "Almacenamiento", value: "256GB UFS 3.1" },
      { label: "Batería", value: "5000 mAh" },
    ],
    ratingDistribution: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 5 },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Cargador Rápido 15W",
        price: "25.00",
        image:
          "/images/carousel/ACC-CHARGER-15W-GAR157-NEGRO-front-negro-01.webp",
      },
      {
        id: 3,
        name: "Headphones Gamer Kotion G2000",
        price: "89.99",
        image:
          "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
      },
      {
        id: 5,
        name: 'Monitor ASUS 26.5" 240Hz',
        price: "399.99",
        image: "/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp",
      },
    ],
  },
  3: {
    id: 3,
    name: "Headphones Gamer Kotion G2000",
    category: "Audio",
    price: "89.99",
    currency: "$",
    sku: "AUD-G2000-001",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    description:
      "Auriculares gaming profesionales con sonido envolvente 7.1, micrófono de cancelación de ruido y diseño ergonómico. Ideal para gaming y streaming.",
    images: [
      "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
      "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
      "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
      "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
    ],
    specifications: [
      { label: "Sonido", value: "7.1 Surround" },
      { label: "Frecuencia", value: "20Hz - 20kHz" },
      { label: "Micrófono", value: "Cancelación de ruido" },
      { label: "Conexión", value: "3.5mm Jack" },
      { label: "Impedancia", value: "16Ω" },
    ],
    ratingDistribution: [
      { stars: 5, percentage: 82 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 3 },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Smartphone Poco X7",
        price: "299.00",
        image: "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
      },
      {
        id: 4,
        name: "MacBook Air M4",
        price: "1299.00",
        image:
          "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
      },
      {
        id: 5,
        name: 'Monitor ASUS 26.5" 240Hz',
        price: "399.99",
        image: "/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp",
      },
    ],
  },
  4: {
    id: 4,
    name: "MacBook Air M4",
    category: "Computadoras",
    price: "1299.00",
    currency: "$",
    sku: "LAP-MBA-M4-001",
    rating: 4.9,
    reviews: 234,
    inStock: false,
    description:
      "Laptop ultradelgada y potente con chip M4. Rendimiento excepcional para profesionales creativos y desarrolladores. Batería que dura todo el día.",
    images: [
      "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
      "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
      "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
      "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
    ],
    specifications: [
      { label: "Procesador", value: "Apple M4" },
      { label: "RAM", value: "16GB Unificada" },
      { label: "SSD", value: "256GB" },
      { label: "Pantalla", value: '13.3" Liquid Retina' },
      { label: "Batería", value: "18h" },
    ],
    ratingDistribution: [
      { stars: 5, percentage: 88 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 2 },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Cargador Rápido 15W",
        price: "25.00",
        image:
          "/images/carousel/ACC-CHARGER-15W-GAR157-NEGRO-front-negro-01.webp",
      },
      {
        id: 3,
        name: "Headphones Gamer Kotion G2000",
        price: "89.99",
        image:
          "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
      },
      {
        id: 5,
        name: 'Monitor ASUS 26.5" 240Hz',
        price: "399.99",
        image: "/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp",
      },
    ],
  },
  5: {
    id: 5,
    name: 'Monitor ASUS 26.5" 240Hz',
    category: "Monitores",
    price: "399.99",
    currency: "$",
    sku: "MON-ASUS-26.5-001",
    rating: 4.8,
    reviews: 178,
    inStock: true,
    description:
      "Monitor gaming de alta velocidad con panel IPS QHD y tasa de refresco de 240Hz. Ideal para gaming competitivo y edición de contenido profesional.",
    images: [
      "/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp",
      "/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp",
      "/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp",
      "/images/carousel/MON-ASUS-26.5-240HZ-QHD-front-negro-01.webp",
    ],
    specifications: [
      { label: "Tamaño", value: '26.5"' },
      { label: "Resolución", value: "2560 x 1440 QHD" },
      { label: "Panel", value: "IPS" },
      { label: "Refresco", value: "240Hz" },
      { label: "Tiempo Respuesta", value: "1ms GTG" },
    ],
    ratingDistribution: [
      { stars: 5, percentage: 79 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 5 },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Smartphone Poco X7",
        price: "299.00",
        image: "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
      },
      {
        id: 3,
        name: "Headphones Gamer Kotion G2000",
        price: "89.99",
        image:
          "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
      },
      {
        id: 4,
        name: "MacBook Air M4",
        price: "1299.00",
        image:
          "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
      },
    ],
  },
};

export const ProductoDesktop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCT_DATA[id] || PRODUCT_DATA[1];

  const handleBack = () => {
    navigate("/catalogo");
  };

  const handleAddToCart = () => {
    console.log(
      `Agregado ${quantity} unidad(es) del producto ${product.id} al carrito`
    );
    // Aquí irá la lógica de agregar al carrito
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-24">
      {/* Top Navigation Bar */}
      <div className="sticky top-16 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              arrow_back_ios_new
            </span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">
            Detalle del Producto
          </h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-2xl">share</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-md mx-auto">
        {/* Image Gallery */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Product Title & Basic Info */}
        <div className="px-4 pt-2">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold leading-tight mt-1">
                {product.name}
              </h1>
            </div>
            {product.inStock && (
              <div className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                EN STOCK
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-primary fill-1 text-lg">
                star
              </span>
              <span className="font-bold">{product.rating}</span>
              <span className="text-slate-500 text-sm">
                ({product.reviews} reseñas)
              </span>
            </div>
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
            <p className="text-slate-500 text-sm italic font-medium">
              SKU: {product.sku}
            </p>
          </div>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-primary">
              {product.price} {product.currency}
            </span>
            <span className="text-slate-500 text-sm font-normal">
              IVA incluido
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 py-4">
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Datasheet Button */}
        <div className="px-4 py-2">
          <button className="w-full flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">
                picture_as_pdf
              </span>
              <div className="text-left">
                <p className="font-bold text-sm">Download Datasheet</p>
                <p className="text-xs text-slate-500">
                  PDF (2.4 MB) • Rev. 2023
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400">
              download
            </span>
          </button>
        </div>

        {/* Technical Specifications */}
        <TechnicalSpecifications specs={product.specifications} />

        {/* Related Products */}
        <RelatedProducts products={product.relatedProducts} />

        {/* Rating Summary */}
        <RatingSummary
          rating={product.rating}
          totalReviews={product.reviews}
          ratingDistribution={product.ratingDistribution}
        />
      </main>

      {/* Sticky Footer - Quantity & Add to Cart */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t px-4 py-4"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderTopColor: "var(--nav-border)",
        }}
      >
        <div className="max-w-md mx-auto flex gap-4 items-center">
          {/* Quantity Selector */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="size-9 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">remove</span>
            </button>
            <span className="w-8 text-center font-bold text-sm text-slate-900 dark:text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="size-9 flex items-center justify-center text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-primary text-white font-bold h-12 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform hover:bg-blue-600"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDesktop;
