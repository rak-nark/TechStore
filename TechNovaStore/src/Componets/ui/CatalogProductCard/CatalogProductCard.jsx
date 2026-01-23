import React, { useState } from "react";
import {
  MdFavorite,
  MdAddShoppingCart,
  MdShoppingCartCheckout,
} from "react-icons/md";
import {
  CardContainer,
  ImageContainer,
  ProductImage,
  BadgesContainer,
  Badge,
  OutOfStockOverlay,
  OutOfStockText,
  FavoriteButton,
  CardContent,
  CardHeader,
  BrandText,
  CompareLabel,
  CompareCheckbox,
  CompareText,
  ProductTitle,
  ProductDescription,
  CardFooter,
  PriceContainer,
  OldPrice,
  CurrentPrice,
  AddToCartButton,
} from "./Styled.CatalogProductCard";

const CatalogProductCard = ({
  id,
  brand,
  title,
  description,
  image,
  currentPrice,
  oldPrice,
  badges = [],
  inStock = true,
  isFavorite = false,
  isCompared = false,
  onFavoriteClick,
  onCompareClick,
  onAddToCart,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const [compared, setCompared] = useState(isCompared);

  const formatCOP = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setFavorite(!favorite);
    if (onFavoriteClick) {
      onFavoriteClick(id);
    }
  };

  const handleCompareClick = () => {
    setCompared(!compared);
    if (onCompareClick) {
      onCompareClick(id);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (inStock && onAddToCart) {
      onAddToCart(id);
    }
  };

  const getBadgeVariant = (badge) => {
    const variants = {
      New: "new",
      "Hot Deal": "sale",
      "Best Seller": "bestseller",
      "Low Stock": "lowstock",
      "In Stock": "instock",
    };
    return variants[badge] || "default";
  };

  return (
    <CardContainer $outOfStock={!inStock}>
      <ImageContainer>
        <ProductImage src={image} alt={title} />

        {badges.length > 0 && (
          <BadgesContainer>
            {badges.map((badge, index) => (
              <Badge key={index} $variant={getBadgeVariant(badge)}>
                {badge}
              </Badge>
            ))}
          </BadgesContainer>
        )}

        {!inStock && (
          <OutOfStockOverlay>
            <OutOfStockText>Out of Stock</OutOfStockText>
          </OutOfStockOverlay>
        )}

        <FavoriteButton onClick={handleFavoriteClick} $active={favorite}>
          <MdFavorite />
        </FavoriteButton>
      </ImageContainer>

      <CardContent>
        <CardHeader>
          <BrandText>{brand}</BrandText>
          <CompareLabel>
            <CompareCheckbox
              type="checkbox"
              checked={compared}
              onChange={handleCompareClick}
              disabled={!inStock}
            />
            <CompareText>COMPARE</CompareText>
          </CompareLabel>
        </CardHeader>

        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>

        <CardFooter>
          <PriceContainer>
            {oldPrice && <OldPrice>{formatCOP(oldPrice)}</OldPrice>}
            <CurrentPrice>{formatCOP(currentPrice)}</CurrentPrice>
          </PriceContainer>

          <AddToCartButton
            onClick={handleAddToCart}
            disabled={!inStock}
            $outOfStock={!inStock}
          >
            {inStock ? <MdAddShoppingCart /> : <MdShoppingCartCheckout />}
          </AddToCartButton>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default CatalogProductCard;
