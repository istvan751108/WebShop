import React, { createContext, useReducer, ReactNode } from "react";
import { CartReducer } from "./cartReducer";

interface CartItem {
  [x: string]: ReactNode;
  // Definiáld a cart elemek típusát
}

interface CartContextProps {
  addProduct: (payLoad: CartItem) => void;
  removeProduct: (payLoad: CartItem) => void;
  increaseQuantity: (payLoad: CartItem) => void;
  decreaseQuantity: (payLoad: CartItem) => void;
  clearBasket: () => void;
  getItems: () => CartItem[];
  cartItems: CartItem[];
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

interface CartContextProviderProps {
  children: ReactNode;
}
const Storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];


const initialState = { cartItems: Storage };

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(CartReducer.reducer, initialState);

  const addProduct = (payLoad: CartItem) => {
    dispatch({ type: "ADD", payLoad });
    return state.cartItems;
  };

  const removeProduct = (payLoad: CartItem) => {
    dispatch({ type: "REMOVE", payLoad });
    return state.cartItems;
  };

  const increaseQuantity = (payLoad: CartItem) => {
    dispatch({ type: "INCQTY", payLoad });
    return state.cartItems;
  };

  const decreaseQuantity = (payLoad: CartItem) => {
    dispatch({ type: "DECQTY", payLoad });
    return state.cartItems;
  };

  const clearBasket = () => {
    dispatch({ type: "CLEAR", payLoad: undefined });
    return state.cartItems;
  };

  const getItems = () => {
    return state.cartItems;
  };

  const contextValues: CartContextProps = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getItems,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
