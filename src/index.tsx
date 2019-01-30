import * as React from "react";
import * as ReactDOM from "react-dom";
import "./amplify";
import App from "./app";
import "./index.scss";
import { register } from "./registerServiceWorker";

ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement
);
register();
