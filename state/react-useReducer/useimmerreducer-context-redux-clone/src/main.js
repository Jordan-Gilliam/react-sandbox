import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { AnalyticsContextProvider } from "../src/analytics/AnalyticsContext";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <AnalyticsContextProvider>
      <Route path="/" component={App} />
    </AnalyticsContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
