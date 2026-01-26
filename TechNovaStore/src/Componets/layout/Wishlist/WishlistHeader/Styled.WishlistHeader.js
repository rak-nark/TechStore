import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["4xl"]};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-family: ${({ theme }) => theme.fonts.display};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSize["3xl"]};
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-weight: 400;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow:
    0 10px 15px -3px rgba(140, 43, 238, 0.2),
    0 4px 6px -2px rgba(140, 43, 238, 0.1);

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow:
      0 15px 20px -3px rgba(140, 43, 238, 0.3),
      0 6px 8px -2px rgba(140, 43, 238, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;
