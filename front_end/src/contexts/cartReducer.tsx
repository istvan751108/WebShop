import React from 'react';

export class CartReducer {
    public static reducer(state: any, action: any) {
        debugger;

        switch (action.type) {
            case "ADD":
                const index = state.cartItems.findIndex((x: any) => x.id === action.payLoad.id);

                if (index === -1) {
                    state.cartItems.push({ ...action.payLoad, quantity: 1 });
                }
                else {
                    state.cartItems[index].quantity++;
                }

                return state;

            case "REMOVE":
                return state;
            default:
                return state;
        }
    }
}
