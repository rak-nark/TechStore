import styled from "styled-components";

export const DetailContainer = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 7fr 5fr;
  }
`;

export const GalleryColumn = styled.div`
  width: 100%;
`;

export const SidebarColumn = styled.div`
  width: 100%;
`;
