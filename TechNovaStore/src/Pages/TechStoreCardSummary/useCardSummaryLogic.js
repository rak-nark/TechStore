import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Simple observer pattern for cart changes
const cartObservers = new Set();

export const subscribeToCartChanges = (callback) => {
  cartObservers.add(callback);
  return () => cartObservers.delete(callback);
};

export const notifyCartChange = () => {
  cartObservers.forEach((callback) => callback());
};

export const useCardSummaryLogic = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const FALLBACK_IMAGE = "https://via.placeholder.com/120x120?text=Product";
  const STORAGE_KEY = "cartItems";

  const readStoredItems = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      return parsed.map((item) => ({
        ...item,
        image: item.image || FALLBACK_IMAGE,
        quantity: item.quantity || 1,
      }));
    } catch (err) {
      console.error("Error reading cart from storage", err);
      return [];
    }
  }, []);

  const persistItems = useCallback((items) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.error("Error saving cart to storage", err);
    }
  }, []);

  const [cartItems, setCartItems] = useState(() => readStoredItems());

  useEffect(() => {
    const handleStorageChange = () => {
      setCartItems(readStoredItems());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [readStoredItems]);

  useEffect(() => {
    const unsubscribe = subscribeToCartChanges(() => {
      setCartItems(readStoredItems());
    });
    return unsubscribe;
  }, [readStoredItems]);

  const upsertCartItem = useCallback(
    (item) => {
      const incoming = {
        ...item,
        image: item.image || FALLBACK_IMAGE,
        quantity: item.quantity || 1,
      };

      setCartItems((prev) => {
        const idx = prev.findIndex((i) => i.id === incoming.id);
        let next;

        if (idx >= 0) {
          const existing = prev[idx];
          next = [...prev];
          next[idx] = {
            ...existing,
            image: incoming.image || existing.image,
            quantity: (existing.quantity || 1) + (incoming.quantity || 1),
          };
        } else {
          next = [...prev, incoming];
        }

        persistItems(next);
        return next;
      });
    },
    [persistItems],
  );

  useEffect(() => {
    const stateItem = location.state?.buyNowItem || location.state?.cartItem;
    if (stateItem) {
      upsertCartItem(stateItem);
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.pathname, location.state, navigate, upsertCartItem]);

  const breadcrumbItems = useMemo(
    () => [
      { label: "Home", path: "/" },
      { label: "Shopping Cart", path: "/cart" },
    ],
    [],
  );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  const shipping = 0;

  const tax = useMemo(() => Math.round(subtotal * 0.08), [subtotal]);

  const handleQuantityChange = useCallback(
    (id, newQuantity) => {
      setCartItems((prev) => {
        const next = prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        );
        persistItems(next);
        return next;
      });
    },
    [persistItems],
  );

  const handleRemoveItem = useCallback(
    (id) => {
      setCartItems((prev) => {
        const next = prev.filter((item) => item.id !== id);
        persistItems(next);
        return next;
      });
    },
    [persistItems],
  );

  const handleCheckout = useCallback(() => {
    console.log("Proceeding to checkout...");
  }, []);

  const handleContinueShopping = useCallback(() => {
    navigate("/catalog");
  }, [navigate]);

  const handleAddRecommended = useCallback((productId) => {
    console.log("Add to cart:", productId);
  }, []);

  return {
    breadcrumbItems,
    cartItems,
    subtotal,
    shipping,
    tax,
    handleQuantityChange,
    handleRemoveItem,
    handleCheckout,
    handleContinueShopping,
    handleAddRecommended,
  };
};
