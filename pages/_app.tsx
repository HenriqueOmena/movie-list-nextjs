import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/global/styles/Global.styles";
import { theme } from "../src/global/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
