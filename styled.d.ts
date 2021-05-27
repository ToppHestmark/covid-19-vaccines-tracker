import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;

    colors: {
      primary: string;
      secondary: string;
      neutral: string;
      gray: string;
      gray_light: string;
      light: string;
      dark: string;
      success: string;
    };
  }
}
