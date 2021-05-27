import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "5px",
  boxShadow: `
    box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
    -webkit-box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
    -moz-box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
  `,

  colors: {
    primary: "#f5b5fc",
    secondary: "#fcb1b1",
    neutral: "#f8f9fa",
    gray: "#e1e1e1",
    gray_light: "#e7eded",
    light: "#fdfdfd",
    dark: "#2e323d",
    success: "#17b978",
  },
};

export { theme };
