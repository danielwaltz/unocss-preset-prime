import { PrimeReactProvider } from "@primereact/core";
import Lara from "@primeuix/themes/lara";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "uno.css";

const theme = {
  preset: Lara,
};

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <PrimeReactProvider theme={theme}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
