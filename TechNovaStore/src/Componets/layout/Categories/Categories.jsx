import React from "react";
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
  },
  {
    id: 2,
    name: "Phones",
    icon: MdSmartphone,
    productCount: "85+",
  },
  {
    id: 3,
    name: "Audio",
    icon: MdHeadphones,
    productCount: "200+",
  },
  {
    id: 4,
    name: "Gaming",
    icon: MdSportsEsports,
    productCount: "50+",
  },
];

export const Categories = ({
  title = "Featured Categories",
  viewAllLink = "#",
  categories = defaultCategories,
  onCategoryClick = () => {},
  onViewAllClick = () => {},
}) => {
  return (
    <CategoriesSection>
      <HeaderContainer>
        <Title>{title}</Title>
        <ViewAllLink href={viewAllLink} onClick={onViewAllClick}>
          View All
        </ViewAllLink>
      </HeaderContainer>

      <CategoriesGrid>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <CategoryCard
              key={category.id}
              onClick={() => onCategoryClick(category)}
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
