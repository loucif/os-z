import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props) => props.theme.primary.text};
    background: ${(props) => props.theme.primary.background};
    line-height: 1.4;
    font-size: 1rem;
  }
`;
