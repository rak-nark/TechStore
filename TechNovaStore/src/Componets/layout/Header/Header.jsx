import { Link, useNavigate } from "react-router-dom";
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
import {
  MdSearch,
  MdShoppingCart,
  MdPerson,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { useTheme } from "styled-components";
export default function Header({
  navItems = ["Laptops", "Phones", "Audio", "Accessories"],
  onToggleTheme,
}) {
  const navigate = useNavigate();
  const theme = useTheme();

  const isDark = theme.colors.background === "#101622";

  const categoryRoutes = {
    Laptops: "/catalog/laptops",
    Phones: "/catalog/phones",
    Audio: "/catalog/audio",
    Accessories: "/catalog/accessories",
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoSection>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
            }}
          >
            <LogoBox>⚡</LogoBox>
            <Brand>TechStore</Brand>
          </Link>
        </LogoSection>

        <Nav>
          {navItems.map((item) => (
            <NavItem
              key={item}
              as={Link}
              to={categoryRoutes[item] || "/catalog"}
            >
              {item}
            </NavItem>
          ))}
        </Nav>

        <ActionSection>
          <SearchBar>
            <MdSearch size={18} />
            <SearchInput placeholder="Search..." />
          </SearchBar>
          <ActionIcon onClick={onToggleTheme}>
            {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </ActionIcon>
          <ActionIcon onClick={() => navigate("/cart")}>
            <MdShoppingCart size={20} />
          </ActionIcon>

          <ActionIcon onClick={() => navigate("/wishlist")}>
            <IoMdHeart size={20} />
          </ActionIcon>

          <ActionIcon onClick={() => navigate("/account")}>
            <MdPerson size={20} />
          </ActionIcon>
        </ActionSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
