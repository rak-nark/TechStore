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
  MdFavoriteBorder,
  MdStar,
  MdStarHalf,
  MdStarOutline,
  MdAddShoppingCart,
} from "react-icons/md";
import { useProductCardLogic } from "./useProductCardLogic";
import { useFavoriteLogic } from "./useFavoriteLogic";

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
  badge = null,
  title,
  description,
  rating = 0,
  reviewCount = 0,
  currentPrice,
  oldPrice = null,
  isFavorite = false,
  onFavoriteClick = () => {},
  onAddToCart = () => {},
}) => {
  const navigate = useNavigate();

  const { getStarData, handleAddToCart, handleFavorite } = useProductCardLogic({
    id,
    title,
    image,
    description,
    currentPrice,
    rating,
    reviewCount,
    onFavoriteClick,
    onAddToCart,
  });

  const { favorite, handleFavoriteClick } = useFavoriteLogic({
    id,
    title,
    image,
    currentPrice,
    isFavorite,
  });

  const handleCardClick = () => {
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  const renderStarsDisplay = () => {
    const { fullStars, hasHalfStar, emptyStars } = getStarData();
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<MdStar key={`full-${i}`} size={16} />);
    }

    if (hasHalfStar) {
      stars.push(<MdStarHalf key="half" size={16} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<MdStarOutline key={`empty-${i}`} size={16} />);
    }

    return stars;
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer>
        <ProductImage src={image} alt={title} />
        {badge && <Badge $variant={badge.type}>{badge.text}</Badge>}
        <FavoriteButton onClick={handleFavoriteClick} $active={favorite}>
          {favorite ? <MdFavorite size={18} /> : <MdFavoriteBorder size={18} />}
        </FavoriteButton>
      </ImageContainer>

      <ContentSection>
        <RatingContainer>
          {renderStarsDisplay()}
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
