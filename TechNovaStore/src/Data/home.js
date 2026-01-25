import { PRODUCTS, primaryImageOf } from "./products";

export const bestSellerIds = [101, 102, 103, 104];

const badgeToObject = (badge) => {
  if (!badge) return null;
  const type = badge.toLowerCase() === "sale" ? "sale" : "new";
  return { type, text: badge };
};

export const bestSellers = bestSellerIds.map((id) => {
  const p = PRODUCTS[id];
  return {
    id: p.id,
    image: primaryImageOf(p),
    badge: badgeToObject(p.badge),
    title: p.cardTitle || p.name,
    description: p.shortDescription,
    rating: p.rating,
    reviewCount: p.reviewCount,
    currentPrice: p.price,
    oldPrice: p.oldPrice || null,
  };
});
