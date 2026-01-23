import styled from "styled-components";

export const ReviewsContainer = styled.section`
  margin-bottom: 5rem;
`;

export const ReviewsHeader = styled.div`
  margin-bottom: 2.5rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const ReviewsTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const RatingOverview = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const OverallRating = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
`;

export const RatingDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StarsWrapper = styled.div`
  display: flex;
  color: #fbbf24;

  svg {
    font-size: 1.25rem;
  }
`;

export const RatingText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const WriteReviewButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #1e5dd8;
  }
`;

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LoadMoreContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s;

  svg {
    font-size: 0.875rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
