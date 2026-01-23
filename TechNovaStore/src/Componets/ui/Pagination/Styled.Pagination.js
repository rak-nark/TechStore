import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
`;

export const PageButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  font-size: 0.875rem;
  transition: all 0.2s;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? "transparent" : theme.mode === "dark" ? "#1e293b" : "#e2e8f0"};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? "#ffffff" : theme.colors.textPrimary};

  &:hover:not(:disabled) {
    background: ${({ theme, $active }) =>
      $active
        ? theme.colors.primary
        : theme.mode === "dark"
          ? "#1e293b"
          : "#f1f5f9"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageButtonIcon = styled(PageButton)`
  font-size: 1.25rem;
`;

export const PageEllipsis = styled.span`
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.875rem;
`;
