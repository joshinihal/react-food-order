import React, { useReducer } from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addCartItem: () => {},
  removeCartItem: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // concat is equivalent of JSON.parse(JSON.stringify([...state.cartItems]))
    // when passed nothing in concat, it will create a new array, without replacing existing
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
      updatedItems = state.cartItems.concat(action.item);
    }
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { cartItems: updatedItems, totalAmount: totalAmount };
  } else if (action.type === "REMOVE") {
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

  return (
    <CartContext.Provider
      value={{
        cartItems: cartState.cartItems,
        addCartItem,
        removeCartItem,
        totalAmount: cartState.totalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
