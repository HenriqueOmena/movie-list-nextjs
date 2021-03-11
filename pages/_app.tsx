import { createGlobalStyle, DefaultTheme, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

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

const theme: DefaultTheme = {
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

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
