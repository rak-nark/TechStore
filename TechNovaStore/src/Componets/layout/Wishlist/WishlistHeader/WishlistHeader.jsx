import React from "react";
import { MdShoppingBag } from "react-icons/md";
import {
  HeaderContainer,
  HeadingBlock,
  Title,
  Subtitle,
  ActionButton,
} from "./Styled.WishlistHeader";

const WishlistHeader = ({ itemCount = 0, onMoveAllToCart }) => {
  return (
    <HeaderContainer>
      <HeadingBlock>
        <Title>My Wishlist</Title>
        <Subtitle>{itemCount} items saved for later</Subtitle>
      </HeadingBlock>

      <ActionButton onClick={onMoveAllToCart}>
        <MdShoppingBag size={20} />
        Move all to cart
      </ActionButton>
    </HeaderContainer>
  );
};

export default WishlistHeader;
