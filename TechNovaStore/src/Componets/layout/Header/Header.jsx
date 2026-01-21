import {
  HeaderWrapper,
  HeaderContainer,
  LogoSection,
  LogoBox,
  Brand,
  Nav,
  NavItem,
  ActionSection,
  SearchBar,
  SearchInput,
  ActionIcon,
} from "./Styled.Header";
import { MdSearch, MdShoppingCart, MdPerson, MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { useTheme } from "styled-components";
export default function Header({ navItems = ["Portátiles", "Teléfonos", "Audio", "Accesorios"], onToggleTheme  }) {
    const theme = useTheme();

  const isDark = theme.colors.background === "#101622";
  return (<HeaderWrapper>
    <HeaderContainer>
      <LogoSection>
        <LogoBox>⚡</LogoBox>
        <Brand>TechStore</Brand>
      </LogoSection>

      <Nav>
        {navItems.map((item) => (
          <NavItem key={item}>{item}</NavItem>
        ))}
      </Nav>

      <ActionSection>
        <SearchBar>
          <MdSearch size={18} />
          <SearchInput placeholder="Buscar..." />
        </SearchBar>
        <ActionIcon onClick={onToggleTheme}>
      {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
    </ActionIcon>
        <ActionIcon>
          <MdShoppingCart size={20} />
        </ActionIcon>

        <ActionIcon>
          <IoMdHeart size={20} />
        </ActionIcon>

        <ActionIcon>
          <MdPerson size={20} />
        </ActionIcon>

      </ActionSection>
    </HeaderContainer>
  </HeaderWrapper>
  );
}
