import styled from "styled-components";

export const BreadcrumbsContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const BreadcrumbItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BreadcrumbLink = styled.a`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BreadcrumbSeparator = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const BreadcrumbCurrent = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
`;
