import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./lara-dark-indigo-theme.css";
import "./lara-light-indigo-theme.css";
import "virtual:uno.css";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
