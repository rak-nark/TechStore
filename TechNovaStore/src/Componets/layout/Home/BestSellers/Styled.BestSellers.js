import styled from "styled-components";

export const BestSellersSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(18, 25, 38, 0.5)" : "#f1f5f9"};

  @media (min-width: 1024px) {
    padding: 4rem 5rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const NavButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#cbd5e1")};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.textPrimary};
      border-color: ${({ theme }) =>
        theme.mode === "dark" ? "#334155" : "#cbd5e1"};
    }
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
