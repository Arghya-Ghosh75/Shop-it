import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart-reducer";

const CartContext = createContext(null);

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const CartProvider = ({ children }) => {
  const [{ cart }, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
