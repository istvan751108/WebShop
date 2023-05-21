import React, { createContext, useState, ReactNode } from 'react';

interface CartContextValue {
  cartItems: any[]; // Itt helyettesítsd az `any[]` típust a tényleges típussal, amit a kosár kontextus használ.
  addProduct: (payLoad: any) => void;
}

export const CartContext = createContext<CartContextValue>({ cartItems: [], addProduct: () => {} });


const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addProduct = (payLoad: any) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((x) => x.id === payLoad.id);

      if (index === -1) {
        return [...prevItems, { ...payLoad, quantity: 1 }];
      } else {
        const updatedCartItems = [...prevItems];
        updatedCartItems[index].quantity++;
        return updatedCartItems;
      }
    });
  };

  const contextValues: CartContextValue = {
    cartItems,
    addProduct,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

