import React from "react";
import {
  BestSellersSection,
  HeaderContainer,
  Title,
  NavigationContainer,
  NavButton,
  ProductsGrid,
} from "./Styled.BestSellers";
import ProductCard from "../../ui/ProductCard/ProductCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const defaultProducts = [
  {
    id: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnRkNMYEHMLWxL31XX7j6e8EbOaOYV2qk8JdArdeg3LobAmw0ZbmkteSvtRIScyuunaQ6u9wWNbVa2Y8s5ZdrmW46XfPkijrHUuwD6uGV-4RWU7Hubl9vIHQoNzw_ILDxR80c54wFBw7CqzXXdXqyPva_eXv9v9xY0qwIzzaBqtb9JFpah4vaiLB7XpX-OzKofzWa6xuakvCkUXmZ6n7OQR0SGWxeHySm8Q8GNvAIj0wImH3cHaAlqIG7RB0HPqz9Jfg2Wt9i7toQd",
    badge: { type: "sale", text: "Sale" },
    title: "Sonic X-10 Wireless",
    description:
      "Pure studio quality audio with active noise cancellation technology.",
    rating: 4.5,
    reviewCount: 42,
    currentPrice: 299.0,
    oldPrice: 349.0,
  },
  {
    id: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_1Ud5QR59uTDHTeTjB8SO-YjGFXx4YfTkuStR6y1OC66G1tKh_iv2HtqTVebz0aIA73npxqoNSFHcCYKRFwlNqL9V35458nyqsDCWjEyVTDNlCAWeIowHzER1me04z_masi-vJaEt-Mz4OHLOIVQIu_LJhO0KD_k-pC7dFjGhx-o5agNvyGvTnY39vXwT5_JwQGjcdCuC8q7LIlnpfkbhyLKCF9WzleuMBGC8lE0N6ifqpG-4_dkQU5yOJynRRG9_-vc4-tz5GyQl",
    badge: null,
    title: "Vortex G-Pro Mouse",
    description:
      "Ultra-responsive gaming mouse with customizable RGB lighting and weights.",
    rating: 5,
    reviewCount: 128,
    currentPrice: 89.0,
    oldPrice: null,
  },
  {
    id: 3,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBo60gOhke02hU-VYdGZdy7bebc2nuMdjq3ZJ051GFiKAQepEX4__jxQryROpGUpKiic5GUjUI5TNaL9T2qpI06QQ-U3HZZ1CEQ0Ro-yYYVBBEA5jJGDfIdrtCaER-WJV9PU2QFWQ7kUbkTrXt6AN45ZkoQkliN0Ji4L5oWy8Il4IOUPYi0-_7CzVcxUs4gRBZgjajLOFyMSH-lsP4E0yqKYopKXiSb1gwg5Mt0jlKGH0J0xFmE3QxQgDThXCJgcBrOz0GJX6t3SL_1",
    badge: { type: "new", text: "New" },
    title: "iPhone 15 Pro Max",
    description:
      "Titanium design, A17 Pro chip, and the most powerful iPhone camera system.",
    rating: 4,
    reviewCount: 15,
    currentPrice: 1199.0,
    oldPrice: null,
  },
  {
    id: 4,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJz2ol-euX4sVjBouXSfKLfagaYSokglWLM5e7KnvydK-KgOarfpikM_nT9LQRhLBiofazsHvU3zHXIzBKKfp1BBPzqPbSuJaK10ZxIma1bSfH4G4K7fo-UOyqGEHqrAKMFlOZib5lh3bBoMLM9m7UWEK6EDlX298IgaL6EsTqlJIiqMZIvqb7g2CTSpRu4Td76gebqd9gHBfOef6nujCXLZG00X9PErtuQGcIuHADXyhgqYZtoiEus-nVo23goIZeQeFvumDsAgH2",
    badge: null,
    title: "Titan Smart Watch",
    description:
      "Monitor your health metrics and stay connected with this premium wearable.",
    rating: 4,
    reviewCount: 89,
    currentPrice: 349.0,
    oldPrice: null,
  },
];

export const BestSellers = ({
  title = "Best Sellers",
  products = defaultProducts,
  onPrevClick = () => {},
  onNextClick = () => {},
  onFavoriteClick = () => {},
  onAddToCart = () => {},
}) => {
  return (
    <BestSellersSection>
      <HeaderContainer>
        <Title>{title}</Title>
        <NavigationContainer>
          <NavButton onClick={onPrevClick}>
            <MdChevronLeft size={24} />
          </NavButton>
          <NavButton onClick={onNextClick}>
            <MdChevronRight size={24} />
          </NavButton>
        </NavigationContainer>
      </HeaderContainer>

      <ProductsGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            badge={product.badge}
            title={product.title}
            description={product.description}
            rating={product.rating}
            reviewCount={product.reviewCount}
            currentPrice={product.currentPrice}
            oldPrice={product.oldPrice}
            onFavoriteClick={() => onFavoriteClick(product)}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </ProductsGrid>
    </BestSellersSection>
  );
};

export default BestSellers;
