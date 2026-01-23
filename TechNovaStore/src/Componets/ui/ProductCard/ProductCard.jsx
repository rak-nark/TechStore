import React from "react";
import {
  CardContainer,
  ImageContainer,
  ProductImage,
  Badge,
  FavoriteButton,
  ContentSection,
  RatingContainer,
  StarIcon,
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

export const ProductCard = ({
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

  return (
    <CardContainer>
      <ImageContainer>
        <ProductImage src={image} alt={title} />
        {badge && <Badge $variant={badge.type}>{badge.text}</Badge>}
        <FavoriteButton onClick={onFavoriteClick}>
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
            <CurrentPrice>${currentPrice.toFixed(2)}</CurrentPrice>
            {oldPrice && <OldPrice>${oldPrice.toFixed(2)}</OldPrice>}
          </PriceContainer>
          <AddToCartButton onClick={onAddToCart}>
            <MdAddShoppingCart size={20} />
          </AddToCartButton>
        </PriceSection>
      </ContentSection>
    </CardContainer>
  );
};

export default ProductCard;
