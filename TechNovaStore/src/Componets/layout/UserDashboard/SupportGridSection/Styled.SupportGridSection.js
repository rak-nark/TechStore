import styled from "styled-components";

export const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SupportCard = styled.div`
  background: ${({ theme, $primary }) =>
    $primary
      ? theme.mode === "dark"
        ? "rgba(43, 108, 238, 0.1)"
        : "rgba(43, 108, 238, 0.05)"
      : theme.mode === "dark"
        ? "rgba(30, 41, 59, 0.5)"
        : "#f1f5f9"};
  border: 1px solid
    ${({ theme, $primary }) =>
      $primary
        ? `${theme.colors.primary}33`
        : theme.mode === "dark"
          ? "#1e293b"
          : "#e2e8f0"};
  padding: 1.5rem;
  border-radius: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

export const SupportIcon = styled.span`
  font-size: 1.875rem;
  color: ${({ $primary, theme }) =>
    $primary
      ? theme.colors.primary
      : theme.mode === "dark"
        ? "#94a3b8"
        : "#94a3b8"};
  flex-shrink: 0;
`;

export const SupportContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SupportTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  margin: 0;
`;

export const SupportDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#6b7280")};
  margin: 0;
  line-height: 1.5;
`;

export const SupportLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;
