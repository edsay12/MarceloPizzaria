import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PaymentModalContextProvider } from "./contexts/paymentoModalContext.tsx";
import AuthModal from "./components/ui/authModal/AuthModal.tsx";
import PizzaModal from "./components/ui/PizzaModal/PizzaModal.tsx";
import { PizzaModalContextProvider } from "./contexts/pizzaModalContext.tsx";
import { CartContextProvider } from "./contexts/CartContext.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthModal />
      <CartContextProvider>
        <PizzaModalContextProvider>
          <PaymentModalContextProvider>
            <PizzaModal />
            <App />
          </PaymentModalContextProvider>
        </PizzaModalContextProvider>
      </CartContextProvider>
    </Provider>
  </React.StrictMode>
);
