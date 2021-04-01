import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const title = "React with Webpack and Babel";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App title="React project with Webpack and babel from scratch"/>
  </StrictMode>,
  rootElement
);

module.hot.accept();
