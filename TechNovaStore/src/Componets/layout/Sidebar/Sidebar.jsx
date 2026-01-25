import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SidebarContainer,
  UserSection,
  UserAvatar,
  UserInfo,
  UserName,
  MembershipBadge,
  NavSection,
  NavLink,
  NavIcon,
  NavText,
  BottomSection,
  SettingsLink,
  LogoutLink,
} from "./Styled.Sidebar";
import {
  
  MdVerifiedUser,
  MdLocationOn,
  MdCreditCard,
  MdLocalFireDepartment,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { FiPackage } from "react-icons/fi";

const Sidebar = ({ userData }) => {
  const navigate = useNavigate();

  const navItems = [
    { label: "My Orders", icon: FiPackage, active: true, path: "/account" },
    {
      label: "Warranty & Support",
      icon: MdVerifiedUser,
      active: false,
      path: "#",
    },
    { label: "Addresses", icon: MdLocationOn, active: false, path: "#" },
    { label: "Payment Methods", icon: MdCreditCard, active: false, path: "#" },
    {
      label: "Tech Rewards",
      icon: MdLocalFireDepartment,
      active: false,
      path: "#",
    },
  ];

  return (
    <SidebarContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <UserSection>
          <UserAvatar src={userData.avatar} alt="User profile" />
          <UserInfo>
            <UserName>{userData.name}</UserName>
            <MembershipBadge>{userData.membership}</MembershipBadge>
          </UserInfo>
        </UserSection>

        <NavSection>
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              $active={item.active}
              onClick={() => navigate(item.path)}
            >
              <NavIcon>
                <item.icon size={20} />
              </NavIcon>
              <NavText>{item.label}</NavText>
            </NavLink>
          ))}
        </NavSection>
      </div>

      <BottomSection>
        <SettingsLink href="#">
          <NavIcon>
            <MdSettings size={20} />
          </NavIcon>
          <NavText>Settings</NavText>
        </SettingsLink>
        <LogoutLink href="#">
          <NavIcon>
            <MdLogout size={20} />
          </NavIcon>
          <NavText>Logout</NavText>
        </LogoutLink>
      </BottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;
