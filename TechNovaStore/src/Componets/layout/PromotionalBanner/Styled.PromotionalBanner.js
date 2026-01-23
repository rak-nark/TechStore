import styled from "styled-components";

export const PromoSection = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;

  @media (min-width: 1024px) {
    padding: 4rem 5rem;
  }
`;

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: clamp(340px, 45vw, 420px);
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "linear-gradient(90deg, rgba(18, 25, 38, 0.95) 0%, rgba(18, 25, 38, 0.7) 55%, rgba(18, 25, 38, 0.2) 100%)"
      : "linear-gradient(90deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 55%, rgba(15, 23, 42, 0.15) 100%)"};
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 36rem;

  @media (min-width: 640px) {
    padding: 3rem;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem;
    max-width: 40rem;
  }
`;

export const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: clamp(1.75rem, 2vw + 1.2rem, 2.25rem);
`;

export const Heading = styled.h2`
  color: #ffffff;
  font-size: clamp(2.5rem, 3vw + 1.5rem, 3.5rem);
  font-weight: 900;
  line-height: 1.1;
`;

export const Description = styled.p`
  color: #cbd5e1; /* slate-300 */
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 36rem;
`;

export const CTAButton = styled.button`
  width: fit-content;
  padding: 0.75rem 2rem;
  background-color: #ffffff;
  color: #0f172a; /* background-dark */
  font-weight: 700;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    transform: translateY(-4px);
  }
`;
