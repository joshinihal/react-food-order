import React, {useContext} from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {

  const cartCtx = useContext(CartContext);
    
  const onAddBtnClick = () => {
    cartCtx.addCartItem({id: props.id, title: props.title, price: props.price, amount:  1});
  };

  const onRemoveBtnClick = () => {
    cartCtx.removeCartItem(props.id);
  };

  return (
    <React.Fragment>
      <div className={classes["item-row"]}>
        <div className={classes["item-container"]}>
          <h3>{props.title}</h3>
          <div className={classes["quantity-container"]}>
            <span>{props.price} Rs.</span>
            <span className={classes["item-amount"]}>x {props.amount}</span>
          </div>
        </div>
        <div>


      {/* If we want to pass params to click 
      We can't just write ...
      onRemove={cartItemRemoveHandler(item.id)}
      ... since this would call the function immediately (and not when the cart item is clicked).
      So, if we want to pass params, we can either use bind (the first param is not used here, so we can write anything in this place) ...
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      ..., or we can create an anonymous function:
      onRemove={() => cartItemRemoveHandler(item.id)}
      Both options are equivalent. */}

          <button
            onClick={onRemoveBtnClick}
            className={classes["quantity-change-btn"]}
            type="button"
          >
            <b>-</b>
          </button>
          <button
            onClick={onAddBtnClick}
            className={classes["quantity-change-btn"]}
            type="button"
          >
            <b>+</b>
          </button>
        </div>
      </div>

      <hr className={classes["horizontal-row"]}></hr>
    </React.Fragment>
  );
};

export default CartItem;
