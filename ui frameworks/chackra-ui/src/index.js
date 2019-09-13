import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "@chakra-ui/core";

import "./styles.css";

import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors
  },
  icons: {
    ...theme.icons
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>,
  rootElement
);
