import { useCallback, useEffect, useState } from "react";
import {
  notifyWishlistChange,
  subscribeToWishlistChanges,
} from "../../../Pages/TechStoreWishlist/useWishlistLogic";

const WISHLIST_STORAGE_KEY = "wishlistItems";
const FALLBACK_IMAGE = "https://via.placeholder.com/120x120?text=Product";

const isProductInWishlist = (productId) => {
  try {
    const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
    const items = stored ? JSON.parse(stored) : [];
    return items.some((item) => item.id === `product-card-${productId}`);
  } catch (err) {
    console.error("Error checking wishlist", err);
    return false;
  }
};

const addToWishlist = (product) => {
  try {
    const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
    const prev = stored ? JSON.parse(stored) : [];

    const exists = prev.some((item) => item.id === product.id);
    let next;

    if (exists) {
      next = prev.filter((item) => item.id !== product.id);
    } else {
      next = [...prev, product];
    }

    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(next));
    notifyWishlistChange();
    return !exists; // retorna true si se añadió, false si se removió
  } catch (err) {
    console.error("Error updating wishlist", err);
    return false;
  }
};

export const useFavoriteLogic = ({
  id,
  title,
  image,
  currentPrice,
  isFavorite = false,
}) => {
  const [favorite, setFavorite] = useState(() => isProductInWishlist(id));

  // Escuchar cambios en wishlist desde otros componentes
  useEffect(() => {
    const unsubscribe = subscribeToWishlistChanges(() => {
      setFavorite(isProductInWishlist(id));
    });
    return unsubscribe;
  }, [id]);

  const handleFavoriteClick = useCallback(
    (e) => {
      e.stopPropagation();

      const product = {
        id: `product-card-${id}`,
        name: title,
        price: currentPrice,
        image: image || FALLBACK_IMAGE,
        inStock: true,
        stockLevel: "In Stock",
        stockStatus: "green",
      };

      const wasAdded = addToWishlist(product);
      setFavorite(!favorite);

      if (wasAdded) {
        alert("Producto añadido a favoritos");
      } else {
        alert("Producto eliminado de favoritos");
      }
    },
    [favorite, id, title, currentPrice, image],
  );

  return {
    favorite,
    handleFavoriteClick,
  };
};
