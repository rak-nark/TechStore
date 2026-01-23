import styled from "styled-components";

export const CardWrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1rem; /* py-12 px-4 */

  @media (min-width: 1024px) {
    padding: 3rem 5rem; /* lg:px-20 */
  }
`;

// Contenedor superior que controla el fondo y el estilo de la tarjeta
export const CardSurface = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem; /* rounded-2xl */
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "#192233"
      : "#0f172a"}; /* dark:bg-[#192233] bg-slate-900 */
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
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 2rem; /* gap-8 */
  padding: 2rem; /* p-8 */

  @media (min-width: 1024px) {
    width: 50%;
    padding: 4rem; /* lg:p-16 */
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* gap-4 */
`;

export const BadgeText = styled.span`
  font-size: 0.875rem; /* text-sm */
  font-weight: 700; /* font-bold */
  letter-spacing: 0.1em; /* tracking-widest */
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const MainTitle = styled.h1`
  font-size: 3rem; /* text-5xl */
  font-weight: 900; /* font-black */
  line-height: 1.1; /* leading-[1.1] */
  letter-spacing: -0.025em; /* tracking-tight */
  color: #ffffff; /* text-white */

  @media (min-width: 1024px) {
    font-size: 4.5rem; /* lg:text-7xl */
  }
`;

export const DescriptionText = styled.p`
  font-size: 1.125rem; /* text-lg */
  font-weight: 400;
  line-height: 1.625; /* leading-relaxed */
  color: #cbd5e1; /* text-slate-300 */
  max-width: 28rem; /* max-w-md */
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap; /* flex-wrap */
  gap: 1rem; /* gap-4 */
`;

export const Button = styled.button`
  padding: 1rem 2rem; /* px-8 py-4 */
  font-size: 1.125rem; /* text-lg */
  font-weight: 700; /* font-bold */
  border: none;
  border-radius: 0.5rem; /* rounded-lg */
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? `
    background-color: ${theme.colors.primary};
    color: #ffffff;

    &:hover {
      background-color: rgba(43, 108, 238, 0.9); /* hover:bg-primary/90 */
      transform: scale(1.05);
    }
  `
      : `
    background-color: rgba(255, 255, 255, 0.1); /* bg-white/10 */
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.1); /* border-white/10 */
    backdrop-filter: blur(4px); /* backdrop-blur-sm */

    &:hover {
      background-color: rgba(255, 255, 255, 0.2); /* hover:bg-white/20 */
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
  padding: 2rem; /* p-8 */

  @media (min-width: 1024px) {
    width: 50%;
    padding: 0; /* lg:p-0 */
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
