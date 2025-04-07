import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  setCart: () => {},
});

export default CartContext;
//this is the main file that the cart is managed 
//after this we can implement the local storage