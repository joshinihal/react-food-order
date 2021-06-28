import React, {useState} from 'react';

const CartContext = React.createContext({
    cartItems: [],
    addCartItem: ()=>{},
});

export const CartContextProvider = (props) => {

    const [cartItems, setCartItems] = useState("");

    const addCartItem = (item) => {
        setCartItems((prevState)=>{
            let tempArrOfPrevState = JSON.parse(JSON.stringify([...prevState]));
            const index = tempArrOfPrevState.findIndex(el => el.id === item.id);
            if (index !== -1) {
                const updatedAmount = Number(tempArrOfPrevState[index].amount) + Number(item.amount);
                tempArrOfPrevState[index].amount = updatedAmount;
                return tempArrOfPrevState;
            }
            return [...prevState, item];
        });
    };

    return (
        <CartContext.Provider value={{cartItems: cartItems, addCartItem}} >
            {props.children}
        </CartContext.Provider>
    )
};

export default CartContext;