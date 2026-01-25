import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => (theme.mode === "dark" ? "#101622" : "#f6f6f8")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
`;

export const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;
