import React from "react";
import WishlistCard from "../../../ui/WishlistCard/WishlistCard";
import { GridContainer } from "./Styled.WishlistGrid";

const WishlistGrid = ({ items = [], onRemove, onAddToCart, onNotify }) => {
  return (
    <GridContainer>
      {items.map((item) => (
        <WishlistCard
          key={item.id}
          {...item}
          onRemove={onRemove}
          onAddToCart={onAddToCart}
          onNotify={onNotify}
        />
      ))}
    </GridContainer>
  );
};

export default WishlistGrid;
