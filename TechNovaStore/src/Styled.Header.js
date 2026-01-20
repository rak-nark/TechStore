import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #232f48;
`;

export const HeaderContainer = styled.div`
  max-width: 1920px;
  padding: 0 320px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: #2b6cee;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
`;

export const Brand = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.5px;
  color: #ffffff;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled.a`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #cbd5e1;
  cursor: pointer;

  &:hover {
    color: #2b6cee;
  }
`;

export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: #232f48;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  color: #64748b;
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  color: #cbd5e1;
  font-size: 14px;
  width: 160px;

  &::placeholder {
    color: #64748b;
  }
`;

export const ActionIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #232f48;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #cbd5e1;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2b6cee;
    color: #ffffff;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #2b6cee;
  background-color: #64748b;
`;
