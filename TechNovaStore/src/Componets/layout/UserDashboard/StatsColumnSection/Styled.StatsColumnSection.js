import styled from "styled-components";

export const StatsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StatCard = styled.div`
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(30, 41, 59, 0.5)" : "#f1f5f9"};
  padding: 1.25rem;
  border-radius: 1.5rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StatIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: ${({ $color }) => `${$color}10`};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  margin: 0;
`;

export const StatLabel = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#6b7280")};
  font-weight: 500;
  margin: 0;
  margin-top: 0.25rem;
`;
