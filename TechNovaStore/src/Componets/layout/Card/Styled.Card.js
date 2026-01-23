import styled from "styled-components";

export const CardWrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: 1024px) {
    padding: 3rem 5rem;
  }
`;

export const CardSurface = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: ${({ theme }) => (theme.mode === "dark" ? "#192233" : "#f1f5f9")};
  min-height: 500px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const GlowOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 384px;
    height: 384px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 9999px;
    filter: blur(120px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 256px;
    height: 256px;
    background: #7c3aed;
    border-radius: 9999px;
    filter: blur(100px);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContentSection = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 1024px) {
    width: 50%;
    padding: 4rem;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BadgeText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.625;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 28rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? `
    background-color: ${theme.colors.primary};
    color: #ffffff;

    &:hover {
      background-color: rgba(43, 108, 238, 0.9);
      transform: scale(1.05);
    }
  `
      : theme.mode === "light"
        ? `
    background-color: #ffffff;
    color: ${theme.colors.textPrimary};
    border: 1px solid #e2e8f0;

    &:hover {
      background-color: #f8fafc;
    }
  `
        : `
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  `}
`;

export const ImageSection = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 2rem;

  @media (min-width: 1024px) {
    width: 50%;
    padding: 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
  filter: drop-shadow(0 20px 50px rgba(43, 108, 238, 0.3));
  transition: transform 0.5s ease;

  &:hover {
    transform: rotate(2deg);
  }
`;
