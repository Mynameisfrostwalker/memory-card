import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import "./css/reset.css";
import "./css/index.css";
import App from "./App";

library.add(fab, faBrain);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
