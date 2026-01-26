import { PRODUCTS, primaryImageOf } from "./products";

// Map PRODUCTS to the shape required by CatalogProductCard
export const catalogProducts = [1, 2, 3, 4, 5, 6].map((id) => {
  const p = PRODUCTS[id];
  return {
    id: p.id,
    brand: p.brand,
    title: p.name,
    description: p.shortDescription,
    image: primaryImageOf(p),
    currentPrice: p.price,
    oldPrice: p.oldPrice || null,
    badges: p.badges || [],
    inStock: p.inStock !== false,
    isFavorite: false,
    isCompared: false,
  };
});
