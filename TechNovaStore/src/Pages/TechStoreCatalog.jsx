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

const TechStoreCatalog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  const breadcrumbItems = [
    { label: "Computers", path: "/catalog/computers" },
    { label: "Laptops", path: "/catalog/laptops" },
  ];

  const products = [
    {
      id: 1,
      brand: "Apple",
      title: 'MacBook Pro 14" M3 Chip',
      description:
        "8-core CPU, 10-core GPU, 8GB Unified Memory, 512GB SSD Storage, Liquid Retina XDR.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDGKyxw3qREtNjQNVS0HYlChrFUC_WtS-6NU_dJB045P1rM9l2Ni_F6QnOFRJ5ozZbWbe6nAgEiWlH8IvBN7HUBO0p2K0FXC96AZIC-_15OpT66GRACkHp7hFnw0AjBVvPV229F00AF0srGCrmwtlat9oE5g6M8IqJ6fyMRBrIRqV2emT5PxeKvZXsRCTf5YwgDLawkYZySOL6AGP-5JFWcJVGwJK9Yy_wCQGZ6LANLLoky-XW28K4HBR-FCy-k-KrB3LwX5zFVBIvc",
      currentPrice: 5995000,
      oldPrice: 6395000,
      badges: ["New", "In Stock"],
      inStock: true,
    },
    {
      id: 2,
      brand: "Dell",
      title: "Dell XPS 13 Plus",
      description:
        'Intel Core i7, 16GB RAM, 1TB SSD, 13.4" 4K OLED Touch Display, Platinum Gray.',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7Rgp5rhXgzQVxy0_vYqdfwDCYbRx3k3yphhRqpljwjGW-iTP8hxa-wpgx7espoE0AmxXf7AxsNX3hr71me-NDJEmnOwmcD792pfZD-KMgRKRlbXsYuX2CZKkMEkXu-O1DFiQEC6_7HQIHEuH8C-wexxrNJV83u0JdhQRhM6HUdzJcSf2YNrYJI6ngz-2uK9piW56HZOike3tXy0vVWKtjgFWZ-J3AtKogxU-S8EHdHnG_hSnlvNVppp-D53iqE2Ob6tMwuPpK_4_",
      currentPrice: 5195000,
      oldPrice: null,
      badges: ["Hot Deal", "In Stock"],
      inStock: true,
    },
    {
      id: 3,
      brand: "Razer",
      title: "Razer Blade 15 Gaming",
      description:
        "RTX 4070, Core i9, 32GB RAM, 1TB SSD, 240Hz QHD+ Display, Chroma RGB.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9E-gcgtMpbFIHQ8uB-xLjee6LyG02S-6WVw4z0F_zshpC2b3aFUEXSTZmTKq1jO-7faZLZhFocgW84pRaBUik8679nZ3XcSY1xc5MVkKgYfuvxYqSBvLH-J9oKYClZMaj0B1WyXs7qlCPogIxMd6oPxxYstl0ZfovzS3K6scneI4DjdKjjiBDjILVt5rJIGmfC09dEAIIzdBptHycG8MpDIKYHWqPFY9qE_b3oZ1HQOgZgUBnn93yhOoWORb-aiyQgJJ73QR0oV9G",
      currentPrice: 11195000,
      oldPrice: null,
      badges: ["Low Stock"],
      inStock: true,
      isFavorite: true,
      isCompared: true,
    },
    {
      id: 4,
      brand: "ASUS",
      title: "ROG Zephyrus G14",
      description:
        'Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD, 14" Nebula Display, Moonlight White.',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuChugQznoMxkY16-58NUkwJ3MBOy3MPkplpXNieOsMbkqLxEih6MhSMBNLuS630I0LAZyG_dj9w89qUbbdWKi7RthYsu0wskOHg03zNdrgQeEox5J4iGO4fLZeZOKe8NijHcdHCcfMSwEDWtfE-ZP6-60sQvGMx_USK12OEZIihL4mjfhcGATUPWq_CmT7sXwzzWvCfcMh68rG8IEH_IM6-stnQ2eiHzttzwMLoo1Ni4U3rvPcn6jyZw5j5BAowuG4Z38EFzJiccleM",
      currentPrice: 7395000,
      oldPrice: null,
      badges: ["In Stock"],
      inStock: true,
    },
    {
      id: 5,
      brand: "Microsoft",
      title: "Surface Laptop 5",
      description:
        'Core i5, 8GB RAM, 256GB SSD, 13.5" PixelSense Touch, Alcantara Sage.',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_hL42501ZLhRNfW7h6J880AdnOoRxFreGMYmH11ZEe172dzPT15AeeVjQ3qNL5is7HBOWTVboIPn-WZKHbSISuWefjeZHHaXZgrkIqFYcmTrQX7xMACUobRVEMINFNICaLZ_jipJ1nIhRMGJBrsji7dq0Lv21R2NamVQRyR2CKQbTMdRsR78tjpW33pQsTq-36NE0cLmaa2Onc-FozGa4XHGlZGuFFWDNVjCfM94bLfto-v4IqED05MNTlUwj7RvVu7GrXYQM7Aw",
      currentPrice: 3995000,
      oldPrice: null,
      badges: ["Best Seller", "In Stock"],
      inStock: true,
    },
    {
      id: 6,
      brand: "Apple",
      title: 'MacBook Air 13" M2',
      description:
        "8-core CPU, 8-core GPU, 8GB RAM, 256GB SSD, Liquid Retina, Midnight.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1syvIoRmNCkkVHpnIGxHOLLzwSBeKoDvnMu5YbOe4fmYNEBXdcWMOtBswpqr6ucCVtGUmU27eYLq50hCDF2pBZ4LnzF-C60O04A2DvUsQFHLvSkImjNrXByPhJ3cw52XGLb3wInuIwW7vTfSpbNNLJgQwTKIQAF-7LKzQSuN2L_PYwPSXqS2W7hZP2FAejuHuyoixiqK03g8S7_oP3RbmttE6iHrLG-Nfd-zBuHE9VyE9lh-6YEm6UP1h8_k-T_HWFeQKuO1YxY2R",
      currentPrice: 4395000,
      oldPrice: null,
      badges: [],
      inStock: false,
    },
  ];

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
