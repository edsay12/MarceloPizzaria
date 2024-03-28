import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PaymentModalContextProvider } from "./contexts/paymentoModalContext.tsx";
import AuthModal from "./components/ui/authModal/AuthModal.tsx";
import PizzaModal from "./components/ui/PizzaModal/PizzaModal.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthModal />
    <PizzaModal/>
    <PaymentModalContextProvider>
      <App />
    </PaymentModalContextProvider>
  </React.StrictMode>
);
