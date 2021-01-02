import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import StoreProvider from "./store/index";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  rootElement
);
