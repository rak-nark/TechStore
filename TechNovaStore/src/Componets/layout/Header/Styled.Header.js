import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.header.background};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.header.border};
`;


export const HeaderContainer = styled.div`
  max-width: 1920px;
  padding: 0 clamp(16px, 5vw, 320px);
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 64px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;


export const Brand = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
`;


export const Nav = styled.nav`
  display: flex;
  gap: clamp(12px, 2vw, 24px);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;


export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.5vw, 12px);

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.surface};
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  transition: all 0.3s ease;

  
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
    @media (max-width: 640px) { display: none; } 
`;


export const ActionIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
  }
`;


export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.avatar};
`;

