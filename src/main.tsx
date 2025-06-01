import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { fetch as tauriFetch } from "@tauri-apps/plugin-http";
// once binding, invoke fetch or any rust command will cause page freeze!
window.fetch = tauriFetch;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
