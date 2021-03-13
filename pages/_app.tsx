import React from "react";
import Provider from "src/store/config/provider";
import { Modal } from "src/components/Modal";
import { ModalProvider } from "src/hooks/useModal";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/global/styles/Global.styles";
import { theme } from "../src/global/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Modal />
          <Component {...pageProps} />
        </ThemeProvider>
      </ModalProvider>
    </Provider>
  );
}
