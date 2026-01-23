import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  ImageContainer,
  ProductImage,
  Badge,
  FavoriteButton,
  ContentSection,
  RatingContainer,
  ReviewCount,
  ProductTitle,
  ProductDescription,
  PriceSection,
  PriceContainer,
  CurrentPrice,
  OldPrice,
  AddToCartButton,
} from "./Styled.ProductCard";
import {
  MdFavorite,
  MdStar,
  MdStarHalf,
  MdStarOutline,
  MdAddShoppingCart,
} from "react-icons/md";

// Format price as Colombian Pesos
const formatCOP = (price) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const ProductCard = ({
  id,
  image,
  badge = null, // { type: 'sale' | 'new', text: 'Sale' | 'New' }
  title,
  description,
  rating = 0,
  reviewCount = 0,
  currentPrice,
  oldPrice = null,
  onFavoriteClick = () => {},
  onAddToCart = () => {},
}) => {
  const navigate = useNavigate();

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<MdStar key={`full-${i}`} size={16} />);
    }

    if (hasHalfStar) {
      stars.push(<MdStarHalf key="half" size={16} />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<MdStarOutline key={`empty-${i}`} size={16} />);
    }

    return stars;
  };

  const handleCardClick = () => {
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart();
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    onFavoriteClick();
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer>
        <ProductImage src={image} alt={title} />
        {badge && <Badge $variant={badge.type}>{badge.text}</Badge>}
        <FavoriteButton onClick={handleFavorite}>
          <MdFavorite size={18} />
        </FavoriteButton>
      </ImageContainer>

      <ContentSection>
        <RatingContainer>
          {renderStars()}
          <ReviewCount>({reviewCount})</ReviewCount>
        </RatingContainer>

        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>

        <PriceSection>
          <PriceContainer>
            <CurrentPrice>{formatCOP(currentPrice)}</CurrentPrice>
            {oldPrice && <OldPrice>{formatCOP(oldPrice)}</OldPrice>}
          </PriceContainer>
          <AddToCartButton onClick={handleAddToCart}>
            <MdAddShoppingCart size={20} />
          </AddToCartButton>
        </PriceSection>
      </ContentSection>
    </CardContainer>
  );
};

export default ProductCard;
