import React, {useContext, useState} from "react";
import classes from "./Item.module.css";
import CartContext from "../../store/cart-context";


const Item = (props) => {

  const cartCtx = useContext(CartContext);

  const [itemAmount, setItemAmount] = useState(1);

  const onAddBtnClick = () => {
    cartCtx.addCartItem({id: props.id, title: props.title, price: props.price, amount: itemAmount});
  };

  const onAmountChange = (eve) => {
    setItemAmount(eve.target.value);
  };

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
              min="0" 
              onChange={onAmountChange}
              value={itemAmount}
              type="number"
              id="quantity"
              className={classes["amount-quantity"]}
            />
          </div>
          <span>
            <button type="button" disabled={itemAmount <= 0} onClick={onAddBtnClick} className={classes["add-btn"]}>
              <b>+ Add</b>
            </button>
          </span>
        </div>
      </div>
      <hr className={classes["horizontal-row"]}></hr>
    </React.Fragment>
  );
};

export default Item;
