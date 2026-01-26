import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Componets/ui/Breadcrumbs/Breadcrumbs";
import ProductGallery from "../Componets/ui/ProductGallery/ProductGallery";
import ProductPurchaseSidebar from "../Componets/layout/ProductDetail/ProductPurchaseSidebar/ProductPurchaseSidebar";
import TechSpecs from "../Componets/layout/ProductDetail/TechSpecs/TechSpecs";
import ComparisonTable from "../Componets/layout/ProductDetail/ComparisonTable/ComparisonTable";
import ReviewsSection from "../Componets/layout/ProductDetail/ReviewsSection/ReviewsSection";
import {
  DetailContainer,
  HeroSection,
  GalleryColumn,
  SidebarColumn,
} from "./Styled.TechStoreProductDetail";
import { PRODUCTS } from "../Data/products";

const TechStoreProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS[id] || PRODUCTS[1];

  const breadcrumbItems = [
    { label: "Computers", path: "/catalog/computers" },
    {
      label: product.category,
      path: `/catalog/${product.category.toLowerCase()}`,
    },
    { label: product.name, path: `/product/${product.id}` },
  ];

  const handleBuyNow = (options) => {
    console.log("Buy Now:", product.name, options);
  };

  const handleAddToCart = (options) => {
    console.log("Add to Cart:", product.name, options);
  };

  return (
    <DetailContainer>
      <Breadcrumbs items={breadcrumbItems} />

      <HeroSection>
        <GalleryColumn>
          <ProductGallery images={product.images} videoUrl={null} />
        </GalleryColumn>

        <SidebarColumn>
          <ProductPurchaseSidebar
            badge={product.badge}
            title={product.name}
            rating={product.rating}
            reviewCount={product.reviewCount}
            price={product.price}
            inStock={product.inStock}
            colors={product.colors}
            storageOptions={product.storageOptions}
            onBuyNow={handleBuyNow}
            onAddToCart={handleAddToCart}
          />
        </SidebarColumn>
      </HeroSection>

      <TechSpecs specs={product.specs} />

      <ComparisonTable
        currentProduct={{ name: product.name, compareTo: product.compareTo }}
        comparisons={product.comparisons}
      />

      <ReviewsSection
        overallRating={product.rating}
        totalReviews={product.reviewCount}
        onWriteReview={() => console.log("Write review")}
        onLoadMore={() => console.log("Load more reviews")}
      />
    </DetailContainer>
  );
};

export default TechStoreProductDetail;
