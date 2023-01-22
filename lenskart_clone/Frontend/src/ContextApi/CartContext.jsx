import React, { useState } from "react";
import { createContext } from "react";

let CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  return (
    <CartContext.Provider
      value={{ cart, setCart, currentProduct, setCurrentProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartContext };
export default CartContextProvider;
