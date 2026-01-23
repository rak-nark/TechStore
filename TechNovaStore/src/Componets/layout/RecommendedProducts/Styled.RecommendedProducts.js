import styled from "styled-components";

export const RecommendedSection = styled.section`
  margin-top: 5rem;
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  padding-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  border-radius: 0.75rem;
  padding: 1rem;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.5rem;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f1f5f9")};
  margin-bottom: 1rem;
  transition: transform 0.3s;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductName = styled.h4`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const AddButton = styled.button`
  width: 100%;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &:active {
    transform: scale(0.98);
  }
`;
