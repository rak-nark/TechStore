import styled from "styled-components";

export const CardWrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px clamp(16px, 4vw, 80px);

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

// Contenedor superior que controla el fondo y el estilo de la tarjeta
export const CardSurface = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px; /* rounded-2xl */
  background: ${({ theme }) => theme.colors.surface};
  min-height: 500px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

// Capa de brillos difuminados como en el diseño de referencia
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
    width: 384px; /* w-96 */
    height: 384px; /* h-96 */
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 9999px;
    filter: blur(120px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 256px; /* w-64 */
    height: 256px; /* h-64 */
    background: #7c3aed; /* purple-600 */
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 32px;
  padding: 32px;

  @media (min-width: 1024px) {
    width: 50%;
    padding: 64px; /* lg:p-16 */
  }

  @media (max-width: 1024px) {
    padding: 48px;
  }

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

export const BadgeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.12em; /* tracking-widest aproximado */
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const MainTitle = styled.h2`
  font-family: "Space Grotesk", sans-serif;
  font-size: 48px; /* text-5xl base */
  font-weight: 900; /* font-black */
  line-height: 1.1; /* leading-[1.1] */
  letter-spacing: -0.02em; /* tracking-tight */
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: 1024px) {
    font-size: 72px; /* lg:text-7xl */
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 18px; /* text-lg */
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 448px; /* max-w-md */

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 16px 32px; /* px-8 py-4 */
  font-size: 16px; /* text-lg */
  font-weight: 700; /* font-bold */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Space Grotesk", sans-serif;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? `
    background-color: ${theme.colors.primary};
    color: #ffffff;

    &:hover {
      background-color: #1e52b8;
      transform: scale(1.05);
    }
  `
      : `
    /* Secondary variant: dark vs light theme */
    ${
      theme.mode === "light"
        ? `
      background-color: ${theme.card.ButtonSecondary || "#e2e8f0"};
      color: ${theme.colors.textPrimary};
      border: 1px solid ${theme.card.ButtonSecondary || "#e2e8f0"};
      
      &:hover {
        filter: brightness(0.97);
        transform: scale(1.03);
      }
    `
        : `
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(4px);

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: scale(1.03);
      }
    `
    }
  `}
`;

export const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 32px;

  @media (min-width: 1024px) {
    width: 50%;
    padding: 0; /* lg:p-0 */
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 500px; /* max-w-[500px] */
  height: auto;
  display: block;
  filter: drop-shadow(0 20px 50px rgba(43, 108, 238, 0.3));
  transition: transform 0.5s ease;

  &:hover {
    transform: rotate(2deg);
  }
`;
