import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "5px",
  boxShadow: `
    box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
    -webkit-box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
    -moz-box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
  `,
  transtition: "0.2s ease-in",

  colors: {
    primary: "#f5b5fc",
    primary_light: "#fff5fd",
    secondary: "#fcb1b1",
    neutral: "#f8f9fa",
    gray: "#e1e1e1",
    light: "#fdfdfd",
    dark: "#2e323d",
    ghost: "#9aa1b1",
    success: "#17b978",
  },
};

export { theme };
