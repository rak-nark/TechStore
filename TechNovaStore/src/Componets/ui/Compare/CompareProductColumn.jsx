import React from "react";
import {
  ProductCard,
  ProductMedia,
  ProductImage,
  RemoveButton,
  ProductMeta,
  ProductTitle,
  ProductSubtitle,
  ProductPrice,
  PrimaryButton,
} from "../../../Pages/Styled.TechStoreCompare";
import { MdClose } from "react-icons/md";

const CompareProductColumn = ({ product, onRemove, onAddToCart }) => {
  return (
    <ProductCard>
      <div style={{ position: "relative" }}>
        <ProductMedia>
          <ProductImage src={product.image} alt={product.name} />
          <RemoveButton onClick={onRemove} aria-label="Remove product">
            <MdClose size={18} />
          </RemoveButton>
        </ProductMedia>
      </div>
      <ProductMeta>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductSubtitle>{product.subtitle}</ProductSubtitle>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductMeta>
      <PrimaryButton onClick={onAddToCart}>Add to Cart</PrimaryButton>
    </ProductCard>
  );
};

export default CompareProductColumn;
