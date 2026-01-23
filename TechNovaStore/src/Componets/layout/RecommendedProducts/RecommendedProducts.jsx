import React from "react";
import {
  RecommendedSection,
  SectionTitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  AddButton,
} from "./Styled.RecommendedProducts";

const formatCOP = (price) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const defaultProducts = [
  {
    id: 1,
    name: "Magic Mouse",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMrgPTll0ObaReVWVPG7lsLN0zTnUPz1ZSQEqBCW6DHBOmiSdHBimnFxpolJq3a_sZTuvtXYyDty_ssecKs9gxdKLl6LI9lmghvqEYYNVh2hIHXFkhySTIuPLvVrWOIK_niBA8m_bUnnfKTlPwZUDDurbj9Cm589mlwEF0wLVKWZ2EMTol6dKjz_ARfTF4F-MS_vK2eeMZ-zNwksa6lSYs1nuPesRSHJDzZsxa8-OFEoOAo0QCuuWLpuJa8i7bo45fjmnXRErSqjTo",
    price: 399000,
  },
  {
    id: 2,
    name: "FineWoven Case",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEBogro9RCOCHccALcXRxpr7cvsoJ90EksLrJy3g3_QAuBk_FJcjZpy5huOy3VcWkfRc0owoS5PHUf-Gwb5rr-u1cmi-Q-59OIIJCrOdttAvezjCTvIDnVMz2h8inxl8YDtUJ_t9bPZvVd67t3EpVWqlbgGaIAlWFnXrMe258CLnqu87t1hAOzSEKp8ej-S_56S-g5Vz-QEIr2DXbYa0UBh0Ko3dKy28ubioVhZxCY07E0y11pP2B7lhE5mzQnMMKkyszySNQKjkp9",
    price: 235000,
  },
  {
    id: 3,
    name: "USB-C Cable (2m)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfW6lgiy5_U9ezp2NY6y_rdQqAViJmPd4pV4lIyyf1Jyf_qYp4AnJthdeJDG8WFHkgNde-P4bWKEctfJ4M5z68fImhCazavC7G6w2HJ77EefdbACM-0P0pRg1EHhU6txMYkvgrTqeEuU8AbwivsM0SgiMWVuw0nIrFRdFEOR_01IjsNqy-49G-1WqvGhA3goGWBS2z-Evf1np9B3BoJT7_Rbz-Qze8AJ8t_dIyI0WYXuPdYtLOX4IqZAGVi6YT3Ne1z3w1Nirf_zzq",
    price: 89000,
  },
  {
    id: 4,
    name: "Sleeve Case",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCO-NCAGM1SdXwUXj9RFf0Y0pPsQDjmixzUfQPNQmvz2HNQB687wJrrfJv8q24VCpCH7Xn0L5NREy6ZtGPIzNT8a1rNmLXY3SweXN3aS1xK7pvpTQcpieqOJlBld9s9-9TPM9lVmpI3ioBKpepiJXfOoX-mP7lcPe13bDcM0q3GLQud6TswaxhXk3qoHNqrJaU47TtlgJKiMZZGstHQX-lOTIq1IRfl_MlA212J0eg11A1RyDDYNBzw2PYwpgLbwIFqraaFQF6Ky2xz",
    price: 175000,
  },
];

const RecommendedProducts = ({
  products = defaultProducts,
  onAddToCart = () => {},
}) => {
  return (
    <RecommendedSection>
      <SectionTitle>You might also like</SectionTitle>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{formatCOP(product.price)}</ProductPrice>
              <AddButton onClick={() => onAddToCart(product.id)}>
                Add to Cart
              </AddButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </RecommendedSection>
  );
};

export default RecommendedProducts;
