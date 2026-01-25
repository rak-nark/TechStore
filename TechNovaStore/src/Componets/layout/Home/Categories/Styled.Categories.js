import styled from "styled-components";

export const CategoriesSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem 4rem;

  @media (min-width: 1024px) {
    padding: 0 5rem 4rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ViewAllLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.75rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "#192233" : "#ffffff"};
  padding: 1.5rem;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) =>
      theme.mode === "dark"
        ? "0 10px 15px -3px rgba(43, 108, 238, 0.05)"
        : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"};
  }
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "#232f48" : "#f1f5f9"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  font-size: 2rem;

  ${CategoryCard}:hover & {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
  }
`;

export const CategoryTitle = styled.h3`
  font-weight: bold;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ProductCount = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;
