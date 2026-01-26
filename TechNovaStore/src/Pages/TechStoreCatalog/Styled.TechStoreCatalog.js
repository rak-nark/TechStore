import styled from "styled-components";

export const CatalogContainer = styled.main`
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const CatalogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SortSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

export const ResultsText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const SortLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SortSelect = styled.select`
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#ffffff")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#e2e8f0")};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 0.5rem;
  font-size: 0.875rem;
  padding: 0.375rem 2rem 0.375rem 0.75rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }
`;

export const CatalogContent = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
