import { ProductCard } from "./ProductCard";

export const NewArrivals = () => {
  const products = [
    {
      sku: "ACC-15W-001",
      title: "Cargador Rápido 15W USB-C",
      price: "25.00",
      image:
        "/images/carousel/ACC-CHARGER-15W-GAR157-NEGRO-front-negro-01.webp",
    },
    {
      sku: "LAP-MBA-M4",
      title: "MacBook Air M4 256GB Gris Oscuro",
      price: "1299.00",
      image:
        "/images/carousel/LAP-MBA-M4-256-16-GRIS-front-gris-oscuro-01.webp",
    },
  ];

  return (
    <section className="px-4 pb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Novedades</h3>
        <a className="text-primary text-sm font-semibold" href="#">
          Ver Todo
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            sku={product.sku}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};
