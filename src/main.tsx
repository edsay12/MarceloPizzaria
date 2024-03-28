import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PaymentModalContextProvider } from "./contexts/paymentoModalContext.tsx";
import AuthModal from "./components/ui/authModal/AuthModal.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthModal />
    <PaymentModalContextProvider>
      <App />
    </PaymentModalContextProvider>
  </React.StrictMode>
);
