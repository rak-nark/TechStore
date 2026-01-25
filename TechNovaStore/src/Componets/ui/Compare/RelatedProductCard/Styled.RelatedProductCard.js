import styled from "styled-components";

export const RelatedCard = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#111722" : "#ffffff")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  border-radius: 0.9rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const RelatedMedia = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  background: ${({ theme }) => (theme.mode === "dark" ? "#232f48" : "#f8fafc")};
  aspect-ratio: 1;
`;

export const RelatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${RelatedCard}:hover & {
    transform: scale(1.05);
  }
`;

export const RelatedName = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const RelatedDescription = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#475569")};
  line-height: 1.5;
`;

export const RelatedFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const RelatedPrice = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const IconButton = styled.button`
  border: none;
  background: ${({ theme }) => (theme.mode === "dark" ? "#232f48" : "#f1f5f9")};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.65rem;
  padding: 0.45rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
  }
`;
