import styled from "styled-components";

export const ComparisonSection = styled.section`
  margin-bottom: 5rem;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f1f5f9")};
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#cbd5e1")};

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th`
  padding: 1rem;
  font-weight: ${({ $primary }) => ($primary ? "700" : "500")};
  font-size: 0.875rem;
  color: ${({ theme, $primary }) =>
    $primary ? theme.colors.primary : theme.colors.textPrimary};
  opacity: ${({ $primary }) => ($primary ? "1" : "0.7")};
  text-align: left;

  &:first-child {
    padding-left: 0;
  }
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${({ theme, $label }) =>
    $label ? theme.colors.textSecondary : theme.colors.textPrimary};
  font-weight: ${({ $label }) => ($label ? "500" : "400")};

  &:first-child {
    padding-left: 0;
  }
`;

export const HighlightedCell = styled(TableCell)`
  font-weight: ${({ $highlight }) => ($highlight ? "700" : "600")};
  color: ${({ theme, $highlight }) =>
    $highlight ? "#10b981" : theme.colors.textPrimary};
`;

export const CheckIcon = styled.span`
  display: inline-flex;
  color: #10b981;
  font-size: 1.25rem;

  svg {
    display: block;
  }
`;
