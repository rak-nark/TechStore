import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#111722" : "#ffffff")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px -12px rgba(15, 23, 42, 0.35);
`;

export const TableScroll = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 980px;
  border-collapse: collapse;
`;

export const TableHeadCell = styled.th`
  padding: 1.25rem;
  text-align: left;
  vertical-align: top;
  background: ${({ theme }) => (theme.mode === "dark" ? "#192233" : "#f8fafc")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#cbd5e1" : "#475569")};
  border-left: ${({ $isFirst, theme }) =>
    $isFirst
      ? "none"
      : `1px solid ${theme.mode === "dark" ? "#324467" : "#e2e8f0"}`};
`;

export const ToggleRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MutedLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ToggleControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ToggleLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#cbd5e1" : "#475569")};
`;

export const Switch = styled.button`
  width: 42px;
  height: 22px;
  border-radius: 999px;
  border: none;
  background: ${({ theme, $on }) =>
    $on ? theme.colors.primary : theme.mode === "dark" ? "#334155" : "#e2e8f0"};
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;

  &:after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({ $on }) => ($on ? "22px" : "3px")};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    transition: left 0.2s ease;
  }
`;

export const SectionDivider = styled.tr`
  background: ${({ theme }) => (theme.mode === "dark" ? "#192233" : "#f8fafc")};
`;

export const SectionTitleCell = styled.td`
  padding: 0.85rem 1.25rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#94a3b8")};
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
`;

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
