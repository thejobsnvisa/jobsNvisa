import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";

if (typeof window !== "undefined") {
  const redirect = window.sessionStorage.getItem("redirect");

  if (redirect) {
    window.sessionStorage.removeItem("redirect");
    window.history.replaceState(null, "", redirect);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);