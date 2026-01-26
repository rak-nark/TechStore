import styled from "styled-components";

export const CTAContainer = styled.div`
  margin-top: 64px;
  padding: 48px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primaryLight};
  opacity: 0.3;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CTATitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.display};
`;

export const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 480px;
  margin-bottom: 24px;
  line-height: 1.6;
`;

export const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.base};
  text-decoration: none;
  cursor: pointer;
  transition: gap 0.2s ease;

  &:hover {
    gap: 12px;
  }
`;
