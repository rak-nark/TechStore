import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MainImageContainer = styled.div`
  aspect-ratio: 4 / 3;
  border-radius: 0.75rem;
  overflow: hidden;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f1f5f9")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const Thumbnail = styled.div`
  aspect-ratio: 1;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid
    ${({ theme, $active }) =>
      $active
        ? theme.colors.primary
        : theme.mode === "dark"
          ? "#1e293b"
          : "#e2e8f0"};
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f8fafc")};
  opacity: ${({ $active }) => ($active ? "1" : "0.6")};
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const VideoThumbnail = styled.div`
  aspect-ratio: 1;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f8fafc")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const PlayIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  svg {
    display: block;
  }
`;
