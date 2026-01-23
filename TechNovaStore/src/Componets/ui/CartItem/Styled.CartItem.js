import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  border-radius: 0.75rem;
  padding: 1rem;
  transition: all 0.3s;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const ItemImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 0.5rem;
  flex-shrink: 0;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f1f5f9")};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  margin: 0;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ItemSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#64748b")};
  margin: 0.25rem 0 0 0;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#94a3b8")};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
  flex-shrink: 0;

  &:hover {
    color: #ef4444;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f1f5f9")};
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

export const QuantityButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#64748b")};
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#0f172a" : "#ffffff"};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  width: 1rem;
  text-align: center;
`;

export const PriceDisplay = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
