import React from "react";
import { wrapper } from "../store";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyle";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { darkTheme } from "../styles/darkTheme";
import { lightTheme } from "../styles/lightTheme";

const MyApp = ({ Component, pageProps }) => {
  const { theme } = useTypedSelector((state) => state.ui);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
