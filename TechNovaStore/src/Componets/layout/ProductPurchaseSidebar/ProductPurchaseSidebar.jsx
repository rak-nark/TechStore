import React, { useState } from "react";
import {
  MdStar,
  MdStarHalf,
  MdCheckCircle,
  MdLocalShipping,
  MdVerifiedUser,
  MdBolt,
} from "react-icons/md";
import {
  SidebarContainer,
  BadgeTag,
  ProductTitle,
  RatingContainer,
  StarsWrapper,
  RatingScore,
  ReviewCount,
  PriceSection,
  PriceAmount,
  StockStatus,
  OptionsSection,
  OptionLabel,
  ColorOptions,
  ColorButton,
  StorageOptions,
  StorageButton,
  ActionsSection,
  BuyButton,
  AddToCartButton,
  InfoBox,
  InfoItem,
  InfoIcon,
  InfoText,
} from "./Styled.ProductPurchaseSidebar";

const ProductPurchaseSidebar = ({
  badge = "New Release",
  title = "Product Name",
  rating = 4.8,
  reviewCount = 1240,
  price = 1099,
  inStock = true,
  colors = [],
  storageOptions = [],
  onBuyNow,
  onAddToCart,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value || null);
  const [selectedStorage, setSelectedStorage] = useState(
    storageOptions[1]?.value || null,
  );

  const formatCOP = (amount) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<MdStar key={`full-${i}`} />);
    }
    if (hasHalfStar) {
      stars.push(<MdStarHalf key="half" />);
    }
    return stars;
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow({ color: selectedColor, storage: selectedStorage });
    }
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ color: selectedColor, storage: selectedStorage });
    }
  };

  return (
    <SidebarContainer>
      <div>
        <BadgeTag>{badge}</BadgeTag>
        <ProductTitle>{title}</ProductTitle>
        <RatingContainer>
          <StarsWrapper>
            {renderStars(rating)}
            <RatingScore>{rating}</RatingScore>
          </StarsWrapper>
          <ReviewCount>({reviewCount.toLocaleString()} Reviews)</ReviewCount>
        </RatingContainer>
      </div>

      <PriceSection>
        <PriceAmount>{formatCOP(price)}</PriceAmount>
        <StockStatus $inStock={inStock}>
          <MdCheckCircle />
          {inStock ? "In Stock - Ready to ship" : "Out of Stock"}
        </StockStatus>
      </PriceSection>

      <OptionsSection>
        {colors.length > 0 && (
          <div>
            <OptionLabel>Color</OptionLabel>
            <ColorOptions>
              {colors.map((color) => (
                <ColorButton
                  key={color.value}
                  $color={color.hex}
                  $active={selectedColor === color.value}
                  onClick={() => setSelectedColor(color.value)}
                  aria-label={color.name}
                />
              ))}
            </ColorOptions>
          </div>
        )}

        {storageOptions.length > 0 && (
          <div>
            <OptionLabel>Storage</OptionLabel>
            <StorageOptions>
              {storageOptions.map((option) => (
                <StorageButton
                  key={option.value}
                  $active={selectedStorage === option.value}
                  onClick={() => setSelectedStorage(option.value)}
                >
                  {option.label}
                </StorageButton>
              ))}
            </StorageOptions>
          </div>
        )}
      </OptionsSection>

      <ActionsSection>
        <BuyButton onClick={handleBuyNow}>
          <MdBolt />
          Buy Now
        </BuyButton>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </ActionsSection>

      <InfoBox>
        <InfoItem>
          <InfoIcon>
            <MdLocalShipping />
          </InfoIcon>
          <InfoText>Free express shipping on orders over $500</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoIcon>
            <MdVerifiedUser />
          </InfoIcon>
          <InfoText>2-year manufacturer warranty included</InfoText>
        </InfoItem>
      </InfoBox>
    </SidebarContainer>
  );
};

export default ProductPurchaseSidebar;
