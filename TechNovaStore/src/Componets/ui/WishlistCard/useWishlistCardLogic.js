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

export const useWishlistCardLogic = ({
  id,
  productId,
  name,
  price,
  image,
  inStock,
  onRemove,
  onAddToCart,
  onNotify,
}) => {
  const buildCartItem = useCallback(() => {
    return {
      id: `wishlist-${productId || id}`,
      title: name,
      subtitle: `From Wishlist #${id}`,
      image: image || FALLBACK_IMAGE,
      price,
      quantity: 1,
    };
  }, [id, productId, name, price, image]);

  const handleAddToCart = useCallback(
    (e) => {
      e.stopPropagation();

      if (!inStock) return;

      const cartItem = buildCartItem();
      persistCartItem(cartItem);
      onAddToCart?.(productId);
      alert("Producto añadido al carrito");
    },
    [buildCartItem, inStock, onAddToCart, productId],
  );

  const handleRemove = useCallback(
    (e) => {
      e.stopPropagation();
      onRemove?.(id);
    },
    [id, onRemove],
  );

  const handleNotify = useCallback(
    (e) => {
      e.stopPropagation();
      onNotify?.(productId);
    },
    [onNotify, productId],
  );

  return {
    handleRemove,
    handleAddToCart,
    handleNotify,
  };
};
