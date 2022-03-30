import React from "react";
import ReactDOM from "react-dom";

import Router from "./Router";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
