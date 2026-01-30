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
import { useFilterSidebarLogic } from "./useFilterSidebarLogic";

const FilterSidebar = ({ currentCategory = null, onFiltersChange }) => {
  const {
    filters,
    openSections,
    categories,
    brands,
    storageOptions,
    ramOptions,
    priceRange,
    toggleSection,
    handleCheckboxChange,
    handlePriceChange,
    handleReset,
    getActiveFiltersCount,
  } = useFilterSidebarLogic(currentCategory);

  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  const handleApplyFilters = () => {
    if (onFiltersChange) {
      onFiltersChange({
        ...filters,
        priceRange: localPriceRange,
      });
    }
  };

  const handlePriceSliderChange = (index, value) => {
    const newRange = [...localPriceRange];
    newRange[index] = value;
    setLocalPriceRange(newRange);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculatePercentage = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTitle>
          <MdFilterList />
          Filters{" "}
          {getActiveFiltersCount() > 0 && `(${getActiveFiltersCount()})`}
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
        {priceRange.max > 0 && (
          <PriceRangeSection>
            <PriceRangeTitle>Price Range</PriceRangeTitle>
            <PriceSliderContainer>
              <PriceSliderTrack>
                <PriceSliderRange
                  $start={calculatePercentage(
                    localPriceRange[0],
                    priceRange.min,
                    priceRange.max,
                  )}
                  $end={calculatePercentage(
                    localPriceRange[1],
                    priceRange.min,
                    priceRange.max,
                  )}
                />
                <PriceSliderThumb
                  type="range"
                  min={priceRange.min}
                  max={priceRange.max}
                  value={localPriceRange[0]}
                  onChange={(e) =>
                    handlePriceSliderChange(0, parseInt(e.target.value))
                  }
                  $position={calculatePercentage(
                    localPriceRange[0],
                    priceRange.min,
                    priceRange.max,
                  )}
                />
                <PriceSliderThumb
                  type="range"
                  min={priceRange.min}
                  max={priceRange.max}
                  value={localPriceRange[1]}
                  onChange={(e) =>
                    handlePriceSliderChange(1, parseInt(e.target.value))
                  }
                  $position={calculatePercentage(
                    localPriceRange[1],
                    priceRange.min,
                    priceRange.max,
                  )}
                />
              </PriceSliderTrack>
              <PriceValues>
                <PriceValue>{formatPrice(localPriceRange[0])}</PriceValue>
                <PriceValue>{formatPrice(localPriceRange[1])}</PriceValue>
              </PriceValues>
            </PriceSliderContainer>
          </PriceRangeSection>
        )}

        {/* Brand Filter */}
        {brands.length > 0 && (
          <FilterAccordion $open={openSections.brand}>
            <FilterAccordionSummary onClick={() => toggleSection("brand")}>
              <span>Brand</span>
              <MdExpandMore />
            </FilterAccordionSummary>
            <FilterAccordionContent>
              {brands.map((brand) => (
                <FilterLabel key={brand}>
                  <FilterCheckbox
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleCheckboxChange("brands", brand)}
                  />
                  <FilterText>{brand}</FilterText>
                </FilterLabel>
              ))}
            </FilterAccordionContent>
          </FilterAccordion>
        )}

        {/* RAM Filter */}
        {ramOptions.length > 0 && (
          <FilterAccordion $open={openSections.ram}>
            <FilterAccordionSummary onClick={() => toggleSection("ram")}>
              <span>Memory (RAM)</span>
              <MdExpandMore />
            </FilterAccordionSummary>
            <FilterAccordionContent>
              {ramOptions.map((ram) => (
                <FilterLabel key={ram}>
                  <FilterCheckbox
                    type="checkbox"
                    checked={filters.ram.includes(ram)}
                    onChange={() => handleCheckboxChange("ram", ram)}
                  />
                  <FilterText>{ram}</FilterText>
                </FilterLabel>
              ))}
            </FilterAccordionContent>
          </FilterAccordion>
        )}

        {/* Storage Filter */}
        {storageOptions.length > 0 && (
          <FilterAccordion $open={openSections.storage}>
            <FilterAccordionSummary onClick={() => toggleSection("storage")}>
              <span>Storage</span>
              <MdExpandMore />
            </FilterAccordionSummary>
            <FilterAccordionContent>
              {storageOptions.map((storage) => (
                <FilterLabel key={storage}>
                  <FilterCheckbox
                    type="checkbox"
                    checked={filters.storage.includes(storage)}
                    onChange={() => handleCheckboxChange("storage", storage)}
                  />
                  <FilterText>{storage}</FilterText>
                </FilterLabel>
              ))}
            </FilterAccordionContent>
          </FilterAccordion>
        )}
      </FilterSection>

      <ApplyButton onClick={handleApplyFilters}>Apply Filters</ApplyButton>
    </Sidebar>
  );
};

export default FilterSidebar;
