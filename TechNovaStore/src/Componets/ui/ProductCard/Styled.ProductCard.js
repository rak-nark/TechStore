import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "#192233" : "#ffffff"};
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 16rem;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "#1e293b" : "#f8fafc"};
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background-color: ${({ $variant }) =>
    $variant === "sale" ? "#ef4444" : "#2b6cee"};
  color: #ffffff;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.8)"};
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#334155")};
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
  }

  &:hover {
    color: #ef4444;
  }
`;

export const ContentSection = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #eab308;
`;

export const StarIcon = styled.span`
  font-size: 0.875rem;
  ${({ $filled }) => $filled && "font-variation-settings: 'FILL' 1;"}
`;

export const ReviewCount = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-left: 0.25rem;
`;

export const ProductTitle = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrentPrice = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1.25rem;
`;

export const OldPrice = styled.span`
  color: #94a3b8;
  font-size: 0.75rem;
  text-decoration: line-through;
`;

export const AddToCartButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(43, 108, 238, 0.9);
  }
`;
