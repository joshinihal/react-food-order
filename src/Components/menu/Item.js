import React, {useContext, useState, useRef} from "react";
import classes from "./Item.module.css";
import CartContext from "../../store/cart-context";


const Item = (props) => {

  const cartCtx = useContext(CartContext);

  const amountInputRef = useRef();

  // const [itemAmount, setItemAmount] = useState(1);
  const [isAmountValid, setIsAmountValid] = useState(true);

  const onAddBtnClick = () => {
    const enteredAmount = amountInputRef.current.value;
    if(enteredAmount < 1 || enteredAmount > 5 || enteredAmount.trim().length === 0) {
      setIsAmountValid(false);
    } else {
      const enteredAmountNumber = +amountInputRef.current.value;
      cartCtx.addCartItem({id: props.id, title: props.title, price: props.price, amount: enteredAmountNumber});
    }
  };

  // const onAmountChange = (eve) => {
  //   setItemAmount(eve.target.value);
  // };

  return (
    <React.Fragment>
      <div className={classes["item-container"]}>
        <div className={classes["item-details"]}>
          <span>
            <b>{props.title}</b>
          </span>
          <span>
            <i>{props.ingredients}</i>
          </span>
          <span className={classes["item-price"]}>
            <b>{props.price} Rs.</b>
          </span>
        </div>
        <div className={classes["item-amount-container"]}>
          <div className={classes["item-amount-div"]}>
            <label htmlFor="quantity">
              <b>Amount</b>
            </label>
            <input
              ref={amountInputRef}
              min="1" 
              max="5"
              defaultValue="1"
              type="number"
              id="quantity"
              className={classes["amount-quantity"]}
            />
          </div>
          <span>
            <button type="button" onClick={onAddBtnClick} className={classes["add-btn"]}>
              <b>+ Add</b>
            </button>
          </span>
        </div>
      </div>
      {!isAmountValid && <p>Please enter a valid number (1-5).</p>}
      <hr className={classes["horizontal-row"]}></hr>
    </React.Fragment>
  );
};

export default Item;
