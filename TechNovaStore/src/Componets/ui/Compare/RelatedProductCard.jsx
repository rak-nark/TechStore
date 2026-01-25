import React from "react";
import {
  RelatedCard,
  RelatedMedia,
  RelatedImage,
  RelatedName,
  RelatedDescription,
  RelatedFooter,
  RelatedPrice,
  IconButton,
} from "../../../Pages/Styled.TechStoreCompare";
import { MdAdd } from "react-icons/md";

const RelatedProductCard = ({ product, onAdd }) => {
  return (
    <RelatedCard>
      <RelatedMedia>
        <RelatedImage src={product.image} alt={product.name} />
      </RelatedMedia>
      <RelatedName>{product.name}</RelatedName>
      <RelatedDescription>{product.description}</RelatedDescription>
      <RelatedFooter>
        <RelatedPrice>{product.price}</RelatedPrice>
        <IconButton onClick={onAdd} aria-label="Add product">
          <MdAdd size={20} />
        </IconButton>
      </RelatedFooter>
    </RelatedCard>
  );
};

export default RelatedProductCard;
