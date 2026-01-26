import styled from "styled-components";

export const RecentOrdersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  margin: 0;
  letter-spacing: -0.01em;
`;

export const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 1.5rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(15, 23, 42, 0.5)" : "#ffffff"};
  font-size: 0.875rem;
`;

export const TableHead = styled.thead`
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(30, 41, 59, 0.5)" : "#f8fafc"};
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#6b7280")};
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

export const TableBody = styled.tbody`
  divide: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const TableRow = styled.tr`
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f3f4f6")};

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(30, 41, 59, 0.3)" : "#f9fafb"};
  }
`;

export const TableHeader = styled.th`
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
`;

export const TableCell = styled.td`
  padding: 1.25rem 1.5rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#e2e8f0" : "#4b5563")};
`;

export const OrderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f3f4f6")};
  border-radius: 0.25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  background: ${({ $color }) => `${$color}15`};
  color: ${({ $color }) => $color};
`;

export const TrackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;
