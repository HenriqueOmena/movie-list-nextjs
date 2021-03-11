interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}

export const theme: DefaultTheme = {
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#726a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
};
