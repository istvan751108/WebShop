const Storage = (cartItems: any) => {
  localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}
export class CartReducer {
  public static reducer(state: any, action: any) {
    debugger;

    let index = -1;
    if (action.payLoad) {
      index = state.cartItems.findIndex((x: any) => x.id === action.payLoad.id);
    }

    let newItems = [...state.cartItems];
    switch (action.type) {
      case "ADD":
      case "INCQTY":
        if (index === -1) {
          newItems.push({ ...action.payLoad, quantity: 0 });
        } else {
          newItems[index] = {
            ...newItems[index],
            quantity: newItems[index].quantity + 1,
          };
        }
        break;

      case "REMOVE":
        if (index > -1) {
          newItems = state.cartItems.filter(
            (x: { id: any }) => x.id !== action.payLoad.id
          );
        }
        break;

      case "DECQTY":
        if (index > -1) {
          if (newItems[index].quantity > 1) {
            newItems[index] = {
              ...newItems[index],
              quantity: newItems[index].quantity - 1,
            };
          }
        }
        break;

      case "CLEAR":
        newItems = [];
        break;

      default:
    }
    state.cartItems = newItems;
    Storage(newItems);

    return state;
  }
}
