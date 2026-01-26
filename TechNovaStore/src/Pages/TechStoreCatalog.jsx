import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../Componets/ui/Breadcrumbs/Breadcrumbs";
import FilterSidebar from "../Componets/layout/Catalog/FilterSidebar/FilterSidebar";
import CatalogProductCard from "../Componets/ui/CatalogProductCard/CatalogProductCard";
import Pagination from "../Componets/ui/Pagination/Pagination";
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
import { catalogProducts } from "../Data/catalog";

const TechStoreCatalog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  const breadcrumbItems = [
    { label: "Computers", path: "/catalog/computers" },
    { label: "Laptops", path: "/catalog/laptops" },
  ];

  const products = catalogProducts;

  const handleFiltersChange = (filters) => {
    console.log("Filters changed:", filters);
    // Aquí se implementaría la lógica de filtrado
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <CatalogContainer>
      <CatalogHeader>
        <Breadcrumbs items={breadcrumbItems} />

        <SortSection>
          <ResultsText>Showing 24 of 156 products</ResultsText>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SortLabel>Sort by:</SortLabel>
            <SortSelect value={sortBy} onChange={handleSortChange}>
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
            {products.map((product) => (
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
            totalPages={12}
            onPageChange={handlePageChange}
          />
        </div>
      </CatalogContent>
    </CatalogContainer>
  );
};

export default TechStoreCatalog;
