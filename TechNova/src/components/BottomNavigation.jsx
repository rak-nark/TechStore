import { ProductListItem } from "./ui/ProductListItem";

export const BestSellers = () => {
  const products = [
    {
      id: 1,
      title: "Estación de Soldado T12-D",
      specs: "Puntas intercambiables • 75W",
      price: "89.00",
      stock: "En Stock",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuALl95sIAWEbnWmGe50wisfTDl9Qaef7ivQ7aB4oqmc0oMWXeoUcOD9uYwuaqYmkz7vBDEsoTHZizF12oJXrkKyV0Omo-6sZOJ2d4v6YcB5hNJDtV9UFIIb0TnnskVcF-UBK8dCobq4AY4bzf2_RdGMswCw87I2CKzlLam8KnrY92RVEkLtTpXZUozqOqv_yu-z_7ecBsry4qhCldwQZnC9_ZNvJiqx8dQEpxjI-IhExLZgXvVFWktg7uG6ObAdpWPJaS0lRtgr4A",
    },
    {
      id: 2,
      title: "Kit 500 Capacitores Cerámicos",
      specs: "24 valores • Estuche plástico",
      price: "14.20",
      stock: "Últimas 5",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2CP5iYnP_kWW2g-sXN0W6UWbXOYG1Rjo_him9_K_3pSQ56fRbvFeek2mreajzD71T-uVY169osSDeVghrVKGntF-iKkVXPyaQep_D12d3RstVDzbar65DERHNJmr_1GBr46peudoG54yjgAKScmhh6XyYjv_M56sffqwfztVkwzNfvm4yltt54a1eTs_T7BWUfGnB2nB3K04pGNUaNsdTMyowsLoNPwT1HDW-UCRf3QambF2xuxszo6959GJ3aa6gl4hbvipWcw",
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
