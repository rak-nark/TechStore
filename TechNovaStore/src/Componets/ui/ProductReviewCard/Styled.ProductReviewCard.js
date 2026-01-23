import styled from "styled-components";

export const ReviewCard = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f1f5f9")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const UserAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: ${({ $color }) => `${$color}33`};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h4`
  font-weight: 700;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const VerificationText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const StarRating = styled.div`
  display: flex;
  color: #fbbf24;
  gap: 0.125rem;

  svg {
    font-size: 0.875rem;
  }
`;

export const ReviewText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const ReviewActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  svg {
    font-size: 0.875rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
