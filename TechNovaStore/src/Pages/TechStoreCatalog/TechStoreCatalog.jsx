import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../Componets/ui/Breadcrumbs/Breadcrumbs";
import FilterSidebar from "../../Componets/layout/Catalog/FilterSidebar/FilterSidebar";
import CatalogProductCard from "../../Componets/ui/CatalogProductCard/CatalogProductCard";
import Pagination from "../../Componets/ui/Pagination/Pagination";
import {
  CatalogContainer,
  CatalogHeader,
  SortSection,
  ResultsText,
  SortLabel,
  SortSelect,
  CatalogContent,
  ProductGrid,
} from "./Styled.TechStoreCatalog";
import { useCatalogPaginationLogic } from "./useCatalogPaginationLogic";

// Mapping de URLs a categorías
const CATEGORY_MAP = {
  laptops: "Laptops",
  phones: "Phones",
  audio: "Audio",
  accessories: "Accessories",
};

const CATEGORY_BREADCRUMBS = {
  Laptops: { label: "Laptops", path: "/catalog/laptops" },
  Phones: { label: "Phones", path: "/catalog/phones" },
  Audio: { label: "Audio", path: "/catalog/audio" },
  Accessories: { label: "Accessories", path: "/catalog/accessories" },
};

const TechStoreCatalog = ({ productType = "Laptops" }) => {
  const navigate = useNavigate();
  const { category } = useParams();

  // Determinar la categoría a usar
  const normalizedCategory = useMemo(() => {
    if (category) {
      const mapped = CATEGORY_MAP[category];
      return mapped || "Laptops";
    }
    return productType;
  }, [category, productType]);

  const breadcrumbItems = useMemo(() => {
    const breadcrumb = CATEGORY_BREADCRUMBS[normalizedCategory];
    return [
      { label: "Home", path: "/" },
      breadcrumb || { label: normalizedCategory, path: `/catalog/${category}` },
    ];
  }, [normalizedCategory, category]);

  const {
    currentPage,
    totalPages,
    totalItems,
    productsPage,
    sortBy,
    handlePageChange,
    handleSortChange,
  } = useCatalogPaginationLogic({
    productType: normalizedCategory,
    pageSize: 6,
  });

  const handleFiltersChange = (filters) => {
    console.log("Filters changed:", filters);
    // Aquí se implementaría la lógica de filtrado
  };

  return (
    <CatalogContainer>
      <CatalogHeader>
        <Breadcrumbs items={breadcrumbItems} />

        <SortSection>
          <ResultsText>
            Showing {productsPage.length} of {totalItems} products
          </ResultsText>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SortLabel>Sort by:</SortLabel>
            <SortSelect
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </SortSelect>
          </div>
        </SortSection>
      </CatalogHeader>

      <CatalogContent>
        <FilterSidebar onFiltersChange={handleFiltersChange} />

        <div style={{ flex: 1 }}>
          <ProductGrid>
            {productsPage.map((product) => (
              <CatalogProductCard
                key={product.id}
                {...product}
                onFavoriteClick={(id) => console.log("Favorite:", id)}
                onCompareClick={() => navigate("/compare")}
                onAddToCart={(id) => console.log("Add to cart:", id)}
              />
            ))}
          </ProductGrid>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </CatalogContent>
    </CatalogContainer>
  );
};

export default TechStoreCatalog;
