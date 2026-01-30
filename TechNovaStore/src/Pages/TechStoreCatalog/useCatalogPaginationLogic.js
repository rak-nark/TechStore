import { useCallback, useEffect, useMemo, useState } from "react";
import { PRODUCTS, primaryImageOf, filterProducts } from "../../Data/products";

const DEFAULT_PAGE_SIZE = 6;

// Mapping de nombres de categoría de la URL a nombres reales
const CATEGORY_DISPLAY_MAP = {
  Phones: "Phones",
  Audio: "Audio",
  Accessories: "Accessories",
  Laptops: "Laptops",
};

const mapProductToCard = (product) => ({
  id: product.id,
  brand: product.brand,
  title: product.name,
  description: product.shortDescription,
  image: primaryImageOf(product),
  currentPrice: product.price,
  oldPrice: product.oldPrice || null,
  badges: product.badges || [],
  inStock: product.inStock !== false,
  isFavorite: false,
  isCompared: false,
});

export const useCatalogPaginationLogic = ({
  productType = "Laptops",
  pageSize = DEFAULT_PAGE_SIZE,
  appliedFilters = null,
} = {}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let products;

    // Check if filters are actually applied (not just an empty object)
    const hasActiveFilters =
      appliedFilters &&
      (appliedFilters.categories?.length > 0 ||
        appliedFilters.brands?.length > 0 ||
        appliedFilters.ram?.length > 0 ||
        appliedFilters.storage?.length > 0);

    if (hasActiveFilters) {
      try {
        // Ensure we have all required filter properties
        const safeFilters = {
          categories: appliedFilters.categories || [],
          brands: appliedFilters.brands || [],
          ram: appliedFilters.ram || [],
          storage: appliedFilters.storage || [],
          priceRange: appliedFilters.priceRange || [0, 10000000],
        };
        products = filterProducts(safeFilters);
      } catch (error) {
        console.error("Error applying filters:", error);
        // Fallback to category filter
        products = Object.values(PRODUCTS).filter(
          (product) => product.category === productType,
        );
      }
    } else {
      // Otherwise, filter by category
      products = Object.values(PRODUCTS).filter(
        (product) => product.category === productType,
      );
    }

    const sorted = [...products];

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-high":
        sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
      default:
        sorted.sort((a, b) => (b.id || 0) - (a.id || 0));
        break;
    }

    return sorted.map(mapProductToCard);
  }, [productType, sortBy, appliedFilters]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const productsPage = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage, pageSize]);

  const handlePageChange = useCallback(
    (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [totalPages],
  );

  const handleSortChange = useCallback((value) => {
    setSortBy(value);
    setCurrentPage(1);
  }, []);

  return {
    currentPage,
    totalPages,
    totalItems,
    productsPage,
    sortBy,
    handlePageChange,
    handleSortChange,
  };
};
