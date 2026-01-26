import styled from "styled-components";

export const SpecRow = styled.tr`
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#192233" : "#f8fafc"};
  }
`;

export const SpecLabelCell = styled.td`
  padding: 1rem 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  font-size: 0.95rem;
`;

export const SpecValueCell = styled.td`
  padding: 1rem 1.25rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#cbd5e1" : "#475569")};
  font-size: 0.95rem;
  border-left: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  font-weight: ${({ $highlight }) => ($highlight ? 700 : 500)};
  color: ${({ $highlight, theme }) =>
    $highlight
      ? theme.colors.primary
      : theme.mode === "dark"
        ? "#cbd5e1"
        : "#475569"};
`;
