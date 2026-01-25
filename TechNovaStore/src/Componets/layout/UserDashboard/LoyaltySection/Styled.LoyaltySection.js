import styled from "styled-components";

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const LoyaltyCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(30, 41, 59, 0.5)" : "#f1f5f9"};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  padding: 1.5rem;
  height: 100%;
`;

export const LoyaltyContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const LoyaltyText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LoyaltyPoints = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
`;

export const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProgressBar = styled.div`
  width: 100%;
  background: ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#cbd5e1")};
  height: 0.5rem;
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
`;

export const ProgressText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#64748b")};
  margin: 0;
`;

export const ViewRewardsButton = styled.button`
  background: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#1f2937" : "#ffffff")};
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const LoyaltyImage = styled.div`
  width: 100%;
  max-width: 12rem;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #2b6cee 0%, #60a5fa 100%);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  color: #ffffff;
`;

export const DecorativeBackground = styled.div`
  position: absolute;
  right: -2.5rem;
  bottom: -2.5rem;
  width: 10rem;
  height: 10rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(43, 108, 238, 0.1)"
      : "rgba(43, 108, 238, 0.05)"};
  border-radius: 50%;
  filter: blur(3rem);
  pointer-events: none;
`;
