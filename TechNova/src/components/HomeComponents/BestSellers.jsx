import { ProductListItem } from "./ProductListItem";

export const BestSellers = () => {
  const products = [
    {
      id: 1,
      title: "Headphones Gamer Kotion G2000",
      specs: "Sonido 7.1 • Micrófono • Negro-Rojo",
      price: "89.99",
      stock: "En Stock",
      image:
        "/images/carousel/KT-G2000-headphones-gamer-kotion-g2000-front-black-red-01.webp",
    },
    {
      id: 2,
      title: "Smartphone Poco X7 256GB",
      specs: "8GB RAM • Pantalla AMOLED 120Hz",
      price: "299.00",
      stock: "Últimas 5",
      image: "/images/carousel/CEL-POCO-X7-256-8-NEGRO-front-negro-01.webp",
    },
  ];

  return (
    <section className="px-4 pb-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Más Vendidos</h3>
      </div>
      <div className="flex flex-col gap-3">
        {products.map((product) => (
          <ProductListItem
            key={product.id}
            image={product.image}
            title={product.title}
            specs={product.specs}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </section>
  );
};
