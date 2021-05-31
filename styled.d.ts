import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;

    colors: {
      primary: string;
      primary_light: string;
      secondary: string;
      neutral: string;
      gray: string;
      light: string;
      dark: string;
      ghost: string;
      success: string;
    };
  }
}
