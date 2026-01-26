import React from "react";
import {
  BestSellersSection,
  HeaderContainer,
  Title,
  NavigationContainer,
  NavButton,
  ProductsGrid,
} from "./Styled.BestSellers";
import ProductCard from "../../../ui/ProductCard/ProductCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useBestSellersLogic } from "./useBestSellersLogic";

export const BestSellers = ({
  title = "Best Sellers",
  products = undefined,
  onPrevClick = () => {},
  onNextClick = () => {},
  onFavoriteClick = () => {},
  onAddToCart = () => {},
}) => {
  const {
    title: displayTitle,
    products: displayProducts,
    handlePrevClick,
    handleNextClick,
    handleFavoriteClick,
    handleAddToCart,
  } = useBestSellersLogic({
    title,
    products,
    onPrevClick,
    onNextClick,
    onFavoriteClick,
    onAddToCart,
  });
  return (
    <BestSellersSection>
      <HeaderContainer>
        <Title>{displayTitle}</Title>
        <NavigationContainer>
          <NavButton onClick={handlePrevClick}>
            <MdChevronLeft size={24} />
          </NavButton>
          <NavButton onClick={handleNextClick}>
            <MdChevronRight size={24} />
          </NavButton>
        </NavigationContainer>
      </HeaderContainer>

      <ProductsGrid>
        {displayProducts &&
          displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              badge={product.badge}
              title={product.title}
              description={product.description}
              rating={product.rating}
              reviewCount={product.reviewCount}
              currentPrice={product.currentPrice}
              oldPrice={product.oldPrice}
              onFavoriteClick={() => handleFavoriteClick(product)}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
      </ProductsGrid>
    </BestSellersSection>
  );
};

export default BestSellers;
