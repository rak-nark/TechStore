import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CategoriesSection,
  HeaderContainer,
  Title,
  ViewAllLink,
  CategoriesGrid,
  CategoryCard,
  IconContainer,
  CategoryTitle,
  ProductCount,
} from "./Styled.Categories";
import {
  MdLaptopMac,
  MdSmartphone,
  MdHeadphones,
  MdSportsEsports,
} from "react-icons/md";

const defaultCategories = [
  {
    id: 1,
    name: "Laptops",
    icon: MdLaptopMac,
    productCount: "120+",
    route: "/catalog/laptops",
  },
  {
    id: 2,
    name: "Phones",
    icon: MdSmartphone,
    productCount: "85+",
    route: "/catalog/phones",
  },
  {
    id: 3,
    name: "Audio",
    icon: MdHeadphones,
    productCount: "200+",
    route: "/catalog/audio",
  },
  {
    id: 4,
    name: "Gaming",
    icon: MdSportsEsports,
    productCount: "50+",
    route: "/catalog/gaming",
  },
];

export const Categories = ({
  title = "Featured Categories",
  viewAllLink = "/catalog",
  categories = defaultCategories,
  onCategoryClick = () => {},
  onViewAllClick = () => {},
}) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(category.route);
    onCategoryClick(category);
  };

  return (
    <CategoriesSection>
      <HeaderContainer>
        <Title>{title}</Title>
        <ViewAllLink as={Link} to={viewAllLink} onClick={onViewAllClick}>
          View All
        </ViewAllLink>
      </HeaderContainer>

      <CategoriesGrid>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <CategoryCard
              key={category.id}
              onClick={() => handleCategoryClick(category)}
            >
              <IconContainer>
                <IconComponent size={32} />
              </IconContainer>
              <CategoryTitle>{category.name}</CategoryTitle>
              <ProductCount>{category.productCount} Products</ProductCount>
            </CategoryCard>
          );
        })}
      </CategoriesGrid>
    </CategoriesSection>
  );
};

export default Categories;
