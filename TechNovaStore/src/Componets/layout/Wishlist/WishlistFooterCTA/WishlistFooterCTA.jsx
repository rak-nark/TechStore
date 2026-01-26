import React from "react";
import { MdShoppingBasket, MdArrowForward } from "react-icons/md";
import {
  CTAContainer,
  IconWrapper,
  CTATitle,
  CTADescription,
  CTALink,
} from "./Styled.WishlistFooterCTA";

const WishlistFooterCTA = ({ onContinueShopping }) => {
  return (
    <CTAContainer>
      <IconWrapper>
        <MdShoppingBasket size={48} />
      </IconWrapper>
      <CTATitle>Want to see more?</CTATitle>
      <CTADescription>
        Browse our latest arrivals and tech deals to add more amazing gadgets to
        your list.
      </CTADescription>
      <CTALink onClick={onContinueShopping}>
        Continue Shopping
        <MdArrowForward size={20} />
      </CTALink>
    </CTAContainer>
  );
};

export default WishlistFooterCTA;
