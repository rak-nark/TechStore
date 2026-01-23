import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  opacity: ${({ $outOfStock }) => ($outOfStock ? "0.75" : "1")};
  filter: ${({ $outOfStock }) =>
    $outOfStock ? "grayscale(1)" : "grayscale(0)"};

  &:hover {
    border-color: ${({ theme, $outOfStock }) =>
      $outOfStock
        ? theme.mode === "dark"
          ? "#1e293b"
          : "#e2e8f0"
        : `${theme.colors.primary}80`};
    filter: ${({ $outOfStock }) =>
      $outOfStock ? "grayscale(1)" : "grayscale(0)"};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f8fafc")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s;

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const BadgesContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Badge = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "new":
        return `
          background: ${theme.colors.primary};
          color: #ffffff;
        `;
      case "sale":
        return `
          background: #f97316;
          color: #ffffff;
        `;
      case "bestseller":
        return `
          background: #3b82f6;
          color: #ffffff;
        `;
      case "lowstock":
        return `
          background: #ef4444;
          color: #ffffff;
        `;
      case "instock":
        return `
          background: #10b981;
          color: #ffffff;
        `;
      default:
        return `
          background: ${theme.mode === "dark" ? "#334155" : "#e2e8f0"};
          color: ${theme.colors.textPrimary};
        `;
    }
  }}
`;

export const OutOfStockOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(15, 23, 42, 0.4)" : "rgba(15, 23, 42, 0.4)"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OutOfStockText = styled.span`
  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#1e293b")};
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#475569")};
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(30, 41, 59, 0.9)"
      : "rgba(255, 255, 255, 0.9)"};
  border: none;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  svg {
    font-size: 1.25rem;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.textSecondary};
    transition: color 0.2s;
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const BrandText = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const CompareLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const CompareCheckbox = styled.input`
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 0.25rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#475569" : "#cbd5e1")};
  accent-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CompareText = styled.span`
  font-size: 0.6875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
`;

export const ProductTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.2s;

  ${CardContainer}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OldPrice = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: line-through;
`;

export const CurrentPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const AddToCartButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ $outOfStock, theme }) =>
    $outOfStock
      ? theme.mode === "dark"
        ? "#1e293b"
        : "#e2e8f0"
      : theme.colors.primary};
  color: ${({ $outOfStock, theme }) =>
    $outOfStock ? theme.colors.textMuted : "#ffffff"};
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $outOfStock }) => ($outOfStock ? "not-allowed" : "pointer")};
  transition: all 0.3s;

  svg {
    font-size: 1.25rem;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => "#1e5dd8"};
  }

  &:disabled {
    opacity: 0.6;
  }
`;
