import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductMedia = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  background: ${({ theme }) => (theme.mode === "dark" ? "#232f48" : "#f1f5f9")};
  aspect-ratio: 4 / 3;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 0.35rem;
  border-radius: 999px;
  cursor: pointer;
`;

export const ProductMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const ProductSubtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#475569")};
`;

export const ProductPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 0.75rem;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 18px -10px ${({ theme }) => theme.colors.primary};
  }
`;
