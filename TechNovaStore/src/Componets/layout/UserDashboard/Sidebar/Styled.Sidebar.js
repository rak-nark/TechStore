import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: none;
  width: 18rem;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  padding: 1.5rem;
  position: sticky;
  top: 65px;
  height: calc(100vh - 65px);
  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const UserAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  margin: 0;
`;

export const MembershipBadge = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
  margin-top: 0.25rem;
`;

export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $active, theme }) =>
    $active
      ? `
    background: ${theme.colors.primary};
    color: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(43, 108, 238, 0.2);
  `
      : `
    color: ${theme.mode === "dark" ? "#64748b" : "#4b5563"};
    &:hover {
      background: ${theme.mode === "dark" ? "#1e293b" : "#f1f5f9"};
    }
  `}
`;

export const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const NavText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  padding-top: 1.5rem;
`;

export const SettingsLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => (theme.mode === "dark" ? "#64748b" : "#4b5563")};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  }
`;

export const LogoutLink = styled(SettingsLink)`
  color: #ef4444;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#7f1d1d" : "#fee2e2"};
    border-radius: 0.75rem;
    color: #7f1d1d;
  }
`;
