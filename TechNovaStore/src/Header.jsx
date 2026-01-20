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
  Avatar,
} from "./Styled.Header";
import { MdSearch, MdShoppingCart, MdPerson } from "react-icons/md";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoSection>
          <LogoBox>⚡</LogoBox>
          <Brand>TechStore</Brand>
        </LogoSection>

        <Nav>
          <NavItem>Portátiles</NavItem>
          <NavItem>Teléfonos</NavItem>
          <NavItem>Audio</NavItem>
          <NavItem>Videojuegos</NavItem>
        </Nav>

        <ActionSection>
          <SearchBar>
            <MdSearch size={18} />
            <SearchInput placeholder="Buscar..." />
          </SearchBar>

          <ActionIcon>
            <MdShoppingCart size={20} />
          </ActionIcon>

          <ActionIcon>
            <MdPerson size={20} />
          </ActionIcon>
        </ActionSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
