import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const CartTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ItemCount = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#64748b")};
  margin-left: 0.5rem;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const CartItemsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#64748b")};
    margin: 0 0 2rem 0;
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
  }
`;

export const CartSummaryColumn = styled.div`
  width: 100%;
  max-width: 24rem;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
