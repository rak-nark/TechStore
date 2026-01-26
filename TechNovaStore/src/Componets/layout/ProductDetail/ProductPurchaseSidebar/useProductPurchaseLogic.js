import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

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

export const useProductPurchaseLogic = ({
  productId,
  image,
  subtitle,
  colors,
  storageOptions,
  price,
  title,
  onBuyNow,
  onAddToCart,
}) => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value || null);
  const [selectedStorage, setSelectedStorage] = useState(
    storageOptions[1]?.value || storageOptions[0]?.value || null,
  );

  const formatCOP = useCallback((amount) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }, []);

  const selectedProduct = useMemo(
    () => ({ title, price, color: selectedColor, storage: selectedStorage }),
    [title, price, selectedColor, selectedStorage],
  );

  const colorName = useMemo(() => {
    const found = colors.find((c) => c.value === selectedColor);
    return found?.name || found?.label || null;
  }, [colors, selectedColor]);

  const storageLabel = useMemo(() => {
    const found = storageOptions.find((s) => s.value === selectedStorage);
    return found?.label || found?.name || null;
  }, [selectedStorage, storageOptions]);

  const buildCartItem = useCallback(() => {
    const variantId = `${productId || title}-${selectedColor || "default"}-${selectedStorage || "default"}`;
    const resolvedSubtitle =
      subtitle ||
      [colorName, storageLabel].filter(Boolean).join(" | ") ||
      "Selected configuration";

    return {
      id: variantId,
      title,
      subtitle: resolvedSubtitle,
      image: image || FALLBACK_IMAGE,
      price,
      quantity: 1,
      color: selectedColor,
      storage: selectedStorage,
    };
  }, [
    colorName,
    image,
    price,
    productId,
    selectedColor,
    selectedStorage,
    storageLabel,
    subtitle,
    title,
  ]);

  const handleColorSelect = useCallback((value) => {
    setSelectedColor(value);
  }, []);

  const handleStorageSelect = useCallback((value) => {
    setSelectedStorage(value);
  }, []);

  const handleBuyNow = useCallback(() => {
    const cartItem = buildCartItem();
    persistCartItem(cartItem);
    onBuyNow?.(cartItem);
    navigate("/cart", { state: { buyNowItem: cartItem } });
  }, [buildCartItem, navigate, onBuyNow]);

  const handleAddToCart = useCallback(() => {
    const cartItem = buildCartItem();
    persistCartItem(cartItem);
    onAddToCart?.(cartItem);
    alert("Producto añadido al carrito");
  }, [buildCartItem, onAddToCart]);

  return {
    selectedColor,
    selectedStorage,
    formatCOP,
    handleColorSelect,
    handleStorageSelect,
    handleBuyNow,
    handleAddToCart,
  };
};
