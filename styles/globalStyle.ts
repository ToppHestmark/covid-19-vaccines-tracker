import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${(props) => props.theme.colors.neutral};
    color: ${(props) => props.theme.colors.dark};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
