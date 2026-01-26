import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow:
      0 20px 25px -5px rgba(140, 43, 238, 0.1),
      0 10px 10px -5px rgba(140, 43, 238, 0.04);
    transform: translateY(-2px);
  }

  ${({ $outOfStock }) =>
    $outOfStock &&
    `
    opacity: 0.6;
  `}
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors.error};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: white;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;

  ${({ $outOfStock }) =>
    $outOfStock &&
    `
    filter: grayscale(1);
  `}
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CategoryBadge = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  margin-bottom: 8px;
  display: block;
`;

export const ProductTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
  line-height: 1.3;
  font-family: ${({ theme }) => theme.fonts.display};
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StockStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StockIndicator = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $status, theme }) => {
    if ($status === "green") return theme.colors.success;
    if ($status === "amber") return theme.colors.warning;
    if ($status === "red") return theme.colors.error;
    return theme.colors.textSecondary;
  }};
`;

export const StockText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ $status, theme }) => {
    if ($status === "green") return theme.colors.success;
    if ($status === "amber") return theme.colors.warning;
    if ($status === "red") return theme.colors.error;
    return theme.colors.textSecondary;
  }};
`;

export const AddToCartButton = styled.button`
  margin-top: auto;
  width: 100%;
  padding: 12px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: not-allowed;
  }
`;
