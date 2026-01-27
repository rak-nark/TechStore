import { useCallback, useEffect, useState } from "react";

// Observer pattern para cambios en wishlist
const wishlistObservers = new Set();

export const subscribeToWishlistChanges = (callback) => {
  wishlistObservers.add(callback);
  return () => wishlistObservers.delete(callback);
};

export const notifyWishlistChange = () => {
  wishlistObservers.forEach((callback) => callback());
};

const WISHLIST_STORAGE_KEY = "wishlistItems";

const readStoredWishlist = () => {
  try {
    const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Error reading wishlist from storage", err);
    return [];
  }
};

const persistWishlist = (items) => {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.error("Error saving wishlist to storage", err);
  }
};

export const useWishlistLogic = () => {
  const [items, setItems] = useState(() => readStoredWishlist());
  const [searchQuery, setSearchQuery] = useState("");

  // Escuchar cambios en wishlist desde otros lugares
  useEffect(() => {
    const unsubscribe = subscribeToWishlistChanges(() => {
      setItems(readStoredWishlist());
    });
    return unsubscribe;
  }, []);

  const handleAddToWishlist = useCallback((product) => {
    setItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      let next;

      if (exists) {
        next = prev.filter((item) => item.id !== product.id);
      } else {
        next = [...prev, product];
      }

      persistWishlist(next);
      return next;
    });

    notifyWishlistChange();
  }, []);

  const handleRemove = useCallback((id) => {
    setItems((prev) => {
      const next = prev.filter((item) => item.id !== id);
      persistWishlist(next);
      return next;
    });
  }, []);

  const handleAddToCart = useCallback((productId) => {
    console.log("Add to cart from wishlist:", productId);
  }, []);

  const handleNotify = useCallback((productId) => {
    console.log("Notify when available:", productId);
    alert("You'll be notified when this product is back in stock!");
  }, []);

  const handleMoveAllToCart = useCallback(() => {
    const inStockItems = items.filter((item) => item.inStock);
    console.log("Moving all in-stock items to cart:", inStockItems);
  }, [items]);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return {
    items,
    filteredItems,
    searchQuery,
    handleAddToWishlist,
    handleRemove,
    handleAddToCart,
    handleNotify,
    handleMoveAllToCart,
    handleSearchChange,
  };
};
