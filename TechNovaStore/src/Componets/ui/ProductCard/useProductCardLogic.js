import { useCallback } from "react";

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

export const useProductCardLogic = ({
  id,
  title,
  image,
  description,
  currentPrice,
  rating,
  reviewCount,
  onFavoriteClick,
  onAddToCart,
}) => {
  const getStarData = useCallback(() => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return {
      fullStars,
      hasHalfStar,
      emptyStars,
    };
  }, [rating]);

  const buildCartItem = useCallback(() => {
    return {
      id: `product-${id}`,
      title,
      subtitle: description || "Product",
      image: image || FALLBACK_IMAGE,
      price: currentPrice,
      quantity: 1,
    };
  }, [id, title, description, image, currentPrice]);

  const handleAddToCart = useCallback(
    (e) => {
      e.stopPropagation();

      const cartItem = buildCartItem();
      persistCartItem(cartItem);
      onAddToCart?.();
      alert("Producto añadido al carrito");
    },
    [buildCartItem, onAddToCart],
  );

  const handleFavorite = useCallback(
    (e) => {
      e.stopPropagation();
      onFavoriteClick?.();
    },
    [onFavoriteClick],
  );

  return {
    getStarData,
    handleAddToCart,
    handleFavorite,
  };
};

