import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../Componets/ui/Breadcrumbs/Breadcrumbs";
import WishlistHeader from "../../Componets/layout/Wishlist/WishlistHeader/WishlistHeader";
import WishlistSearchBar from "../../Componets/layout/Wishlist/WishlistSearchBar/WishlistSearchBar";
import WishlistGrid from "../../Componets/layout/Wishlist/WishlistGrid/WishlistGrid";
import WishlistFooterCTA from "../../Componets/layout/Wishlist/WishlistFooterCTA/WishlistFooterCTA";
import { wishlistItems } from "../../Data/wishlist";
import {
  WishlistContainer,
  BreadcrumbsWrapper,
} from "./Styled.TechStoreWishlist";

const TechStoreWishlist = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(wishlistItems);
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [{ label: "Home", path: "/" }];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
    console.log("Remove item:", id);
  };

  const handleAddToCart = (productId) => {
    console.log("Add to cart:", productId);
    navigate("/cart");
  };

  const handleNotify = (productId) => {
    console.log("Notify when available:", productId);
    alert("You'll be notified when this product is back in stock!");
  };

  const handleMoveAllToCart = () => {
    const inStockItems = items.filter((item) => item.inStock);
    console.log("Moving all in-stock items to cart:", inStockItems);
    navigate("/cart");
  };

  const handleContinueShopping = () => {
    navigate("/catalog/laptops");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

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

      <WishlistFooterCTA onContinueShopping={handleContinueShopping} />
    </WishlistContainer>
  );
};

export default TechStoreWishlist;
