import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${(props) => props.theme.colors.neutral};
    color: ${(props) => props.theme.colors.dark};

    @media screen and (min-width: 480px) {
      overflow-x: hidden;
    }
  }

  body {
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      font-size: .875em;
    }
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 300;
    opacity: 0.9;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;
