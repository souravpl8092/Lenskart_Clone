import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./ContextApi/AuthContext";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CartContext from "./ContextApi/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <ChakraProvider>
      <CartContext>
        <Provider store={store}>
          <App />
        </Provider>
        </CartContext>
      </ChakraProvider>
    </BrowserRouter>
  </AuthProvider>
);

reportWebVitals();
