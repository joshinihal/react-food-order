import React, { useReducer } from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addCartItem: () => {},
  removeCartItem: () => {},
  clearCartItems: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const index = state.cartItems.findIndex((el) => el.id === action.item.id);
    const existingItem = state.cartItems[index];

    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.cartItems];
      updatedItems[index] = updatedItem;
    } else {
      // concat is equivalent of JSON.parse(JSON.stringify([...state.cartItems]))
      // when passed nothing in concat, it will create a new array, without replacing existing
      updatedItems = state.cartItems.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === 'REMOVE') {
    const index = state.cartItems.findIndex((el) => el.id === action.id);
    const existingItem = state.cartItems[index];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.cartItems.filter((el) => el.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.cartItems];
      updatedItems[index] = updatedItem;
    }
    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === 'CLEAR') {
    return { cartItems: [], totalAmount: 0 };
  }
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    cartItems: [],
    totalAmount: 0,
  });

  const addCartItem = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeCartItem = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const clearCartItems = () => {
    dispatchCart({ type: "CLEAR" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.cartItems,
        addCartItem,
        removeCartItem,
        clearCartItems,
        totalAmount: cartState.totalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
