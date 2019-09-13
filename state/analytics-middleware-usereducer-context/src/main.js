import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { StoreProvider } from "../src/analytics/store/StoreContext";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <Route path="/" component={App} />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
