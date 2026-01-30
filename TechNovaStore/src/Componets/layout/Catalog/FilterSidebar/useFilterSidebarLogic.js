import { useState, useMemo, useCallback } from "react";
import {
  getCategories,
  getBrandsByCategory,
  getPriceRange,
  getStorageOptions,
  getRamOptions,
} from "../../../../Data/products";

export const useFilterSidebarLogic = (currentCategory = null) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    brand: true,
    price: true,
    ram: false,
    storage: false,
  });

  const [filters, setFilters] = useState({
    categories: currentCategory ? [currentCategory] : [],
    brands: [],
    ram: [],
    storage: [],
    priceRange: [0, 10000000], // Default max price
  });

  // Get all available categories with counts
  const categories = useMemo(() => getCategories(), []);

  // Get brands for selected categories or all categories
  const brands = useMemo(() => {
    const selectedCategories =
      filters.categories.length > 0 ? filters.categories : [currentCategory];
    const brandSet = new Set();

    selectedCategories.forEach((cat) => {
      if (cat) {
        getBrandsByCategory(cat).forEach((brand) => brandSet.add(brand));
      }
    });

    return Array.from(brandSet).sort();
  }, [filters.categories, currentCategory]);

  // Get price range for selected categories
  const priceRange = useMemo(() => {
    const selectedCategories =
      filters.categories.length > 0 ? filters.categories : [currentCategory];
    let minPrice = Infinity;
    let maxPrice = 0;

    selectedCategories.forEach((cat) => {
      if (cat) {
        const range = getPriceRange(cat);
        minPrice = Math.min(minPrice, range.min);
        maxPrice = Math.max(maxPrice, range.max);
      }
    });

    return {
      min: minPrice === Infinity ? 0 : minPrice,
      max: maxPrice === 0 ? 10000000 : maxPrice,
    };
  }, [filters.categories, currentCategory]);

  // Get storage options for selected categories
  const storageOptions = useMemo(() => {
    const selectedCategories =
      filters.categories.length > 0 ? filters.categories : [currentCategory];
    const storageSet = new Set();

    selectedCategories.forEach((cat) => {
      if (cat) {
        getStorageOptions(cat).forEach((storage) => storageSet.add(storage));
      }
    });

    return Array.from(storageSet).sort();
  }, [filters.categories, currentCategory]);

  // Get RAM options for selected categories
  const ramOptions = useMemo(() => {
    const selectedCategories =
      filters.categories.length > 0 ? filters.categories : [currentCategory];
    const ramSet = new Set();

    selectedCategories.forEach((cat) => {
      if (cat) {
        getRamOptions(cat).forEach((ram) => ramSet.add(ram));
      }
    });

    return Array.from(ramSet).sort();
  }, [filters.categories, currentCategory]);

  const toggleSection = useCallback((section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const handleCheckboxChange = useCallback((filterType, value) => {
    setFilters((prev) => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return { ...prev, [filterType]: newValues };
    });
  }, []);

  const handlePriceChange = useCallback((min, max) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [min, max],
    }));
  }, []);

  const handleReset = useCallback(() => {
    setFilters({
      categories: currentCategory ? [currentCategory] : [],
      brands: [],
      ram: [],
      storage: [],
      priceRange: [priceRange.min, priceRange.max],
    });
  }, [currentCategory, priceRange]);

  return {
    // State
    filters,
    openSections,

    // Options
    categories,
    brands,
    storageOptions,
    ramOptions,
    priceRange,

    // Handlers
    toggleSection,
    handleCheckboxChange,
    handlePriceChange,
    handleReset,

    // Getters
    getActiveFiltersCount: () => {
      let count = 0;
      if (filters.categories.length > 0) count++;
      if (filters.brands.length > 0) count += filters.brands.length;
      if (filters.ram.length > 0) count += filters.ram.length;
      if (filters.storage.length > 0) count += filters.storage.length;
      return count;
    },
  };
};
