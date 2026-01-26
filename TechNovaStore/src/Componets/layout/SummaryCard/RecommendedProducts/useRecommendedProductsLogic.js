import { useCallback } from "react";
import { notifyCartChange } from "../../../../Pages/TechStoreCardSummary/useCardSummaryLogic";

const CART_STORAGE_KEY = "cartItems";
const FALLBACK_IMAGE = "https://via.placeholder.com/120x120?text=Product";

const persistCartItem = (item) => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    const prev = stored ? JSON.parse(stored) : [];
    const idx = prev.findIndex((i) => i.id === item.id);
    let next;

    if (idx >= 0) {
      const existing = prev[idx];
      next = [...prev];
      next[idx] = {
        ...existing,
        quantity: (existing.quantity || 1) + (item.quantity || 1),
      };
    } else {
      next = [...prev, { ...item, quantity: item.quantity || 1 }];
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(next));
    return next;
  } catch (err) {
    console.error("Error persisting cart item", err);
    return null;
  }
};

export const useRecommendedProductsLogic = ({
  products = [],
  onAddToCart = () => {},
}) => {
  const buildCartItem = useCallback((product) => {
    return {
      id: `recommended-${product.id}`,
      title: product.name,
      subtitle: product.description || "Recommended product",
      image: product.image || FALLBACK_IMAGE,
      price: product.price,
      quantity: 1,
    };
  }, []);

  const handleAddToCart = useCallback(
    (product, e) => {
      if (e) {
        e.stopPropagation();
      }

      const cartItem = buildCartItem(product);
      persistCartItem(cartItem);
      notifyCartChange();
      onAddToCart?.(product.id);
      alert("Producto añadido al carrito");
    },
    [buildCartItem, onAddToCart],
  );

  return {
    products,
    handleAddToCart,
  };
};
