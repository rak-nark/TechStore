import styled from "styled-components";

export const PageWrapper = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#101622" : "#f6f6f8")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#e2e8f0" : "#0f172a")};
  min-height: 100vh;
`;

export const Content = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem 1rem 2.5rem;

  @media (min-width: 1024px) {
    padding: 2rem 2.5rem 3rem;
  }
`;

export const Breadcrumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0;
`;

export const CrumbLink = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#64748b")};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CrumbCurrent = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const Divider = styled.span`
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#94a3b8")};
`;

export const PageHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-end;
  padding: 1.5rem 0;
`;

export const HeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#475569")};
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const GhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  background: transparent;
  color: ${({ theme }) => (theme.mode === "dark" ? "#e2e8f0" : "#0f172a")};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#192233" : "#f1f5f9"};
  }
`;

export const PrimaryGhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => `${theme.colors.primary}33`};
  background: ${({ theme }) => `${theme.colors.primary}1A`};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}33`};
  }
`;
