import { ProductCard } from "./ui/ProductCard";

export const NewArrivals = () => {
  const products = [
    {
      sku: "ESP32-WROOM",
      title: "ESP32-WROOM-32U WiFi + BT SoC",
      price: "12.50",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBBYOGkOIBSMIYqXHPrB6hG2e8IF2nHF5kxtLBKf3_y2Y3EQ9Jn8flkHLTMDJHHXcVbbqoChdtxcxrYXiGZ28ma1KGG_Y7Gb4vScpOUbLzJBVf7eHo8_8sln6PEO3Qa4Kbj-3hwzD57S7zCro0XF2MUmv9mBBAQRoU8z9y9G65rm_OTxg9t2P59pW9R1v6j7eBO5lgqcFEve1kI-jRjGDNowga1c1NUzS1AH6iSmIrgMBqDJvo6xZrEkp_ajZSJUJEM3BIdkWOXNQ",
    },
    {
      sku: "AN-8008",
      title: "Multímetro Digital Auto-Rango Pro",
      price: "45.99",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQilCTdoetepWnZuL_gIP-YAoza1GocnpxLPIsHY4lwKxLoRJpWJ8yPzb4KTXcrJ-C9t3lHRkRdBm4SIPOFVTd2pfcv4Imtrto3JxEJ9FMvRHs3Z3F97WlyxnnsWixON4GPFwx2PvuJPPncmeY4iaWiY9X_G0T8Zq6kAK0rkUayPyOKeXjqaLmhlYa3i0NRiKNMVVNwxnMx88bWDM5qUubim22lhEqwTpvq4fwux2sKzOfL4_vjyCXuKfBdN0Jk_tBNaMi97Uw5g",
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
