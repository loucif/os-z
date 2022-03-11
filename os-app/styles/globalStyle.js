import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props) => props.primary};
    background: ${(props) => props.primary};
    line-height: 1.4;
    font-size: 1rem;
  }
`;
