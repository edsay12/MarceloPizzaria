import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PaymentModalContext, PaymentModalContextProvider } from "./contexts/paymentoModalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PaymentModalContextProvider>
      <App />
    </PaymentModalContextProvider>
  </React.StrictMode>
);
