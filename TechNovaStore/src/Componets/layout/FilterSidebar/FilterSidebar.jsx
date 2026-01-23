import React, { useState } from "react";
import { MdFilterList, MdExpandMore } from "react-icons/md";
import {
  Sidebar,
  SidebarHeader,
  SidebarTitle,
  ResetButton,
  FilterSection,
  FilterAccordion,
  FilterAccordionSummary,
  FilterAccordionContent,
  FilterLabel,
  FilterCheckbox,
  FilterText,
  PriceRangeSection,
  PriceRangeTitle,
  PriceSliderContainer,
  PriceSliderTrack,
  PriceSliderRange,
  PriceSliderThumb,
  PriceValues,
  PriceValue,
  ApplyButton,
} from "./Styled.FilterSidebar";

const FilterSidebar = ({ onFiltersChange }) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    brand: true,
    ram: false,
    storage: false,
  });

  const [filters, setFilters] = useState({
    categories: ["Laptops"],
    brands: [],
    ram: [],
    storage: [],
    priceRange: [0, 2500],
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prev) => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return { ...prev, [filterType]: newValues };
    });
  };

  const handleReset = () => {
    setFilters({
      categories: [],
      brands: [],
      ram: [],
      storage: [],
      priceRange: [0, 2500],
    });
  };

  const handleApplyFilters = () => {
    if (onFiltersChange) {
      onFiltersChange(filters);
    }
  };

  const categories = [
    { value: "Laptops", label: "Laptops", count: 48 },
    { value: "Smartphones", label: "Smartphones", count: 32 },
    { value: "Tablets", label: "Tablets", count: 18 },
  ];

  const brands = [
    { value: "Apple", label: "Apple" },
    { value: "Dell", label: "Dell" },
    { value: "Razer", label: "Razer" },
    { value: "ASUS ROG", label: "ASUS ROG" },
  ];

  const ramOptions = [
    { value: "8GB", label: "8GB" },
    { value: "16GB", label: "16GB" },
    { value: "32GB+", label: "32GB+" },
  ];

  const storageOptions = [
    { value: "512GB SSD", label: "512GB SSD" },
    { value: "1TB SSD", label: "1TB SSD" },
    { value: "2TB+ SSD", label: "2TB+ SSD" },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTitle>
          <MdFilterList />
          Filters
        </SidebarTitle>
        <ResetButton onClick={handleReset}>Reset All</ResetButton>
      </SidebarHeader>

      <FilterSection>
        {/* Category Filter */}
        <FilterAccordion $open={openSections.category}>
          <FilterAccordionSummary onClick={() => toggleSection("category")}>
            <span>Category</span>
            <MdExpandMore />
          </FilterAccordionSummary>
          <FilterAccordionContent>
            {categories.map((cat) => (
              <FilterLabel key={cat.value}>
                <FilterCheckbox
                  type="checkbox"
                  checked={filters.categories.includes(cat.value)}
                  onChange={() => handleCheckboxChange("categories", cat.value)}
                />
                <FilterText>
                  {cat.label} ({cat.count})
                </FilterText>
              </FilterLabel>
            ))}
          </FilterAccordionContent>
        </FilterAccordion>

        {/* Price Range */}
        <PriceRangeSection>
          <PriceRangeTitle>Price Range</PriceRangeTitle>
          <PriceSliderContainer>
            <PriceSliderTrack>
              <PriceSliderRange $start={0} $end={75} />
              <PriceSliderThumb $position={0} />
              <PriceSliderThumb $position={75} />
            </PriceSliderTrack>
            <PriceValues>
              <PriceValue>$0</PriceValue>
              <PriceValue>$2,500</PriceValue>
            </PriceValues>
          </PriceSliderContainer>
        </PriceRangeSection>

        {/* Brand Filter */}
        <FilterAccordion $open={openSections.brand}>
          <FilterAccordionSummary onClick={() => toggleSection("brand")}>
            <span>Brand</span>
            <MdExpandMore />
          </FilterAccordionSummary>
          <FilterAccordionContent>
            {brands.map((brand) => (
              <FilterLabel key={brand.value}>
                <FilterCheckbox
                  type="checkbox"
                  checked={filters.brands.includes(brand.value)}
                  onChange={() => handleCheckboxChange("brands", brand.value)}
                />
                <FilterText>{brand.label}</FilterText>
              </FilterLabel>
            ))}
          </FilterAccordionContent>
        </FilterAccordion>

        {/* RAM Filter */}
        <FilterAccordion $open={openSections.ram}>
          <FilterAccordionSummary onClick={() => toggleSection("ram")}>
            <span>Memory (RAM)</span>
            <MdExpandMore />
          </FilterAccordionSummary>
          <FilterAccordionContent>
            {ramOptions.map((ram) => (
              <FilterLabel key={ram.value}>
                <FilterCheckbox
                  type="checkbox"
                  checked={filters.ram.includes(ram.value)}
                  onChange={() => handleCheckboxChange("ram", ram.value)}
                />
                <FilterText>{ram.label}</FilterText>
              </FilterLabel>
            ))}
          </FilterAccordionContent>
        </FilterAccordion>

        {/* Storage Filter */}
        <FilterAccordion $open={openSections.storage}>
          <FilterAccordionSummary onClick={() => toggleSection("storage")}>
            <span>Storage</span>
            <MdExpandMore />
          </FilterAccordionSummary>
          <FilterAccordionContent>
            {storageOptions.map((storage) => (
              <FilterLabel key={storage.value}>
                <FilterCheckbox
                  type="checkbox"
                  checked={filters.storage.includes(storage.value)}
                  onChange={() =>
                    handleCheckboxChange("storage", storage.value)
                  }
                />
                <FilterText>{storage.label}</FilterText>
              </FilterLabel>
            ))}
          </FilterAccordionContent>
        </FilterAccordion>
      </FilterSection>

      <ApplyButton onClick={handleApplyFilters}>Apply Filters</ApplyButton>
    </Sidebar>
  );
};

export default FilterSidebar;
