import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => (theme.mode === "dark" ? "#111722" : "#f1f5f9")};
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#232f48" : "#e2e8f0")};
  padding: 4rem 0 2rem;
`;

export const FooterInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 4rem;

  @media (min-width: 640px) {
    gap: 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 100%;

  @media (min-width: 640px) {
    max-width: 280px;
  }
`;

export const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const LogoBox = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
`;

export const BrandName = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
`;

export const BrandDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9375rem;
  line-height: 1.6;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialButton = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#192233" : "#e2e8f0")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#475569")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ColumnTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9375rem;
  text-decoration: none;
  transition: color 0.2s ease;
  padding-left: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NewsletterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 100%;

  @media (min-width: 640px) {
    max-width: 280px;
  }
`;

export const NewsletterText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9375rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  padding-right: 6rem;
  border-radius: 0.75rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#232f48" : "#ffffff")};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.9375rem;
  outline: none;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(43, 108, 238, 0.35);
  }
`;

export const JoinButton = styled.button`
  position: absolute;
  top: 0.375rem;
  right: 0.375rem;
  height: 2.25rem;
  padding: 0 1rem;
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(43, 108, 238, 0.9);
  }
`;

export const Divider = styled.div`
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#232f48" : "#e2e8f0")};
  padding-top: 2rem;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    flex-direction: row;
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.8125rem;
`;

export const PaymentsRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const PaymentLogo = styled.img`
  height: 1.5rem;
  filter: grayscale(1);
  opacity: 0.5;
`;
