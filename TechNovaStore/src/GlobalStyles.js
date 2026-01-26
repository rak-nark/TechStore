import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.body.background};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-top: 48px;
  background-color: ${({ theme }) => theme.body.background};
`;