import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  Content,
  Breadcrumbs,
  CrumbLink,
  Divider,
  CrumbCurrent,
  PageHeader,
  HeadingBlock,
  Title,
  Subtitle,
  HeaderActions,
  GhostButton,
  PrimaryGhostButton,
} from "./Styled.TechStoreCompare";
import ComparisonTable from "../Componets/layout/Compare/ComparisonTable/ComparisonTable";
import RelatedProducts from "../Componets/layout/Compare/RelatedProducts/RelatedProducts";
import {
  compareProducts,
  relatedProducts,
} from "../Data/compare";
import { MdShare, MdContentCopy } from "react-icons/md";

const TechStoreCompare = () => {
  const navigate = useNavigate();
  const [showDifferences, setShowDifferences] = useState(true);

  const products = compareProducts;

  const handleAddToCart = (productId) => {
    navigate("/cart");
  };

  const handleRemoveProduct = (productId) => {
    // Placeholder remove; in a real app we'd update state
    console.log("Remove product", productId);
  };

  return (
    <PageWrapper>
      <Content>
        <Breadcrumbs>
          <CrumbLink onClick={() => navigate("/")}>Home</CrumbLink>
          <Divider>/</Divider>
          <CrumbLink onClick={() => navigate("/catalog/laptops")}>
            Laptops
          </CrumbLink>
          <Divider>/</Divider>
          <CrumbCurrent>Comparison Tool</CrumbCurrent>
        </Breadcrumbs>

        <PageHeader>
          <HeadingBlock>
            <Title>Compare Laptops</Title>
            <Subtitle>
              Side-by-side technical specification analysis of premium devices.
            </Subtitle>
          </HeadingBlock>
          <HeaderActions>
            <GhostButton>
              <MdShare size={18} /> Share
            </GhostButton>
            <PrimaryGhostButton>
              <MdContentCopy size={18} /> Copy Comparison
            </PrimaryGhostButton>
          </HeaderActions>
        </PageHeader>

        <ComparisonTable
          products={products}
          sections={sections}
          showDifferences={showDifferences}
          onToggleDifferences={() => setShowDifferences((prev) => !prev)}
          onRemoveProduct={handleRemoveProduct}
          onAddToCart={handleAddToCart}
        />

        <RelatedProducts items={relatedProducts} onAdd={handleAddToCart} />
      </Content>
    </PageWrapper>
  );
};

export default TechStoreCompare;
