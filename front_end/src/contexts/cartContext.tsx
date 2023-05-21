import React, { createContext, ReactNode } from "react";

export const CartContext = createContext<any>(null);

interface CartContextValue {
  cartItems: any[]; // Itt helyettesítsd az `any[]` típust a tényleges típussal, amit a kosár kontextus használ.
}

const initialState: CartContextValue = { cartItems: [] };

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider value={initialState}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
