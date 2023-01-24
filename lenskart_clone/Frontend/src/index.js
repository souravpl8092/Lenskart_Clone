import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./ContextApi/AuthContext";
import App from "./App";
import { Provider } from "react-redux";
import {store} from "./redux/store"
import CartContext from "./ContextApi/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <AuthProvider>
    <BrowserRouter>
      <ChakraProvider>
      <CartContext>
      <Provider store={store}>
        <App />
<<<<<<< HEAD
        </Provider>
      </CartContext>
    </ChakraProvider>
  </BrowserRouter>
=======
        </CartContext>
      </ChakraProvider>
    </BrowserRouter>
  </AuthProvider>

>>>>>>> d86bf09918789ce192bd08427630bccf8f1ad57a
);

reportWebVitals();
