import styled from "styled-components";

export const SpecsSection = styled.section`
  margin-bottom: 5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TitleIcon = styled.span`
  display: flex;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SpecRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const SpecLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
  font-size: 0.875rem;
`;

export const SpecValue = styled.span`
  font-weight: 600;
  text-align: right;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
`;
