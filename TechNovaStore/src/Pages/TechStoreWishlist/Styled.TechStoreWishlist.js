import styled from "styled-components";

export const WishlistContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 24px 16px;
  }
`;

export const BreadcrumbsWrapper = styled.div`
  margin-bottom: 24px;
`;
