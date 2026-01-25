import styled from "styled-components";

export const PageHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const HeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  }

  p {
    color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#6b7280")};
  }
`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(43, 108, 238, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
