import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdClose,
  MdAddShoppingCart,
  MdNotificationsActive,
} from "react-icons/md";
import {
  CardContainer,
  RemoveButton,
  ImageContainer,
  ProductImage,
  CardContent,
  CategoryBadge,
  ProductTitle,
  PriceSection,
  Price,
  StockStatus,
  StockIndicator,
  StockText,
  AddToCartButton,
} from "./Styled.WishlistCard";
import { useWishlistCardLogic } from "./useWishlistCardLogic";

const formatCOP = (price) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const WishlistCard = ({
  id,
  productId,
  category,
  name,
  price,
  image,
  inStock,
  stockLevel,
  stockStatus,
  onRemove,
  onAddToCart,
  onNotify,
}) => {
  const navigate = useNavigate();

  const { handleRemove, handleAddToCart, handleNotify } = useWishlistCardLogic({
    id,
    productId,
    name,
    price,
    image,
    inStock,
    onRemove,
    onAddToCart,
    onNotify,
  });

  const handleCardClick = () => {
    if (productId) {
      navigate(`/product/${productId}`);
    }
  };

  return (
    <CardContainer $outOfStock={!inStock} onClick={handleCardClick}>
      <RemoveButton onClick={handleRemove} aria-label="Remove from wishlist">
        <MdClose size={18} />
      </RemoveButton>

      <ImageContainer $outOfStock={!inStock}>
        <ProductImage src={image} alt={name} />
      </ImageContainer>

      <CardContent>
        <CategoryBadge>{category}</CategoryBadge>
        <ProductTitle>{name}</ProductTitle>

        <PriceSection>
          <Price>{formatCOP(price)}</Price>
          <StockStatus>
            <StockIndicator $status={stockStatus} />
            <StockText $status={stockStatus}>{stockLevel}</StockText>
          </StockStatus>
        </PriceSection>

        <AddToCartButton
          onClick={inStock ? handleAddToCart : handleNotify}
          disabled={!inStock && !onNotify}
        >
          {inStock ? (
            <>
              <MdAddShoppingCart size={18} />
              Add to Cart
            </>
          ) : (
            <>
              <MdNotificationsActive size={18} />
              Notify Me
            </>
          )}
        </AddToCartButton>
      </CardContent>
    </CardContainer>
  );
};

export default WishlistCard;
