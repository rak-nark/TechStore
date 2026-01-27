import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../Componets/ui/Breadcrumbs/Breadcrumbs";
import WishlistHeader from "../../Componets/layout/Wishlist/WishlistHeader/WishlistHeader";
import WishlistSearchBar from "../../Componets/layout/Wishlist/WishlistSearchBar/WishlistSearchBar";
import WishlistGrid from "../../Componets/layout/Wishlist/WishlistGrid/WishlistGrid";
import WishlistFooterCTA from "../../Componets/layout/Wishlist/WishlistFooterCTA/WishlistFooterCTA";
import { useWishlistLogic } from "./useWishlistLogic";
import {
  WishlistContainer,
  BreadcrumbsWrapper,
} from "./Styled.TechStoreWishlist";

const TechStoreWishlist = () => {
  const navigate = useNavigate();
  const {
    items,
    filteredItems,
    searchQuery,
    handleRemove,
    handleAddToCart,
    handleNotify,
    handleMoveAllToCart,
    handleSearchChange,
  } = useWishlistLogic();

  const breadcrumbItems = [{ label: "Home", path: "/" }];

  return (
    <WishlistContainer>
      <BreadcrumbsWrapper>
        <Breadcrumbs items={breadcrumbItems} currentLabel="Wishlist" />
      </BreadcrumbsWrapper>

      <WishlistHeader
        itemCount={items.length}
        onMoveAllToCart={handleMoveAllToCart}
      />

      <WishlistSearchBar value={searchQuery} onChange={handleSearchChange} />

      <WishlistGrid
        items={filteredItems}
        onRemove={handleRemove}
        onAddToCart={handleAddToCart}
        onNotify={handleNotify}
      />

      <WishlistFooterCTA
        onContinueShopping={() => navigate("/catalog/laptops")}
      />
    </WishlistContainer>
  );
};

export default TechStoreWishlist;
