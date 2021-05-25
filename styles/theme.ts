import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "5px",
  boxShadow: `
    box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
    -webkit-box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
    -moz-box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
  `,

  colors: {
    primary: "#fc5c9c",
    primary_light: "#fccde2",
    secondary: "#fcefee",
    neutral: "#f8f9fa",
    gray: "#f3f3f3",
    light: "#fdfdfd",
    dark: "#2e323d",
  },
};

export { theme };
