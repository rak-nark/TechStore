import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BadgeTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${({ theme }) => `${theme.colors.primary}1A`};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const ProductTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
`;

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fbbf24;
  gap: 0.125rem;

  svg {
    font-size: 1rem;
  }
`;

export const RatingScore = styled.span`
  margin-left: 0.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ReviewCount = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const PriceSection = styled.div`
  padding: 1.5rem 0;
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const PriceAmount = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StockStatus = styled.p`
  font-size: 0.875rem;
  color: ${({ $inStock }) => ($inStock ? "#10b981" : "#ef4444")};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.25rem;

  svg {
    font-size: 1rem;
  }
`;

export const OptionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OptionLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  display: block;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ColorOptions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ColorButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: ${({ $color }) => $color};
  border: 2px solid
    ${({ theme, $active }) =>
      $active
        ? theme.colors.primary
        : theme.mode === "dark"
          ? "#334155"
          : "#cbd5e1"};
  cursor: pointer;
  transition: all 0.2s;
  ${({ $active }) =>
    $active &&
    `
    box-shadow: 0 0 0 2px rgba(43, 108, 238, 0.2);
  `}

  &:hover {
    transform: scale(1.1);
  }
`;

export const StorageOptions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const StorageButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: ${({ theme, $active }) =>
    $active
      ? `2px solid ${theme.colors.primary}`
      : `1px solid ${theme.mode === "dark" ? "#1e293b" : "#e2e8f0"}`};
  background: ${({ theme, $active }) =>
    $active
      ? `${theme.colors.primary}1A`
      : theme.mode === "dark"
        ? "#1e293b"
        : "#f1f5f9"};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.textPrimary};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.5rem;
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #8b5cf6;
  color: #ffffff;
  border: none;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(139, 92, 246, 0.2);

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: #7c3aed;
  }
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: transparent;
  color: #8b5cf6;
  border: 2px solid #8b5cf6;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(139, 92, 246, 0.05);
  }
`;

export const InfoBox = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(30, 41, 59, 0.5)" : "#f1f5f9"};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const InfoIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  font-size: 1.25rem;
`;

export const InfoText = styled.span`
  line-height: 1.4;
`;
