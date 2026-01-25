import React from "react";
import {
  RelatedSection,
  RelatedHeader,
  RelatedTitle,
  RelatedLink,
  RelatedGrid,
} from "../../../Pages/Styled.TechStoreCompare";
import RelatedProductCard from "../../ui/Compare/RelatedProductCard";
import { MdArrowForward } from "react-icons/md";

const RelatedProducts = ({ items, onAdd }) => {
  return (
    <RelatedSection>
      <RelatedHeader>
        <RelatedTitle>Related Products to Consider</RelatedTitle>
        <RelatedLink href="#">
          View All <MdArrowForward size={18} />
        </RelatedLink>
      </RelatedHeader>
      <RelatedGrid>
        {items.map((item, idx) => (
          <RelatedProductCard
            key={idx}
            product={item}
            onAdd={() => onAdd(item.id)}
          />
        ))}
      </RelatedGrid>
    </RelatedSection>
  );
};

export default RelatedProducts;
