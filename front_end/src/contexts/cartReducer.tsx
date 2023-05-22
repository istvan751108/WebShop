import React from 'react';

export class CartReducer {
    public static reducer(state: any, action: any) {
        debugger;

        let index = -1;
        if (action.payLoad)
            index = state.cartItems.findIndex((x: any) => x.id === action.payLoad.id);
        
        switch (action.type) {
            case "ADD":
                case "INCQTY":
                  if (index === -1) {
                    state.cartItems = [...state.cartItems, { ...action.payLoad, quantity: 1 }];
                  } else {
                    state.cartItems = state.cartItems.map((item: any, idx: number) =>
                      idx === index ? { ...item, quantity: item.quantity + 1 } : item
                    );
                  }
                  break;
                

            case "REMOVE":
                if (index > -1) {
                    state.cartItems.splice(index, 1);
                }
                break;

            case "DECQTY":
                if (index > -1) {
                    state.cartItems[index].quantity--;
                }
                break;

            case "CLEAR":
                state.cartItems = [];
                break;    
            default:
        }
        return state;
    }
}
