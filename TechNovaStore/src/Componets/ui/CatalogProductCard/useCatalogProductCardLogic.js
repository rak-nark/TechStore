import { useCallback, useState } from "react";

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

export const useCatalogProductCardLogic = ({
  id,
  title,
  image,
  description,
  currentPrice,
  inStock,
  isFavorite = false,
  isCompared = false,
  onFavoriteClick,
  onCompareClick,
  onAddToCart,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const [compared, setCompared] = useState(isCompared);

  const handleFavoriteClick = useCallback(
    (e) => {
      e.stopPropagation();
      const newState = !favorite;
      setFavorite(newState);
      onFavoriteClick?.(id);
    },
    [favorite, id, onFavoriteClick],
  );

  const handleCompareClick = useCallback(
    (e) => {
      e.stopPropagation();
      const newState = !compared;
      setCompared(newState);
      onCompareClick?.(id);
    },
    [compared, id, onCompareClick],
  );

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

      if (!inStock) return;

      const cartItem = buildCartItem();
      persistCartItem(cartItem);
      onAddToCart?.(id);
      alert("Producto añadido al carrito");
    },
    [buildCartItem, id, inStock, onAddToCart],
  );

  return {
    favorite,
    compared,
    handleFavoriteClick,
    handleCompareClick,
    handleAddToCart,
  };
};
